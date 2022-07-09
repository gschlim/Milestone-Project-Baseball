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
newImage('small_red_cap.png', 420, -500)
newImage('small_red_cap.png', 555, -365)
newImage('small_red_cap.png', 880, -330)
newImage('small_red_cap.png', 590, -40)
newImage('small_red_cap.png', 800, -120)
newImage('small_red_cap.png', 500, -220)
newImage('small_red_cap.png', 620, -220)
newImage('small_red_cap.png', 720, -290)
newImage('small_red_cap.png', 720, -440)
newImage('small_blue_cap.png', 455, -465)
newImage('small_blue_cap.png', 665, -465)
newImage('small_blue_cap.png', 665, -255)
newImage('small_blue_cap.png', 455, -255)

