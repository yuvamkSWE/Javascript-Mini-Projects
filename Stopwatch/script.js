const display = document.querySelector('.time');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

document.querySelector('.start-button').addEventListener('click', start);
document.querySelector('.stop-button').addEventListener('click', stop);
document.querySelector('.reset-button').addEventListener('click', reset);

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10); // Pass the function reference
        isRunning = true;
    }
}

function update() {
    elapsedTime = Date.now() - startTime; // Current - start time

    // Format ms into readable time
    let hours = Math.floor(elapsedTime / (1000 * 3600));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor((elapsedTime % 1000 / 10));

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function stop(){

    if(isRunning){
        clearInterval(timer);
        isRunning = false;
        elapsedTime = Date.now() - startTime;
    }
}
function reset(){
    stop();
    elapsedTime = 0;
    display.textContent =`00:00:00:00`;
}
