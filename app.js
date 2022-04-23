const express = require('express');
const bodyParser = require("body-parser");
const axios = require('axios');
const request = require('request');
const router = express.Router();
const app = express();

// Configuracion
app.set('port', process.env.PORT || 9260);
app.use(bodyParser.json());
app.use(express.static(__dirname + 'public'));

// Acceso de control de acceso
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Routers
app.use(require("./router/index"));

// Exec server
app.listen(app.get('port'), ()=>{
    console.log("Desy: El servicio de pagos Uepapay en esta funcionando bajo el puerto: ", app.get('port'));
});
