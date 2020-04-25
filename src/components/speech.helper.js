// Necessary for safari
// Safari will only speak after speaking from a button click
// var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export function iosVoices() {
    function SpeakText() {
        var msg = new SpeechSynthesisUtterance();
        window.speechSynthesis.speak(msg);

        document.getElementsByClassName('App')[0].removeEventListener('click', SpeakText);
    }

    window.addEventListener('load', function () {
        document.getElementsByClassName('App')[0].addEventListener('click', SpeakText);
    });

    // Needed to change between the two audio contexts
    var AudioContext = window.AudioContext || window.webkitAudioContext;

    var context;
    var processor;

    // Overrides the base constructor to use a singleton like structure
    // Needed for Safari
    var BasePrototype = AudioContext.prototype;
    AudioContext = function () {
        return context;
    };
    AudioContext.prototype = BasePrototype;

    // Sets the old style getUserMedia to use the new style that is supported in more browsers
    window.navigator.getUserMedia = function (constraints, successCallback, errorCallback) {
        context = new BasePrototype.constructor();
        processor = context.createScriptProcessor(1024, 1, 1);
        processor.connect(context.destination);

        window.navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (e) {
                successCallback(e);
            })
            .catch(function (e) {
                errorCallback(e);
            });
    };
}
////////////////////////////////////////////////////////////////
var available_voices = null;

// this will hold an english voice
var voice1 = '';
var voice2 = '';

export function voiceInit() {
    // list of languages is probably not loaded, wait for it
    if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.addEventListener('voiceschanged', function () {
            getVoices();
            textToSpeech(' ');
        });
    } else {
        // languages list available, no need to wait
        getVoices();
        textToSpeech(' ');
    }
}

export function textToSpeech(muted = false, text, desiredVoice = 1) {
    if (muted) return;

    // new SpeechSynthesisUtterance object
    let utter = new SpeechSynthesisUtterance();
    utter.rate = 1.1;
    utter.pitch = 1;
    utter.volume = 0.9;

    utter.text = text;
    if (desiredVoice === 1) {
        utter.voice = voice1;
    } else utter.voice = voice2;

    // speak
    window.speechSynthesis.speak(utter);
}

function getVoices() {
    // get all voices that browser offers
    available_voices = window.speechSynthesis.getVoices();

    // find voice by language locale "en-US"
    // if not then select the first voice
    const englishVoices = available_voices.filter(
        (voice) => !voice.voiceURI.includes('Microsoft') && voice.lang.startsWith('en')
    );

    if (englishVoices.length) {
        voice1 = englishVoices.find((voice) => voice.name.includes('Alex'));
        voice2 = englishVoices.find((voice) => voice.name.includes('Samantha'));

        if (!voice1) {
            voice1 = englishVoices[0];
        }

        if (!voice2) {
            voice2 = englishVoices.find((voice) => voice.name.includes('Female'));
        }
    }

    if (!voice1) {
        voice1 = available_voices[0];
    }

    if (!voice2) {
        voice2 = available_voices[0];
    }
}
