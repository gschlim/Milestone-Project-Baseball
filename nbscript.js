function showInput() {
    document.getElementById('display').innerHTML =
        document.getElementById("team_name").value;
}
//One of the first Google searches I made was how to instantly populate a text box from a form without console.log, and showInput is an example function from w3schools modified for the variables in my html file//
function heresThePitch() {
    document.getElementById('pitch').value =
        (Math.floor(Math.random() * 100)) + 1;
    document.getElementById('gameplay').disabled = true
}

function answer() {
    var swingnum = document.getElementById('swing').value
    var pitchnum = document.getElementById('pitch').value
    var pitchdiff = Math.abs(swingnum - pitchnum)
    if (pitchdiff > 50) {
        document.getElementById('result').value = 100 - pitchdiff
    } else {
        document.getElementById('result').value = pitchdiff
    }
}

var red = document.createElement("div");
red.style.width = "400px";
red.style.height = "50px";
red.style.zIndex = "2";
red.style.background = "red";
red.style.color = "white";
red.style.position = "absolute";
red.style.top = "305px";
red.style.left = "100px";
red.innerHTML = "Monsters Win";
red.style.fontSize = "40px";
red.style.textAlign = "center";

let blu;

function yerout() {
    document.getElementById('howmanyouts').innerHTML = "X X X"
    document.getElementById("main").appendChild(red);
}

function youwin() {
    document.getElementById('homescore').innerHTML = "4"

    blu = document.createElement("div");
    blu.style.width = "400px";
    blu.style.height = "50px";
    blu.style.zIndex = "2";
    blu.style.background = "blue";
    blu.style.color = "white";
    blu.style.position = "absolute";
    blu.style.top = "305px";
    blu.style.left = "100px";
    blu.innerHTML = document.getElementById('team_name').value + " Win!!!";
    blu.style.fontSize = "40px";
    blu.style.textAlign = "center";

    document.getElementById("main").appendChild(blu);
}

function dingdong() {
    document.getElementById('homescore').innerHTML = "6"

    var blu = document.createElement("div");
    blu.style.width = "400px";
    blu.style.height = "50px";
    blu.style.zIndex = "2";
    blu.style.background = "blue";
    blu.style.color = "white";
    blu.style.position = "absolute";
    blu.style.top = "305px";
    blu.style.left = "100px";
    blu.innerHTML = document.getElementById('team_name').value + " Win!!!";
    blu.style.fontSize = "40px";
    blu.style.textAlign = "center";

    document.getElementById("main").appendChild(blu);
}

function winlose() {
    var swingnum = document.getElementById('swing').value
    var pitchnum = document.getElementById('pitch').value
    var pitchdiff = Math.abs(swingnum - pitchnum)
    if (pitchdiff > 50) {
        var absdiff = 100 - pitchdiff
    } else {
        var absdiff = pitchdiff
    }
    if (absdiff < 4) {
        document.getElementById('resultb').value = "HOME RUN"
        dingdong()
    } else if (absdiff < 11) {
        document.getElementById('resultb').value = "Single"
        youwin()
    } else if (absdiff < 41) {
        document.getElementById('resultb').value = "Flyout"
        yerout()
    } else {
        document.getElementById('resultb').value = "Strikeout!"
        yerout()
    }

}

function unlock() {
    document.getElementById('gameplay').disabled = false;
    document.getElementById('howmanyouts').innerHTML = "X X O";
    document.getElementById('homescore').innerHTML = "2";
    if (red) {
        red.remove()
    }
    if (blu) {
        blu.remove()
    }

}



