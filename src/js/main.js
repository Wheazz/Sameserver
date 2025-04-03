alert("Howdy Partner!");
//calling files in html
const audio1 = document.getElementById('soundhe');
const playandpausebutton = document.getElementById('firtsbutton');
//define something
let isplaying = false
//mytogglyng pause and play strings
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
//
