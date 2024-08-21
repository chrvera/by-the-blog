const { User } = require('../models');

const userData = [
  {
    username: 'john_doe',
    password: 'password123',
  },
  {
    username: 'jane_smith',
    password: 'password123',
  },
  {
    username: 'dev_guru',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true, // to hash the password using the User model hook
});

module.exports = seedUsers;