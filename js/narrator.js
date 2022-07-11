const d = document;
const w = window;

export default function narrator(){
    const $speechSelect = d.getElementById('speech-select');
    const $speechTextarea = d.getElementById('speech-text');
    const $speechMessage = d.getElementById('speech-button');

    const speechMessage = new SpeechSynthesisUtterance();

    //console.log(speechMessage);

    let voices = [];

    d.addEventListener('DOMContentLoaded', e => {
        w.speechSynthesis.addEventListener('voiceschanged', e => {
            voices = w.speechSynthesis.getVoices();

            voices.forEach(voice => {
                const $option = d.createElement('option');
                $option.value = voice.name;
                $option.textContent = `${voice.name} --- ${voice.lang}`;

                $speechSelect.appendChild($option);
            });
        });
    });

    d.addEventListener('change', e => {
        if(e.target === $speechSelect){
            speechMessage.voice = voices.find(voices => voices.name === e.target.value);
        }
    });

    d.addEventListener('click', e => {
        if(e.target === $speechMessage){
            speechMessage.text = $speechTextarea.value;
            w.speechSynthesis.speak(speechMessage);
        }
    });


}

