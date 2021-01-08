
var offsetTop = 0;
var offsetLeft = 0;
var heading = $("#heading").offset();




var testAnimation = function() {

    if (offsetTop === 0 && offsetLeft === 0){
        offsetLeft = 200;
    }
    else if (offsetTop === 0 && offsetLeft === 200) {
        offsetTop = 200;

    }
    else if (offsetTop === 200 && offsetLeft === 200) {
        offsetLeft = 0;

    }
    else if (offsetTop === 200 && offsetLeft === 0) {
        offsetTop = 0;
        
    }
    $("#heading").offset({top:offsetTop, left:offsetLeft });
};

var timerId = setInterval(testAnimation, 500);


