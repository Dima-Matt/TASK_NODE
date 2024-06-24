export class Component {
    constructor(id) {
        this.component = document.getElementById(id);
        this.init();
    }

    init() {}

    show() {
       this.component.classList.add('hide'); 
    }

    hide() {
        this.component.classList.remove('hide');
    }
}