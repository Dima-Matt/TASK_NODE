import { Component } from "../core/component.js";

export class SignInComponent extends Component {
    constructor(formId) {
        super(formId)
    }

    init() {
        this.component.addEventListener('submit', onSubmitHandler);
    }
}

function required(str) {
    return str && str.trim();
}

function onSubmitHandler(event) {
    event.preventDefault();


   if (!required(this.name.value)) {
        console.log('errrrrrrrrr');
   }

   if (!required(this.password.value)) {
    console.log('error');
   }
    
}
