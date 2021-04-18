class Slider {
    constructor(slider) {
        this.slider = slider;
        this.container = slider.querySelector('.slider__list');
        this.count = this.container.children.length;
        this.offset = Number(this.container.dataset.offset);
        this.togglers = Array.from(this.slider.querySelectorAll('.slider__toggler'));
        this.container.style.left = 0;
        this.current = 0;
        let prev = this.slider.querySelector('.slider__button_prev');
        let next = this.slider.querySelector('.slider__button_next');

        prev.onclick = () => this.prev();
        next.onclick = () => this.next();
        this.togglers.forEach((toggler, index) => toggler.onclick = () => this.slide(index));
    }

    slide(to) {
        console.log(to);
        if (to >= this.count) to = 0;
        if (to < 0) to = this.count - 1;
        this.container.style.left = to * -1 * this.offset + '%';
        this.selectToggler(to);
        this.current = to;
    }

    next() {
        this.slide(this.current + 1);
    }

    prev() {
        this.slide(this.current - 1);
    }

    selectToggler(num) {
        this.slider.querySelector('.slider__toggler_check').classList.remove('slider__toggler_check');
        this.togglers[num].classList.add('slider__toggler_check');
    }
}

let sliders = Array.from(document.querySelectorAll('.slider'));

for (let slider of sliders) {
    new Slider(slider);
}