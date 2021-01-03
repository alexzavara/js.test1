//Создание функции, которая принимает массив и выбирает случайный элемент массива
var pickWords = function (wordsArray) {
    return wordsArray[Math.floor(Math.random() * wordsArray.length)];
};

//Создание итогового массива для разной длинны слов
var setupAnswerArray = function (wordToEndArray) {
    var j = [];
    for (var i = 0; i < wordToEndArray.length; i++) {
        j[i] = "_";
    }
    return j;
};

//С помощью 'alert' отображает текущее состояние игры
var showPlayerProgress = function (answerArray, number) {
    alert (answerArray.join(" ") + "   (Осталось " +  number + ")");
};

//Запрашиваем ответ игрока 
var getGuess = function() {
    var i = prompt("Впишите букву"); //Запрос буквы
    return i;
};

//Обновляет 'answerArray' и подсчитывает угаданные буквы
var updateGameState = function (guess, word, answerArray) {
    var numGues = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === guess.toLowerCase()) {
            if (answerArray[i] === "_") {
                answerArray[i] = guess.toLowerCase();
                numGues++;
            }
            else {
                numGues += 0;
            }
        }
    }
    return numGues;
};

//Объявление об успешном завершении игры
var showAnswerAndCongratulatePlayer = function (answerArray) {
    alert(answerArray.join(" "));
    alert("Отлично, загаданное слово " + " - " + answerArray.join(""));
};

//Объявление о проигрыше
var showBadEnding = function (word) {
    alert("Вам не удалось отгадать слово! ");
    alert("Было загаданно слово " + " - " + word);
};



//Массив слов на выбор
var someArray1 = ["привет", "программа", "путешествие", "гитара", "красивый", "умница", "солнце", "хлеб"];

//Случайное слово помещаем в переменную 'word'
var word = pickWords(someArray1); //В переменную возвращается само значение функции.

//Испльзем функцию 'setupAnswerArray' с словом из переменной 'word'
var answerArray = setupAnswerArray (word); //В переменную возвращается само значение функции.

//Записываем сколько осталось угадать и сколько шагов 
var remainingLetters = word.length;
var remainingSteps = 20; //Число попыток




//Условия работы игры
while (remainingLetters > 0 && remainingSteps > 0) {
    showPlayerProgress (answerArray, remainingSteps);//Показать результат 

    //Результат функции 'getGuess' возвращаем в переменную
    var guess = getGuess(); 

    //Действие при нажатии 'отмена'
    if (guess === null) {
        break;
    }

    //Проверка на то, чтоб длинна была в точности одна буква
    else if (guess.length !== 1) {    
        alert("Нужно вписать одну букву!");
        remainingSteps--;
    }

    else {
        var correctGuesses = updateGameState (guess, word, answerArray);
        remainingLetters -= correctGuesses;
        remainingSteps--;
    }
}

if (remainingSteps === 0  || guess === null) {
    showBadEnding(word);
}
else {
    showAnswerAndCongratulatePlayer(answerArray);
}