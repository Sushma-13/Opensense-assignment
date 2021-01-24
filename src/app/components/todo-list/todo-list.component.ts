import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/app-constants';
import data from 'src/app/mock-data/data';
import { ToDo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  data: ToDo[] = data;

  pending: ToDo[];
  inProgress: ToDo[];
  abandon: ToDo[];
  completed: ToDo[];

  @Input()
  set add(form: ToDo) {
    if (!form) {
      return;
    }
    const newTodo = new ToDo(
      form.title,
      Status.pending,
      form.category,
      new Date().getTime()
    );
    this.data.push(newTodo);
    this.pending.push(newTodo);
  }

  @Input()
  set search(query: string) {
    if (!query || query.length === 0) {
      this.ngOnInit();
    }
    this.pending = this.pending?.filter((t) => t.title.toLowerCase().includes(query.toLowerCase()));
    this.inProgress = this.inProgress?.filter((t) => t.title.toLowerCase().includes(query.toLowerCase()));
    this.completed = this.completed?.filter((t) => t.title.toLowerCase().includes(query.toLowerCase()));
    this.abandon = this.abandon?.filter((t) => t.title.toLowerCase().includes(query.toLowerCase()));
  }

  ngOnInit(): void {
    this.pending = data.filter((todo) => todo.status === Status.pending);
    this.inProgress = data.filter((todo) => todo.status === Status.inprogress);
    this.abandon = data.filter((todo) => todo.status === Status.abandon);
    this.completed = data.filter((todo) => todo.status === Status.completed);
  }

  move(todo: ToDo, action: Status): void {
    if (todo.status === Status.pending) {
      this.pending = this.pending.filter((t) => t.id !== todo.id);
    } else if (todo.status === Status.inprogress) {
      this.inProgress = this.inProgress.filter((t) => t.id !== todo.id);
    } else if (todo.status === Status.completed) {
      this.completed = this.completed.filter((t) => t.id !== todo.id);
    } else if (todo.status === Status.abandon) {
      this.abandon = this.abandon.filter((t) => t.id !== todo.id);
    }
    todo.status = action;
    if (action === Status.pending) {
      this.pending.push(todo);
    } else if (action === Status.inprogress) {
      this.inProgress.push(todo);
    } else if (action === Status.completed) {
      this.completed.push(todo);
    } else if (action === Status.abandon) {
      this.abandon.push(todo);
    }
  }
}
