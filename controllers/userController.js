const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateUserData } = require('../validations/userValidation');
const SECRET_KEY = 'secret';

const getAllUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const totalUsers = await User.countDocuments();
        const totalPages = Math.ceil(totalUsers / limit);

        // Obtener los usuarios con paginación
        const users = await User.find().skip(skip).limit(limit);

        res.json({
            page,
            totalPages,
            totalUsers,
            users
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            res.status(404).send('El usuario no existe');
            return;
        }
        res.status.send(user)
    } catch (err) {
        res.status(500).send(err);
    }
};

const createUser = async (req, res) => {
    const user = new User(req.body);
    const usuario = await User.exists({ usuario: user.usuario });
    const email = await User.exists({ email: user.email });
    if (usuario || email) {
        res.status(400).send('El usuario ya existe');
        return;
    }
    const errors = validateUserData(user);
    if (errors) {
        res.status(400).json({ errors });
        return;
    }
    try {
        user.password = await bcrypt.hash(user.password, 10);
        const userCreated = await user.save();
        const token = jwt.sign({ id: userCreated._id }, SECRET_KEY, { expiresIn: '1h' });
        res.status(201).send({ user: userCreated, token });
    } catch (err) {
        res.status(500).send(err);
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'Usuario o contraseña incorrectos' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: 'Usuario o contraseña incorrectos' });
        }

        const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    const existingUser = await User.findById(id);
    if (!existingUser) {
        res.status(404).send('El usuario no existe');
        return;
    }
    const errors = validateUserData(user);
    if (errors) {
        res.status(400).json({ errors });
        return;
    }
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    loginUser,
    updateUser
};