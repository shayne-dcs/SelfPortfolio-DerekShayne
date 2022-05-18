
document.getElementById("Grow").addEventListener("click", function () {

    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";

});

document.getElementById("Blue").addEventListener("click", function () {

    document.getElementById("box").style.backgroundColor = "blue";


});

document.getElementById("Green").addEventListener("click", function () {

    document.getElementById("box").style.backgroundColor = "green";


});

document.getElementById("Fade").addEventListener("click", function () {


    document.getElementById("box").style.opacity = "0.5";

});

document.getElementById("Shrink").addEventListener("click", function () {

    document.getElementById("box").style.height = "75px";
    document.getElementById("box").style.width = "75px";


});

document.getElementById("Reset").addEventListener("click", function () {

    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.opacity = "1";

});