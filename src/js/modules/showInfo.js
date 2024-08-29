export default class showInfo {
    constructor(triggers){
        this.btns= document.querySelectorAll(triggers);
    }

    init(){
        this.btns.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                // btn.closest('.module__info-show').nextElementSibling.style.display = 'block';
                // btn.closest('.module__info-show').nextElementSibling.classList.add('fadeIn');
                const sibling =btn.closest('.module__info-show').nextElementSibling;

                sibling.classList.toggle('msg');
                sibling.style.marginTop = '20px';
                sibling.classList.add('fadeIn');
            })
        })
    }
}