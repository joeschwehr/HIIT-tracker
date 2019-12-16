
// function init() {
//     // list of languages is probably not loaded, wait for it
//     if(window.speechSynthesis.getVoices().length === 0) {
//         window.speechSynthesis.addEventListener('voiceschanged', function() {
//             textToSpeech();
//         });
//     }
//     else {
//         // languages list available, no need to wait
//         textToSpeech()
//     }
// }

export default function textToSpeech(text, desiredVoice=1) {
	// get all voices that browser offers
	let available_voices = window.speechSynthesis.getVoices();

	// this will hold an english voice
	let english_voice1 = '';
	let english_voice2 = '';
	let ind = 0;

	// find voice by language locale "en-US"
	// if not then select the first voice
	for(let i=0; i<available_voices.length; i++) {
		if(available_voices[i].lang === 'en-US') {
			english_voice1 = available_voices[i];
			ind = i+1;
			break;
		}
	}

	for(let i=ind; i<available_voices.length; i++) {
		if(available_voices[i].name === 'Samantha') {
			english_voice2 = available_voices[i];
			ind = i;
			break;
		}
	}

	if(english_voice1 === '')
		english_voice1 = available_voices[0];

	if(english_voice2 === '')
		english_voice2 = available_voices[0];

	// new SpeechSynthesisUtterance object
	let utter = new SpeechSynthesisUtterance();
	utter.rate = 1.1;
	utter.pitch = 1;
	utter.text = text;
	if (desiredVoice === 1) {
		utter.voice = english_voice1;
	} else
		utter.voice = english_voice2

	// speak
	window.speechSynthesis.speak(utter);
}