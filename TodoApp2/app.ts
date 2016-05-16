class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
    selector: "my-app",

})

@View({
    templateUrl: 'mainForm.html',
    directives: [NgFor]
})

class TodoAppComponent {

    todos: Array<Object>;

    constructor() {
        this.todos = [{ text: "Try Second", done: true }]
    }

    get() {
        return this.todos;
    }

    add($event, newtodo) {

        if ($event.which === 13) {
            this.todos.unshift({ text: newtodo.value, done: false });
            newtodo.value = ''
        }
        if ($event.which === 46) {
            this.todos.pop();
           
        }

    }

    markAsDone(todo) {
        todo.done = !todo.done;
    }
}

bootstrap(TodoAppComponent);