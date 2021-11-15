import { User } from './models/User';

const user = new User({ name: 'Lorem ipsum', age: 24 });

user.on('change', () => {
  console.log('User changed action');
});

user.trigger('change');
