var abcFunc = function(arr1, arr2) {
    var lengthOfarr1 = arr1.length;

    if (lengthOfarr1 < arr2.length || lengthOfarr1 > arr2.length) {
        return console.log("Choose same length");
    }

    else {
        var first = 0;
        var second = 0;
        for (i = 0; i < lengthOfarr1; i++) {
            if (arr1[i] === arr2[i]) {
                first++
                second++
            }
            else {
                first++
            }
        }
        return first === second;
    }
};