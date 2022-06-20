let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');

setInterval(() => {
    let day = new Date();
    let hours = day.getHours() * 30;
    let minutes = day.getMinutes() * 6;
    let seconds = day.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
    minute.style.transform = `rotateZ(${minutes}deg)`;
    second.style.transform = `rotateZ(${seconds}deg)`;

    // Digital Clock
    let hh = document.getElementById('hours');
    let mm = document.getElementById('minutes');
    let ss = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let timestamp = h >= 12 ? "PM" : "AM";

    // Conver 24hr clock to 12hr clock
    if (h > 12) {
        h = h - 12;
    }

    // Add zero before single digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hh.innerHTML = h;
    mm.innerHTML = m;
    ss.innerHTML = s;
    ampm.innerHTML = timestamp;
})

