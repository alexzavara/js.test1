var arr1 = ["al", "dm", "tr", "ol"];

for (var i = 0; i < arr1.length; i++) {
    $("body").append("<p>" + arr1[i] + "</p>");
}

$("h1").text("frends");

$("p").hide(2000,).fadeIn(2000);

$("p").append(" best");


//fadeOut fadeIn
/*
var a = 1000;
var b = 1000;
for (j = 5; j > 0; j-- ) {
    $("h1").fadeOut(a).fadeIn(b);
    a += 1000;
    b += 1000;
}
*/

//$("h1").fadeOut(3000).delay(5000).fadeIn(2000);

$("h1").fadeTo(2000, 0.1);