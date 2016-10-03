/**
 * Created by dorritydj on 10/3/16.
 */


/**
 Applies opening fade on page load
 */
changeOpac("header", 1, 2500);

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
 Fades in name after a button is pressed
 */

/**
 Changes what info in displayed in the middle depending on the button pressed
 */
var prev = "";
var curr = "";

function switchInfo(which) {
    curr = which.id;

    $("nav li a").removeClass("active")
    $(which).addClass("active");

    // TODO: Add functionality to set an active class on the selected nav item

    if( prev == "" ){
        changeOpac(curr, 1, 500);
        changeOpac("header", 0, 500);

        prev = curr;
    }else if( prev != ""){
        changeOpac(prev, 0, 500);
        changeOpac(curr, 1, 500);

        prev = curr
    }else if( prev == curr ){
        return;
    }
}

function changeOpac(div, i, time) {
    $(div).animate({opacity: i}, time, "linear");
}
