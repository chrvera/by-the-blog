const router = require('express').Router();
const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes');

router.use('/posts', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/auth', userRoutes);

module.exports = router;