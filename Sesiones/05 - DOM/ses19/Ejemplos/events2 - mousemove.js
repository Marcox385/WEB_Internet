let container = document.getElementById('container');
let circle = document.getElementById('circle');
let txtX = document.getElementById('txtX');
let txtY = document.getElementById('txtY');

container.addEventListener('mousemove', function(event) {
    txtX.value = event.clientX;
    txtY.value = event.clientY;

    circle.style.top = (event.clientY - (circle.offsetHeight/2)) + "px";
    circle.style.left = (event.clientX - (circle.offsetWidth/2)) + "px";
});
