import bcrypt from 'bcrypt';

const users = [
  {
    name: 'radhe',
    email: 'workforvibhas@gmail.com',
    password: bcrypt.hashSync('1234Radhe', 10),
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('john123', 10),
    isAdmin: false
  },
  {
    name: 'Alice Smith',
    email: 'alice@email.com',
    password: bcrypt.hashSync('alice123', 10),
    isAdmin: false
  },
  {
    name: 'Eva Brown',
    email: 'eva@email.com',
    password: bcrypt.hashSync('eva123', 10),
    isAdmin: false
  },
  {
    name: 'David Miller',
    email: 'david@email.com',
    password: bcrypt.hashSync('david123', 10),
    isAdmin: false
  }
];

export default users;
