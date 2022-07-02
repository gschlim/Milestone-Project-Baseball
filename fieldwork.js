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

newImage('small_red_cap.png', 420, -400)
newImage('small_red_cap.png', 555, -265)
newImage('small_red_cap.png', 880, -230)
newImage('small_red_cap.png', 590, 60)
newImage('small_red_cap.png', 800, -20)
newImage('small_red_cap.png', 500, -110)
newImage('small_red_cap.png', 620, -110)
newImage('small_red_cap.png', 720, -190)
newImage('small_red_cap.png', 720, -340)
newImage('small_blue_cap.png', 455, -365)
newImage('small_blue_cap.png', 665, -365)
newImage('small_blue_cap.png', 665, -155)
newImage('small_blue_cap.png', 455, -155)