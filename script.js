const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

function clockTick(){
    const date = new Date();
    const seconds = date.getSeconds()/60;
    const minutes = (seconds + date.getMinutes())/60;
    const hours = (minutes + date.getHours())/60;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minuteHand,minutes);
    rotateClockHand(secondHand,seconds);
}

function rotateClockHand(element, rotation){
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTick,1000);