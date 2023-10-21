let video = document.querySelector('#video');
let zonaTiempo = document.querySelector(".tiempo");

video.addEventListener('loadedmetadata', function() {
    zonaTiempo.textContent = transformacion(video.duration);
});

const transformacion = function(tiempo) {
    let minutos = Math.floor(tiempo / 60);
    let segundos = Math.floor(tiempo % 60);
    segundos = segundos < 10 ? '0' + segundos : segundos;
    return minutos + ":" + segundos;
};

const inicioVideo=()=>{
    video.play();
}
const pausaVideo=()=>{
    video.pause();
}