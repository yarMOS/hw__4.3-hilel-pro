'use strict'

alert(`Введіть будь ласка ваші данні:`);

let userAge = prompt('Ваш вік:');
if (userAge === null || userAge === ''){
    alert('Шкода, що Ви не захотіли вказати свій вік.');
    userAge = 'Користувач не вказав кількість.'
} else if (isNaN(userAge)){
    alert("Ви ввели некоректне значення! Введіть ваш вік в числовому значенні.");
    userAge = +prompt('Ваш вік:');
    if (isNaN(userAge) || userAge === null || userAge === ''){
        alert('Шкода, що Ви не захотіли вказати свій вік.');
        userAge = 'Користувач не вказав кількість.';
    }
}

let userCity = prompt('Ваше місце проживання:');
if (userCity === null || userCity === ''){
    alert('Шкода, що Ви не захотіли вказати своє місце проживання.');
    userCity = 'Користувач не вказав своє місце проживання.'
} else if (!isNaN(userCity)){
    alert("Введіть ваше місце проживання не в числовому значенні");
    userCity = 'Користувач вказав числове значення';
    if (!isNaN(userCity) || userCity === null || userCity === ''){
        alert('Шкода, що не захотіли ввести своє місце проживання');
        userCity = 'Користувач не захотів вводити свої дані';
    }
}

switch (userCity) {
    case `Київ`:
            userCity = `Ти живеш у столиці України, столицею якої є місто Київ.`;
    break;
    case `Вашингтон`:
        userCity = `Ти живеш у столиці США, столицею якої є місто Вашингтон.`;
    break;
    case `Лондон`:
        userCity = `Ти живеш у столиці Англії, столицею якої є місто Лондон.`;
    break;
    default:
        userCity = `Я не знаю такого місця. Але я думаю що ${userCity}, це круте місце.`
}

let userFavorSport = prompt('Ваш улюблений вид спорту:');
if (userFavorSport === null || userFavorSport === ''){
    alert('Шкода, що Ви не захотіли вказати улюблений вид спорту.');
    userName = 'Користувач не вказав улюблений вид спорту.'
} else if (!isNaN(userFavorSport)){
    alert("Введіть ваш улюблений вид спорту не в числовому значенні");
    userFavorSport = 'Користувач вказав числове значення';
    if (!isNaN(userFavorSport) || userFavorSport === null || userFavorSport === ''){
        alert('Шкода, що не захотіли вказати улюблений вид спорту.');
        userFavorSport = 'Користувач не захотів вводити свої дані';
    }
}

switch (userFavorSport) {
    case `Волейбол`:
        alert(`Круто! Хочеш стати як Карч Кирай?`);
    break;
    case `Футбол`:
        alert(`Круто! Хочеш стати як Криштиану Роналду?`);
    break;
    case `Баскетбол`:
        alert( `Круто! Хочеш стати як Майкл Джордан?`);
    break;
    default:
        alert(`Дуже круто що тобі подобається ${userFavorSport}, успіхів.`);
}

alert(`Вік користувача: ${userAge} років. Місце проживання користувача: ${userCity}. Улюблений вид спорту: ${userFavorSport}.`);