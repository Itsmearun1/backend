const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, postsController.getPosts);
router.post('/', authMiddleware, postsController.createPost);
router.put('/:id', authMiddleware, postsController.updatePost);
router.delete('/:id', authMiddleware, postsController.deletePost);

module.exports = router;
