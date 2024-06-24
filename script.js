let coffee1 = document.querySelector('.thumb1');
let coffee2 = document.querySelector('.thumb2');
let coffee3 = document.querySelector('.thumb3');
let navigationStats = false;
let showMenu = document.querySelector(".showMenu");

const navigation = document.getElementById('navigation');
const circle = document.querySelector('.circle');

coffee1.addEventListener("click", function () {
    document.querySelector('.starbucks').src = "images/img1.png";
});
coffee2.addEventListener("click", function () {
    document.querySelector('.starbucks').src = "images/img2.png";
});
coffee3.addEventListener("click", function () {
    document.querySelector('.starbucks').src = "images/img3.png";
});

coffee1.addEventListener("click", function () {
    circle.style.background = "#017143";
});
coffee2.addEventListener("click", function () {
    circle.style.background = "#eb7495";
});
coffee3.addEventListener("click", function () {
    circle.style.background = "#d752b1";
});

navigation.addEventListener("click", function (){
    navigationStats = !navigationStats
    if(window.matchMedia("(max-width: 991px)").matches && (navigationStats) ){
        navigation.style.backgroundImage ="url('images/x-regular-24.png')";
        showMenu.style.zIndex = "10";
        showMenu.style.opacity = "1";
    }else {
        navigation.style.backgroundImage ="url('images/menu-regular-24.png')";
        showMenu.style.zIndex = "-10";
        showMenu.style.opacity = "0";
    }
});
