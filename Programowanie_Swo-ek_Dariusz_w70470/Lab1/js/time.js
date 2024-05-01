function showTime() {
    var currentTime = new Date(); 
    var hours = currentTime.getHours(); 
    var minutes = currentTime.getMinutes(); 
    var seconds = currentTime.getSeconds(); 

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById('clock').textContent = timeString;

    setTimeout(showTime, 1000);
}

window.onload = function() {
    showTime();
};
