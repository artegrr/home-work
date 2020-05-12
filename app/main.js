let name = prompt("Твое имя, падаван?", "");
alert(`Приветствую ${name}!`);

age = prompt("Давай узнаем твой возраст по году рождения?");
const today = new Date(2020);
alert(`Тебе ${today - age}!`);

let length = prompt(
  "Введите длину стороны вашего квадрата, а я посчитаю его периметр."
);
length = 4 * length;
alert(length);

radius = prompt ("А теперь посчитаем площадь круга.")
alert (2* Math.PI * radius);

let dollarRate = prompt("Может сконвертируем валюту?");
const euroRate = 0.92;
let count = dollarRate * euroRate;
alert(`Получаем ${count} €`);
