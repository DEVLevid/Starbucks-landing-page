let coffee1 = document.querySelector('.thumb1');
let coffee2 = document.querySelector('.thumb2');
let coffee3 = document.querySelector('.thumb3');

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


