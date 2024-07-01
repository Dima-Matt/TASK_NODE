import { Component } from "../core/component.js";
import { SignInComponent } from "./sign-in.components.js";

export class PageAuthorization extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.signIn = new SignInComponent('sign-in');
        this.signUp = new Component('sign-up');
        this.links = this.component.querySelectorAll('.form__link');
        this.links.forEach(link => {
            link.addEventListener('click', onChangeFormHandler.bind(this));
        })
    }
}


function onChangeFormHandler(e) {
    e.preventDefault();
    if (e.target.classList.contains('link-in')) {
        this.signUp.hide();
        this.signIn.show();
    } else if (e.target.classList.contains('link-up')) {
        this.signIn.hide();
        this.signUp.show();
    }
}