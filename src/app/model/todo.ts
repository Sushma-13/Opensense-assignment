import { Status } from '../app-constants';

export class ToDo {
  constructor(
    public title: string,
    public status: Status,
    public category?: string,
    public id?: number
  ) {}
}
