var words = [       //запас слов из которых выберется одно
    "hello",
    "programm",
    "travel",
    "guitar",
    "promoute",
    "clever",
    "sunny",
    "bread"
];

var word = words[Math.floor(Math.random() * words.length)];  //выбираем случайное слово

var answerArray = [];   //создем пустой массив, для угадываемого слова
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length; //Записываем сколько осталось угадать

while (remainingLetters > 0) {     //Время работы игры
    alert(answerArray.join(" "));   //Показать результат 
    var guess = prompt("Enter letter");  //Спрашиваем букву помещаем в переменную guess
    if (guess === null) {  //Если в prompt нажать отмена, в переменную guess вернется null
        break;             //Тогда игра будет завершена
    }
    else if (guess.length !== 1) {    //Проверка на то, чтоб длинна была в точности одна буква
        alert("Only one letter please");
    }
    else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(" "));
alert("Nice your word is " + word);