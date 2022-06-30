function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'absolute'
    object.style.zIndex = 3
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

newImage('small_red_cap.png', 420, -260)
newImage('small_red_cap.png', 555, -125)
newImage('small_red_cap.png', 880, -90)
newImage('small_red_cap.png', 590, 200)
newImage('small_red_cap.png', 800, 120)
newImage('small_red_cap.png', 500, 30)
newImage('small_red_cap.png', 620, 30)
newImage('small_red_cap.png', 720, -50)
newImage('small_red_cap.png', 720, -200)
newImage('small_blue_cap.png', 460, -200)