function showInput() {
    document.getElementById('display').innerHTML =
        document.getElementById("team_name").value;
}

function heresThePitch(){
    document.getElementById('pitch').value = 
        (Math.floor(Math.random() * 100)) + 1;
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
    

