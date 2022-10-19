const hour = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const ampm = document.getElementById('ampm')

console.dir(hour);
console.dir(seconds);


function Updateclock() {
    let hr = new Date().getHours()
    let mn = new Date().getMinutes()
    let sc = new Date().getSeconds()
    let amp = "AM"

    if (hr > 12) {
        hr = hr - 12
        amp = "PM"
    }

    if (hr < 10) {
        hr = "0" + hr;
    }
    if (mn < 10) {
        mn = "0" + mn;
    }
    if (sc < 10) {
        sc = "0" + sc;
    }

    // console.log(hr);
    // console.dir(sc);

    hour.innerText = hr;
    minutes.innerText = mn;
    seconds.innerText = sc;
    ampm.innerText = amp;
}

console.dir(seconds)

setInterval(Updateclock, 0)