class Card{
    constructor(obj){
        Object.assign(this, obj);
    }
    toHtml(){
        return `<div class="card">
                    <img src="${this.img}" alt="">
                    <p class="text_name">${this.name}</p>
                    <button class="card_btn">Подробнее здесь</button>
                </div>`;
    }
    toFinishHtml(){
        return `<div class="content_wrapper">
                    <img src="${this.img}" alt="">
                    <div class="text_wrapper">
                        <div class="text_content_wrapper">
                            <div class="back_btn" onclick="window.history.back()">
                                <img src="img/icons/crosslinear_106242.svg" alt="">
                            </div>
                            <h1>${this.name}</h1>
                            <p class="text_info">${this.info}</p>
                            <div class="buy_wrapper">
                                <p>${this.name} можно купить у нас за</p>
                                <div class="buy_btn_wrapper">
                                    <p class="price_text">${this.price}</p>
                                    <button class="buy_btn">Купить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
}

export {Card}