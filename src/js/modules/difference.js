export default class Difference{
    constructor(oldOfficer, newOfficer, items){
       try{
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
        this.oldCounter = 0;
        this.newCounter = 0;
       }catch(e){}
    }

    bidnTriggers(container, items, counter){
        container.querySelector('.plus').addEventListener('click', ()=>{
            if (counter !== items.length - 2) {
                items[counter].style.display = 'flex';
                    items[counter].classList.add('fadeIn');
                counter++;
            }else{
                items[counter].style.display = 'flex';
                    items[counter].classList.add('fadeIn');
                items[items.length- 1].remove();
            }
        });
    }

    hideItems(items) {
        items.forEach((item, i, arr) => {
            if(i!== arr.length-1){
                item.style.display='none';
            }
        });
    }

    init(){
        try{
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            this.bidnTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
            this.bidnTriggers(this.newOfficer, this.newItems, this.newCounter);
        }catch(e){}
    }
}