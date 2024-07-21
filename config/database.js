const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:jUanFQIc3VJOs0z3@cluster0.civkdh0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
    console.log('Conectado a la base de datos');
});

module.exports = db;