$(document).ready(function () {
    var currentFloor = 2;  //Переменная с текущим этажом//
    var floorPath = $('.main__image path');  //Каждый отдельный этаж в SVG//
    var counterUp = $('.arrow-1');  //кнопка увеличения этажа//
    var counterDown = $('.arrow-2');  //кнопка уменьшения этажа//


    //Функция при наведении мышкой на этаж//
    floorPath.on('mouseover', function() {
        floorPath.removeClass('current-floor'); //Удаляем активный класс, чтобы был выделен всегда тока 1 этаж//
        currentFloor = $(this).attr('data-floor'); //Получаем этаж на который навели мышкой//
        $('.counter__namber').text(currentFloor);  //Записываем значение в счетчик//
    });

    counterUp.on('click', function(){  //Отслеживаем клик по кнопке вверх//
        if (currentFloor < 18){ //Делаем так что бы счетчик не кликался больше 18-и //
        currentFloor++; //Прибавляем один этаж//
        usCurrentFloor = currentFloor.toLocaleString('en-US' , {minimumIntegerDigits: 2, useGrouping: false});  //Форматируем переменную с этажом чтобы был 0 в начале//
        $('.counter__namber').text(usCurrentFloor);  //Записываем значение в счетчик//
        floorPath.removeClass('current-floor');  //Удаляем активный класс, чтобы был выделен всегда тока 1 этаж//
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');  //Подсвечиваем этаж на который наводим стрелками //
        }
    });

    counterDown.on('click' , function(){ //Отслеживаем клик по стрелке вниз//
        if(currentFloor > 2){  //Проверяем число чтобы оно кликалось меньше 2-х//
            currentFloor--;  //Минусуем этаж//
            usCurrentFloor = currentFloor.toLocaleString('en-US' , {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter__namber').text(usCurrentFloor);  //Форматируем число//
            floorPath.removeClass('current-floor');  //Чистим класс для корректного отображения//
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');  //Подсвечиваем этаж на который наводим стрелками//
        }
    })
});