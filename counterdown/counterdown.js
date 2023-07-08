"use strict";
AOS.init();

const enddate = "29 June 2023 12:00 PM";

document.getElementById('end_date').innerText = enddate;

const inputs = document.querySelectorAll('input');

const congratulates = document.querySelector("#congratulations");

const Clock = () => {

    const end = new Date(enddate);

    const now = new Date();

    const diff = (end - now) / 1000;// convert  into second from millisecinds.
    if (diff < 0) {
        // alert("Happy birthday bro")

        congratulates.innerHTML = `"Hope all your birthday wishes come true!”`;
    } else {
        inputs[0].value = Math.floor(diff / 3600 / 24);
        inputs[1].value = Math.floor(diff / 3600) % 24;
        inputs[2].value = Math.floor(diff / 60) % 60;
        inputs[3].value = Math.floor(diff) % 60;
    }
    // console.log(end);
    // console.log(now);
    // console.log(diff);



}
Clock();

// 1 days=24 hours;

// 1 hours=60 minutes;

// 60 minutes=3600 seconds;

setInterval(() => {
    Clock();
}, 1000);