import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: ` <h2> Meu template</h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

todos:Todo[] =[];
title: String='minhas tarefas';

constructor() {
  this.todos.push(new Todo(1,'passear com o cachorro',false));
  this.todos.push(new Todo(2,'ir ao supermercado',false));
  this.todos.push(new Todo(3,'cortar o cabelo',true));  
}

}


  

