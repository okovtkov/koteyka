'use strict';

let options = Array.from(document.querySelectorAll('.select__sorting'));

options.forEach(option => {
    option.addEventListener('click', () => {
        let sortingBy = option.dataset.sort;
        let column = option.dataset.column;
        let selector = `.room-option__${column}_js`;
        let cards = Array.from(document.querySelectorAll('.catalog-rooms__item'));
        let container = document.querySelector('.catalog-rooms');

       let sortedCards = sortCards(cards, selector, sortingBy);
       container.append(...sortedCards);
    });
})

function sortCards(cards, selector, type) {
    return cards.slice(0).sort((a, b) => {
        a = parseFloat(a.querySelector(selector).textContent.replace(',', '.'));
        b = parseFloat(b.querySelector(selector).textContent.replace(',', '.'));
        return (type === 'asc') ? a - b : b - a; 
    });
}