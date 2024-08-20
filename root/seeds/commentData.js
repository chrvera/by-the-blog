const { Comment } = require('../models');

const commentData = [
  {
    content: 'Great explanation of closures!',
    user_id: 2,
    post_id: 1,
  },
  {
    content: 'Node.js makes backend development so much easier.',
    user_id: 3,
    post_id: 2,
  },
  {
    content: 'Async/Await really simplifies working with asynchronous code.',
    user_id: 1,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;