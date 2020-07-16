var currentTime = document.querySelector('.current-time');

setInterval(() => {
    let currentDate = new Date();
    currentTime.innerHTML = currentDate.toLocaleTimeString();
}, 1000);