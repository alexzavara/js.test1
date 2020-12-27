//запас слов из которых выберется одно
var words = [       
    "hello",
    "programm",
    "travel",
    "guitar",
    "promoute",
    "clever",
    "sunny",
    "bread"
];

//выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];  

//создем пустой массив, для угадываемого слова
var answerArray = [];   
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

//Записываем сколько осталось угадать
var remainingLetters = word.length; 
//Выбор колличества шагов
var remainingSteps = 20;

while (remainingLetters > 0 && remainingSteps > 0) {     //Время работы игры
    alert(answerArray.join(" ") + "    (remain " + remainingSteps + ")");   //Показать результат 
    var guess = prompt("Enter letter");  //Спрашиваем букву помещаем в переменную guess
    if (guess === null) {  //Если в prompt нажать отмена, в переменную guess вернется null
        break;             //Тогда игра будет завершена
    }
    else if (guess.length !== 1) {    //Проверка на то, чтоб длинна была в точности одна буква
        alert("Only one letter please");
        remainingSteps--
    }
    else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess.toLowerCase()) {
                answerArray[j] = guess.toLowerCase();
                remainingLetters--;
                remainingSteps++;
            }
        }
        remainingSteps--;
    }
}

alert(answerArray.join(" "));
alert("Nice your word is " + word);