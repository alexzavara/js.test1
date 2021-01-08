

$( "html" ).click(function(event){  //При нажатии на любую часть html 
    $("#heading").offset({         //Найти id heading и передать координаты X и Y
        left: event.pageX,
        top: event.pageY
    });
});