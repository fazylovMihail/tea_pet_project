import { get_cookie } from "./modules_js/cookie.js";
import { Card } from "./modules_js/Card_Class.js";

// Обработка куки и подставление в результата в wrapper
const cookie = JSON.parse(get_cookie('Card')), card = new Card(cookie), wrapper = document.querySelector('.wrapper');
wrapper.innerHTML += card.toFinishHtml();

// Обработка покупки
const buy_btn = wrapper.querySelector('.buy_btn');
buy_btn.addEventListener('click', ()=> alert(`Поздравляем! Вы купили ${cookie.name}`));