import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/app-constants';
import data from 'src/app/mock-data/data';
import { ToDo } from 'src/app/model/todo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title = 'OpenSense To-Do Board';

  newToDo: ToDo;
  constructor() {}

  ngOnInit(): void {}

  add(form: ToDo): void {
    this.newToDo = form;
  }
}
