//Выбрать нужный размер рандома
let getRandomNum = function(size) {
    return Math.floor(Math.random() * size)
}

let getDistanсe = function (event, target) {
    let diffX = event.offsetX - target.x
    let diffY = event.offsetY - target.y
    return Math.sqrt((diffX*diffX) + (diffY*diffY))
}

let getDistanсeHint = function (distance) {
    if (distance < 20) {
        return "Обожжешься"
    }
    else if(distance < 40) {
        return "Очень горячо"
    }
    else if(distance < 80) {
        return "Горячо"
    }
    else if(distance < 160) {
        return "Тепло - 160"
    }
    else if(distance < 320) {
        return "Холодно"
    }
    else if(distance < 480) {
        return "Очень холодно "
    }
    else if(distance < 640) {
        return "Совсем холодно - 640"
    }
    else {
        return "Замерзнешь"
    }
    
}

//Переменные
let clicks = 0
let width = 800
let height = 800
//Задаем переменную клада
let target = {
    x: getRandomNum(width),
    y: getRandomNum(height)
}
//Обработчик клика на карту
$("#map").click(function (event) {
    clicks++
    $("#clicks").text("ходов " + clicks)

let distance = getDistanсe(event, target)
let distanceHint = getDistanсeHint(distance)
$("#distance").text(distanceHint)
if (distance < 30) {
    alert("Клад найден! Сделано кликов: " + clicks);
    }
else if (clicks > 29) {  
    return alert("Game over")
}
})

