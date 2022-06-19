const clock = document.querySelector(".clock");

function getClock () {
    const newDate = new Date();
    const getHr = String(newDate.getHours()).padStart(2, "0"),
    getMin = String(newDate.getMinutes()).padStart(2, "0"),
    getSec = String(newDate.getSeconds()).padStart(2, "0");
    clock.innerText = `${getHr}:${getMin}:${getSec}`;
    clock.style.color = "firebrick";
}

getClock();
setInterval(getClock, 1000);

