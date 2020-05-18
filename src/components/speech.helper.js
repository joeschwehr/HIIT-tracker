// Necessary for safari
// Safari will only speak after speaking from a button click
// var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export function iosVoices() {
    console.log('iosVoices');
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

export function voiceInit() {
    // this will hold an english voice
    let voices = [];

    // list of languages is probably not loaded, wait for it
    if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.addEventListener('voiceschanged', function () {
            voices = getVoices();
            document.body.addEventListener('click', () => textToSpeech('1 '));
            setTimeout(() => {
                document.body.click();

                document.body.dispatchEvent(new Event('click'));
                document.body.removeEventListener('click');
            }, 200);

            return voices;
        });
    } else {
        // languages list available, no need to wait
        voices = getVoices();
        document.body.addEventListener('click', () => textToSpeech('2 '));
        setTimeout(() => {
            document.body.click();

            document.body.dispatchEvent(new Event('click'));
            document.body.removeEventListener('click');
        }, 200);

        return voices;
    }
}

export function textToSpeech(muted = false, text, voice, rate = 1) {
    if (muted) return;

    // new SpeechSynthesisUtterance object
    let utter = new SpeechSynthesisUtterance();
    utter.rate = rate;
    utter.pitch = 1;
    utter.volume = 0.9;

    utter.text = text;
    utter.voice = voice;

    // speak
    console.log(text);
    window.speechSynthesis.speak(utter);
}

export function getVoices() {
    // console.log('getting voices');
    let voice1 = null;
    let voice2 = null;

    // get all voices that browser offers
    let available_voices = window.speechSynthesis.getVoices();

    // find voice by language locale "en-US"
    // if not then select the first voice
    const englishVoices = available_voices.filter(
        (voice) => !voice.voiceURI.includes('Microsoft') && voice.lang.startsWith('en')
    );

    if (englishVoices.length) {
        voice1 = englishVoices.find((voice) => voice.name.includes('Alex'));
        // voice2 = englishVoices.find((voice) => voice.name.includes('Samantha'));

        if (!voice1) {
            voice1 = englishVoices[0];
        }

        // if (!voice2) {
        //     voice2 = englishVoices.find((voice) => voice.name.includes('Female'));
        // }
        voice2 = voice1;
    }

    if (!voice1) {
        voice1 = available_voices[0];
    }

    if (!voice2) {
        voice2 = available_voices[0];
    }

    return [voice1, voice2];
}
