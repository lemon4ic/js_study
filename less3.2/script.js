let lang = prompt(String('Ваш язык "ru или en'));

if (lang == "ru") {
    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ];
      let d = new Date();
      let n = d.getDay();
      console.log(days[n]);
}
else if (lang == "en") {
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
      let d = new Date();
      let n = d.getDay();
      console.log(days[n]);
}
else {
    alert("Ошибка");
}

let langSwitch = prompt(String('Ваш язык "ru или en'));

switch (langSwitch){
    case "ru":
        let daysRu = [
                    'Воскресенье',
                    'Понедельник',
                    'Вторник',
                    'Среда',
                    'Четверг',
                    'Пятница',
                    'Суббота'
                  ];
                  let dRu = new Date();
                  let nRu = dRu.getDay();
                  console.log(daysRu[nRu]);
        break;
    case "en":
        let daysEn = [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                    ];
                    let dEn = new Date();
                    let nEn = dEn.getDay();
                    console.log(daysEn[nEn]);
        break;
    default:
        alert("Ошибка");

}

let langArray = [];

langArray['ru'] = ['Пн','Вт','СР','Чт','Пт','Сб','Вс'];

langArray['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

let langChoise = 'ru';

console.log(langArray[langChoise]);
