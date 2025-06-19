'use strict'
debugger
const minYear = 1900;
const maxYear = 2024;
let message = '';

alert(`Введіть будь ласка ваші данні:`);

const userYear = prompt('Введи свiй рік народження:');

if (userYear === null || userYear.trim() === '') {
    message += 'Шкода, що ви не захотли вказати свiй рік народження.'
} else if (!Number.isInteger(Number(userYear))) {
    message += 'Помилка, Ваш вік має бути повним числом.';
} else if (+userYear < minYear || +userYear > maxYear) {
    message += 'Помилка, Ваш вік має бути таким.';
} else {
    const age = new Date().getFullYear() - userYear;
    message += 'Ваш вік: ' + age;
}

message += '\n';

const userCity = prompt('Ваше місце проживання:');
let cityMessage = '';

if (userCity === null || userCity.trim() === ''){
    message += 'Шкода, що ви не захотли вказати свої дані.';
} else if (!isNaN(userCity)){
    message +="Введіть ваше місце проживання не в числовому значенні";
} else {
    switch (userCity.trim()) {
        case `Київ`:
            usecityMessagerCity = `Ти живеш у столиці України, столицею якої є місто Київ.`;
        break;
        case `Вашингтон`:
            cityMessage = `Ти живеш у столиці США, столицею якої є місто Вашингтон.`;
        break;
        case `Лондон`:
            cityMessage = `Ти живеш у столиці Англії, столицею якої є місто Лондон.`;
        break;
        default:
            cityMessage = `Я не знаю такого місця. Але я думаю що ${userCity}, це круте місце.`
    }
}
message += cityMessage + '\n';

const userFavorSport = prompt('Ваш улюблений вид спорту:');
if (userFavorSport === null || userFavorSport.trim() === ''){
    message += 'Шкода, що Ви не захотіли вказати улюблений вид спорту.';
} else if (!isNaN(userFavorSport)){
    message +="Введіть ваш улюблений вид спорту не в числовому значенні.";
} else {
    switch (userFavorSport.trim()) {
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
}

alert(message);