import { Status } from '../app-constants';
import { ToDo } from '../model/todo';

const data: ToDo[] = [
  {
    title: 'Pending',
    category: 'Shopping',
    status: Status.pending,
    id: 1,
  },
  { title: '2 pending', category: 'Workout', status: Status.pending, id: 2 },
  {
    title: 'In progress',
    category: 'Shopping',
    status: Status.inprogress,
    id: 3,
  },
  {
    title: 'Completed',
    category: 'Shopping',
    status: Status.completed,
    id: 4,
  },
  {
    title: 'Abandon',
    category: 'Shopping',
    status: Status.abandon,
    id: 5,
  },
];

export default data;
