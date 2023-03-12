let divList = document.querySelectorAll('div');

const U = new SpeechSynthesisUtterance();
/* let voices = window.speechSynthesis.getVoices(); */

for (let i = 0; i < divList.length; i++){
    divList[i].addEventListener('click', function(){
        U.text = divList[i].textContent;
        let hash = window.location.hash
        if(hash == "#en") {
            U.lang = "en-US";
        }
        if (!speechSynthesis.speaking) {
            speechSynthesis.speak(U)
        }
    });
}


