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
    this.todoList.push(this.addTodo);
  }

  deleteTodo(index) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (i === index) {
        if (confirm(`are you sure want to delete ${this.todoList[i]} `)) {
          this.todoList.splice(i, 1);
        }
      }
    }
  }

  ngOnInit() {}
}
