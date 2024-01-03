let tempsDebut = 0;
let tempsEcoule = 0;
let interval;
let chronoGood = false;

function majChrono() {
    let tempsActuel = Date.now();
    tempsEcoule = tempsActuel - tempsDebut;

    let minutes = Math.floor((tempsEcoule / 1000 / 60) % 60);
    let secondes = Math.floor((tempsEcoule / 1000) % 60);
    let centiemes = Math.floor((tempsEcoule / 10) % 100);

    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    secondes = (secondes < 10) ? `0${secondes}` : secondes;
    centiemes = (centiemes < 10) ? `0${centiemes}` : centiemes;

    document.getElementById('chrono').innerHTML = `${minutes}:${secondes}:${centiemes}`;
}

function startStop() {
    if (!chronoGood) {
        tempsDebut = Date.now() - tempsEcoule;
        interval = setInterval(majChrono, 10);
        chronoGood = true;
    } else {
        clearInterval(interval);
        chronoGood = false;
    }
}

function reset() {
    clearInterval(interval);
    tempsDebut = Date.now();
    tempsEcoule = 0;
    chronoGood = false;
    document.getElementById('chrono').innerHTML = '00:00:00';
}

document.getElementById('startStopButton').addEventListener('click', startStop);
document.getElementById('resetButton').addEventListener('click', reset);