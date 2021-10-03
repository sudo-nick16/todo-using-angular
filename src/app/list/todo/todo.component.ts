import { Component, OnInit, Input } from '@angular/core';
import Todo from "../list.model"

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() delete!: (name : string) => void;
  @Input() save!: () => void;
  edit = false
  editToggle(){
    this.edit = !this.edit
    this.save()
  }


  toggleStatus(){
    this.todo.status = !this.todo.status;
    this.save();
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
