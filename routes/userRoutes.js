const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser, loginUser, updateUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

router.get('/api/v1/users', authMiddleware, getAllUsers);
router.get('/api/v1/users/:id', authMiddleware, getUserById);
router.post('/api/v1/users', createUser);
router.post('/api/v1/login', loginUser);
router.put('/api/v1/users/:id', authMiddleware, updateUser);

module.exports = router;