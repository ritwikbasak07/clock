

const checkBox = document.querySelector("#accept");

let check = checkBox.checked;

checkBox.addEventListener("change", (e) =>{
    if(e.target.checked){
        englishBefore();
       hindi();
    }else{
        hindiBefore();
       english();
    }
})

function hindi(){
    let cssc = document.querySelector(".hindi");
    
    cssc.style.transition = "0.2s";
    cssc.style.fontSize = "25px";
    cssc.style.margin = "0px 0px 0px 7.3px";
}
function hindiBefore(){
    let cssc = document.querySelector(".hindi");
    cssc.style.fontSize = "20px";
    cssc.style.margin = "2.5px 10px";
}

function english(){
    let cssc = document.querySelector(".eng");
    cssc.style.transition = "0.2s";
    cssc.style.fontSize = "25px";
    cssc.style.margin = "0px 7.3px 0px 0px";
}
function englishBefore(){
    let cssc = document.querySelector(".eng");
    cssc.style.fontSize = "20px";
    cssc.style.margin = "2.5px 10px";
}


function updateClock() {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDeg = ((hour / 12) * 360) + ((minute / 60) * 30) + ((second / 60) * .5);
    document.querySelector(".hour").style.transform = `rotate(${hourDeg}deg)`;
    const minuterDeg = ((minute / 60) * 360) + ((second / 60) * 6);
    document.querySelector(".minute").style.transform = `rotate(${minuterDeg}deg)`;
    const secondDeg = (second / 60) * 360;
    document.querySelector(".second").style.transform = `rotate(${secondDeg}deg)`;
    setTimeout(updateClock, 1000);
}
updateClock();

