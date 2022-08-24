
function hindi() {
    let cssc = document.querySelector(".hindi");

    cssc.style.transition = "0.2s";
    cssc.style.fontSize = "25px";
    cssc.style.margin = "0px 0px 0px 7.3px";
}
function hindiBefore() {
    let cssc = document.querySelector(".hindi");
    cssc.style.fontSize = "20px";
    cssc.style.margin = "2.5px 10px";
}

function english() {
    let cssc = document.querySelector(".eng");
    cssc.style.transition = "0.2s";
    cssc.style.fontSize = "25px";
    cssc.style.margin = "0px 7.3px 0px 0px";
}
function englishBefore() {
    let cssc = document.querySelector(".eng");
    cssc.style.fontSize = "20px";
    cssc.style.margin = "2.5px 10px";
}

let check;

let checkBox = document.querySelector("#accept");
checkBox.addEventListener("change", (e) => {
    check = e.target.checked;
    if (check) {
        englishBefore();
        hindi();
    } else {
        hindiBefore();
        english();
    }
})

function updateClock() {
    let a = 54;
    let currentDate = new Date();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes()+a;
    let second = currentDate.getSeconds();
    hourDeg = ((hour / 12) * 360) + ((minute / 60) * 30) + ((second / 60) * .5);
    document.querySelector(".hour").style.transform = `rotate(${hourDeg}deg)`;
    minuterDeg = ((minute / 60) * 360) + ((second / 60) * 6);
    document.querySelector(".minute").style.transform = `rotate(${minuterDeg}deg)`;
    secondDeg = (second / 60) * 360;
    document.querySelector(".second").style.transform = `rotate(${secondDeg}deg)`;
setTimeout(updateClock, 1000);


}


updateClock();


