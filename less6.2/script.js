'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n) ;
  };

function guessNumber (a) {
   
    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      
    let hiddenNumber = getRandomInRange(1, 100);

    let attempts = 10;
    
    let playMore;

    function guessNumberBody () {
        
        if (attempts <= 0) {
           playMore = confirm('Попытки закончились, хотите сыграть еще?');

            if (playMore) {
                return guessNumber();
            } 
            else {
                return alert('Игра окончена');
            }
        }
        
        let userNum = prompt('Угадай число от 1 до 100');

        if (!isNumber(userNum) && userNum){

            if (playMore) {
                playMore =confirm('Введи число!');
                return guessNumberBody();
            } 
            else {
                return alert('Игра окончена');
            }
        }
        
        else if (!userNum) {
            return alert('Игра окончена');
        }

        else if (userNum < hiddenNumber) {
            playMore = confirm('Загаданное число больше, осталось попыток ' + attempts);
            
            if (playMore) {
                attempts--;
                return guessNumberBody();
            } 
            else {
                return alert('Игра окончена');
            }
        }

        else if (userNum > hiddenNumber) {

            if (playMore) {
            playMore = confirm('Загаданное число меньше, осталось попыток ' + attempts);
            attempts --;
            return guessNumberBody();
            } 
            else {
                return alert('Игра окончена');
            }            
        }

        else if (hiddenNumber == userNum) {
            playMore = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');

            if (playMore) {
                return document.location.reload();
            }
            else {
                return alert('Игра окончена');
            }
        }
    }
    guessNumberBody();
};
guessNumber();
