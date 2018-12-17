import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todoList: string[];
  addTodo: any;

  constructor() {
    this.todoList = ["Learn Angular", "Learn Rxjs", "Learn MongoDB"];
  }

  submitTodo() {
    this.todoList.unshift(this.addTodo);
  }

  ngOnInit() {}
}
