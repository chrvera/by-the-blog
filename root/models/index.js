const User = require('./user');
const Post = require('./blog');
const Comment = require('./comment');

// A user can have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// A post belongs to one user
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// A post can have many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

// A comment belongs to one post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

// A comment belongs to one user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// A user can have many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Post, Comment };