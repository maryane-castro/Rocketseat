
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let minutes



buttonPlay.addEventListener('click', trocar)
buttonPause.addEventListener('click', trocar)
buttonStop.addEventListener('click', trocar)


function trocar(){
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    buttonSet.classList.toggle('hide')
    buttonStop.classList.toggle('hide')
}



