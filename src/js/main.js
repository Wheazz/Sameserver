alert("Howdy Partner!");
const audio1 = document.getElementById('soundhe');
const playandpausebutton = document.getElementById('firtsbutton');

let isplaying = false

function toggleplaypause(){
 if (isplaying){
        audio1.pause();
        playandpausebutton.textContent= 'pause';
    }
    else{
         audio1.play();
         audio1.loop=true;
        playandpausebutton.textContent= 'playing';
    }
    isplaying=!isplaying;
}
playandpausebutton.addEventListener('click', toggleplaypause);
