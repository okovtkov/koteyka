'use strict';

class Filter {
    constructor() {
        let cards = Array.from(document.querySelectorAll('.catalog-rooms__item'));
        let container = document.querySelector('.catalog-rooms');
        let filter = document.querySelector('.filter');

        filter.addEventListener('submit', (event) => {
            event.preventDefault();

            let filteredCards = this.filterByPrice(cards);
            filteredCards = this.filterByArea(filteredCards);
            filteredCards = this.filterByItem(filteredCards);

            cards.forEach(card => card.remove());
            container.prepend(...filteredCards);
        });
    }

    filterByPrice(cards) {
        let from = parseInt(document.querySelector('.filter__price_min').value);
        let to = parseInt(document.querySelector('.filter__price_max').value);
        if (isNaN(from)) from = 0;
        if (isNaN(to)) to = 9999;

        return cards.filter(card => {
            let price = parseInt(card.querySelector('.room-option__price_js').textContent);
            return (price >= from && price <= to);
        });
    }

    filterByArea(cards) {
        let checkboxes = Array.from(document.querySelectorAll('.checkbox__main_area input:checked'));
        if (checkboxes.length === 0) return cards;

        return cards.filter(card => {
            for (let checkbox of checkboxes) {
                let areaValue = parseFloat(checkbox.value);
                let cardValue = parseFloat(card.querySelector('.room-option__area_js').textContent.replace(',', '.'));
                if (areaValue === cardValue) return true;
            }
        });
    }

    filterByItem(cards) {
        let checkboxes = Array.from(document.querySelectorAll('.checkbox__main_item input:checked'));
        if (checkboxes.length === 0) return cards;
    
        return cards.filter(card => {
            for (let checkbox of checkboxes) {
                let itemValue = checkbox.value;
                let image = card.querySelector(`.room-option__img[alt="${itemValue}"]`);
                console.log(itemValue, image);
                if (image) return true;
            }
        });
    }
}

new Filter();