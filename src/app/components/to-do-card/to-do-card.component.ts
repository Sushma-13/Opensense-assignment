import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status } from 'src/app/app-constants';
import { ToDo } from 'src/app/model/todo';

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.css'],
})
export class ToDoCardComponent implements OnInit {
  @Input()
  todo: ToDo;

  @Output() action = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  move(status: Status): void {
    this.action.emit(status);
  }
}
