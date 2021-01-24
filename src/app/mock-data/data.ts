import { Status } from '../app-constants';
import { ToDo } from '../model/todo';

const data: ToDo[] = [
  {
    title: 'Buy Grocery',
    category: 'Shopping',
    status: Status.pending,
    id: 1,
  },
  { title: '2 pending', category: 'Workout', status: Status.pending, id: 2 },
  {
    title: 'Electricity bill',
    category: 'Bills',
    status: Status.inprogress,
    id: 3,
  },
  {
    title: 'Gas bill',
    category: 'Bills',
    status: Status.completed,
    id: 4,
  },
  {
    title: 'Swimming',
    category: 'Workout',
    status: Status.abandon,
    id: 5,
  },
];

export default data;
