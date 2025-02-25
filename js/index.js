import { set_cookie, back_manager } from "./modules_js/cookie.js";
import { Card } from "./modules_js/Card_Class.js";

fetch(`${window.location.origin}/data.json`)
.then(respone => respone.json())
.then(data => reader(data))
.catch(err => console.log(err));

function reader(data){
    const cards = [], wrapper = document.querySelector('.btn_content_wrapper');

    for(let key of Object.values(data)){
        const card = new Card(key); wrapper.innerHTML += card.toHtml();
        cards.push(Object(card));
    }

    const card_btn = document.querySelectorAll('.card_btn');
    for(let i = 0;i<card_btn.length;i++){
        card_btn[i].addEventListener('click', ()=>{
            set_cookie('Card', JSON.stringify(cards[i]));
            back_manager('finish.html');
        })
    }
}