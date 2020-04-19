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

export function voiceInit() {
    // list of languages is probably not loaded, wait for it
    if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.addEventListener('voiceschanged', function () {
            textToSpeech(' ');
        });
    } else {
        // languages list available, no need to wait
        textToSpeech(' ');
    }
}

export function textToSpeech(muted = false, text, desiredVoice = 1) {
    if (muted) return;

    // get all voices that browser offers
    let available_voices = window.speechSynthesis.getVoices();

    // this will hold an english voice
    let english_voice1 = '';
    let english_voice2 = '';
    let ind = 0;

    // find voice by language locale "en-US"
    // if not then select the first voice
    for (let i = 0; i < available_voices.length; i++) {
        if (available_voices[i].lang === 'en-US') {
            english_voice1 = available_voices[i];
            ind = i + 1;
            break;
        }
    }

    for (let i = ind; i < available_voices.length; i++) {
        if (available_voices[i].name === 'Samantha') {
            english_voice2 = available_voices[i];
            ind = i;
            break;
        }
    }

    if (english_voice1 === '') english_voice1 = available_voices[0];

    if (english_voice2 === '') english_voice2 = available_voices[0];

    // new SpeechSynthesisUtterance object
    let utter = new SpeechSynthesisUtterance();
    utter.rate = 1.1;
    utter.pitch = 1;
    utter.volume = 0.9;

    utter.text = text;
    if (desiredVoice === 1) {
        utter.voice = english_voice1;
    } else utter.voice = english_voice2;

    // speak
    window.speechSynthesis.speak(utter);
}
