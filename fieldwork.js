function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'absolute'
    object.style.zIndex = 1
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
//function NewImage is a tweaked version of the Web Game part 1 activity from class, which I am using to place the two teams precisely where I want them on the field background//
newImage('small_red_cap.png', 420, -600)
newImage('small_red_cap.png', 555, -465)
newImage('small_red_cap.png', 880, -430)
newImage('small_red_cap.png', 590, -140)
newImage('small_red_cap.png', 800, -220)
newImage('small_red_cap.png', 500, -310)
newImage('small_red_cap.png', 620, -310)
newImage('small_red_cap.png', 720, -390)
newImage('small_red_cap.png', 720, -540)
newImage('small_blue_cap.png', 455, -565)
newImage('small_blue_cap.png', 665, -565)
newImage('small_blue_cap.png', 665, -355)
newImage('small_blue_cap.png', 455, -355)

