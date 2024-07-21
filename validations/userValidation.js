const validateUserData = (data) => {
    const errors = [];
    if (!data.nombre || typeof data.nombre !== 'string' || !validateNombre(data.nombre)) {
        errors.push('El nombre es requerido y debe ser una cadena de texto.');
    }
    if (!data.apellido || typeof data.apellido !== 'string' || !validateApellido(data.apellido)) {
        errors.push('El apellido es requerido y debe ser una cadena de texto.');
    }
    if (!data.usuario || typeof data.usuario !== 'string' || !validateUsuario(data.usuario)) {
        errors.push('El usuario es requerido y debe ser una cadena de texto.');
    }
    if (!data.email || typeof data.email !== 'string' || !validateEmail(data.email)) {
        errors.push('El email es requerido, debe ser una cadena de texto y debe tener un formato válido.');
    }
    if (!data.password || typeof data.password !== 'string' || !validatePassword(data.password)) {
        errors.push('La contraseña es requerida, debe ser una cadena de texto y debe cumplir con los requisitos de seguridad.');
    }
    return errors.length > 0 ? errors : null;
}

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
    return passwordRegex.test(password);
}

const validateNombre = (nombre) => {
    const nombreRegex = /^[a-zA-Z]+$/;
    return nombreRegex.test(nombre);
}

const validateApellido = (apellido) => {
    const apellidoRegex = /^[a-zA-Z]+$/;
    return apellidoRegex.test(apellido);
}
const validateUsuario = (usuario) => {
    const usuarioRegex = /^[a-zA-Z0-9_]+$/;
    return usuarioRegex.test(usuario);
}
module.exports = {
    validateUserData,
    validateEmail,
    validatePassword,
    validateNombre,
    validateApellido
};