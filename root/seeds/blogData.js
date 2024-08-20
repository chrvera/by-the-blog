const { Post } = require('../models');

const blogData = [
  {
    title: 'Understanding JavaScript Closures',
    content: 'Closures are a fundamental concept in JavaScript...',
    user_id: 1,
  },
  {
    title: 'Introduction to Node.js',
    content: 'Node.js is a powerful runtime environment for executing JavaScript...',
    user_id: 2,
  },
  {
    title: 'Mastering Async/Await in JavaScript',
    content: 'Async/Await is a syntactic sugar for working with Promises...',
    user_id: 3,
  },
];

const seedBlogs = () => Post.bulkCreate(blogData);

module.exports = seedBlogs;