/**
 * Created by dorritydj on 10/3/16.
 */


/**
 Applies opening fade on page load
 */
changeOpac("header", 1, 1000);

/**
 * Applies fade for navigation
 */
$('nav li a').hover(
    function() {
        $(this).stop().animate({backgroundColor:'#000'}, 200);
    }, function () {
        $(this).stop().animate({backgroundColor:'#212121'}, 100);
    }
);

/**
 * Applies an animation for the hr under the images
 */
//TODO: Make this scalable for different images
$("#facebook > a").hover(
    function() {
        $("#facebook-hr").stop().animate({
            width: '100px',
            borderColor: '#fff'
        }, 200);
    }, function () {
        $("#facebook-hr").stop().animate({
            width:'0px',
            borderColor: '#111'
        }, 100);
    }
);

$("#instagram > a").hover(
    function() {
        $("#instagram-hr").stop().animate({
            width: '100px',
            borderColor: '#fff'
        }, 200);
    }, function () {
        $("#instagram-hr").stop().animate({
            width:'0px',
            borderColor: '#111'
        }, 100);
    }
);

$("#linkedin > a").hover(
    function() {
        console.log(this);
        $("#linkedin-hr").stop().animate({
            width: '100px',
            borderColor: '#fff'
        }, 200);
    }, function () {
        $("#linkedin-hr").stop().animate({
            width:'0px',
            borderColor: '#111'
        }, 100);
    }
);


/**
 Changes what info in displayed in the middle depending on the button pressed
 */
var prev = "";
var curr = "";

function switchInfo(which) {
    curr = which.id;

    $("nav li a").removeClass("active");
    $(which).addClass("active");

    if( prev == "" ){
        changeOpac("#" + curr + "info", 1, 500);
        changeOpac("header", 0, 500);

        prev = curr;
    }else if( prev != ""){
        changeOpac("#" + prev + "info", 0, 500);
        changeOpac("#" + curr + "info", 1, 500);

        prev = curr
    }else if( prev == curr ){
        return;
    }
}

function changeOpac(div, i, time) {
    $(div).animate({opacity: i}, time, "linear");

    if( i == 1 ){
        $(div).css("z-index", 999);
    }else if( i == 0 ){
        $(div).css("z-index", 0);
    }
}
