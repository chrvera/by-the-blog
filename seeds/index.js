const sequelize = require('../config/config');
const seedUsers = require('./userData');
const seedBlogs = require('./blogData');
const seedComments = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedBlogs();
  console.log('\n----- BLOGS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();