const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
    let dateToday = new Date();
    // console.log(dateToday);

    let hr = dateToday.getHours();
    hour.textContent = hr;

    let min = dateToday.getMinutes();
    if (min <10) {
        min = '0' + min;
    }
    minutes.textContent = min;

    let sec = dateToday.getSeconds();
    if (sec <10) {
        sec = '0' + sec;
    }
    seconds.textContent = sec;

    console.log(hr, min, sec);

}, 1000);
