const express = require('express');
const authRoute = require('./routes/auth.route.js');

const APP = express();

// Libera o acesso (CORS) para o navegador conseguir se comunicar com a API
APP.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

APP.use(express.json());
APP.use(express.static('front_whatsapp'));
APP.use(authRoute);

const PORT = 3000;
const SERVER = "localhost";
const MSG = `Servidor Online em http://${SERVER}:${PORT}`;

APP.listen(PORT, () => console.log(MSG));