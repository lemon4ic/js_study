'use strict';


let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n) ;
  };


function guessNumber () {
    let hiddenNumber = 10;
    
    function guessNumberBody () {
        
        let userNum = prompt('Угадай число от 1 до 100');


        if (!isNumber(userNum) && userNum){
            alert('Введи число!');
            return guessNumber();
        }
        
        else if (!userNum) {
            return alert('Игра окончена');
        }

        else if (userNum < hiddenNumber) {
            alert('Загаданное число больше');
            return guessNumber();
        }

        else if (userNum > hiddenNumber) {
            alert('Загаданное число меньше');
            return guessNumber();
        }

        else if (hiddenNumber == userNum) {
            return alert('Поздравляю, Вы угадали!!!');
        }
    }

    guessNumberBody();

};

guessNumber();
