export default class Slider {
    constructor({container = null,
        btns = null,
        next = null, 
        prev = null,
        activeClass = '',
        animate,
        autoplay } = {}){
        this.container = document.querySelector(container);
        try{this.slides = this.container.children;}catch(e){}
        // this.slides = [...this.container.children];
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.prevmodule = document.querySelectorAll('.prevmodule');
        this.nextmodule = document.querySelectorAll('.nextmodule');
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
}