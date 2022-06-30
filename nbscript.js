function showInput() {
    document.getElementById('display').innerHTML =
        document.getElementById("team_name").value;
}

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'absolute'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

newImage('small_red_cap.png', 100, 100)

