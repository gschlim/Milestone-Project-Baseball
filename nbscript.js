function showInput() {
    document.getElementById('display').innerHTML =
        document.getElementById("team_name").value;
}
//One of the first Google searches I made was how to instantly populate a text box from a form without console.log, and showInput is an example function from w3schools modified for the variables in my html file//
function heresThePitch(){
    document.getElementById('pitch').value = 
        (Math.floor(Math.random() * 100)) + 1;
    document.getElementById('gameplay').disabled = true
}

function answer(){
    var swingnum = document.getElementById('swing').value
    var pitchnum = document.getElementById('pitch').value
    var pitchdiff = Math.abs(swingnum - pitchnum)
    if (pitchdiff > 50) {
        document.getElementById('result').value = 100 - pitchdiff
    } else {
        document.getElementById('result').value = pitchdiff  
    }
}
    
function yerout(){
    document.getElementById('howmanyouts').innerHTML = "X X X"
    
    var div = document.createElement("div");
    div.style.width = "400px";
    div.style.height = "50px";
    div.style.zIndex = "2";
    div.style.background = "red";
    div.style.color = "white";
    div.style.position = "absolute";
    div.style.top = "300px";
    div.style.left = "100px";
    div.innerHTML = "Monsters Win";
    div.style.fontSize = "40px";
    div.style.textAlign = "center";

    document.getElementById("main").appendChild(div);
}

function youwin(){
    document.getElementById('homescore').innerHTML = "4"

    var div = document.createElement("div");
    div.style.width = "400px";
    div.style.height = "50px";
    div.style.zIndex = "2";
    div.style.background = "blue"
    div.style.color = "white";
    div.style.position = "absolute";
    div.style.top = "300px";
    div.style.left = "100px";
    div.innerHTML = document.getElementById("team_name").value + " Win!!!";
    div.style.fontSize = "40px";
    div.style.textAlign = "center";

    document.getElementById("main").appendChild(div);
}

function dingdong(){
    document.getElementById('homescore').innerHTML = "6"

    var div = document.createElement("div");
    div.style.width = "400px";
    div.style.height = "50px";
    div.style.zIndex = "2";
    div.style.background = "blue"
    div.style.color = "white";
    div.style.position = "absolute";
    div.style.top = "300px";
    div.style.left = "100px";
    div.innerHTML = document.getElementById("team_name").value + " Win!!!";
    div.style.fontSize = "40px";
    div.style.textAlign = "center";

    document.getElementById("main").appendChild(div);
}

function winlose(){
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
    } else  if (absdiff < 41) {
        document.getElementById('resultb').value = "Flyout"
        yerout()
    } else {
        document.getElementById('resultb').value = "Strikeout!"
        yerout()
    }
    
}



