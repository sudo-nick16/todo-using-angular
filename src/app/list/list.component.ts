import { Component, OnInit } from '@angular/core';
import List from "./list.model"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  inputValue = "";
  todoList : List[] = [];
  
  addTodo(){
    console.log(this.inputValue);
    if(this.inputValue){
      this.todoList.unshift({name : this.inputValue, status : false})
      console.log(this.todoList)
      localStorage.setItem("todo", JSON.stringify(this.todoList));
      this.inputValue = "";
    }
  }

  save = () : void => {
    console.log("setting list")
    localStorage.setItem("todo", JSON.stringify(this.todoList));
  }
  
  delete = (name: string) : void => {
    console.log("deleting", name, this.todoList.filter(todo => todo.name !== name));
    this.todoList = this.todoList.filter(item => item.name !== name );
    localStorage.setItem("todo", JSON.stringify(this.todoList));
  }

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem("todo"));
    this.todoList = JSON.parse(localStorage.getItem("todo") || "[]");
  }
}
