let express = require('express');
let app = express();
let bodyParser = require('body-parser')

let cors = require('cors');
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': 'http://localhost:4200',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    'optionsSuccessStatus': 200
}));
//middleware
app.use(express.json());
app.use(express.urlencoded({ exteded: true }));     //true para que reciba archivos, fotos

let router = express.Router();
app.use(router);

// RUTAS
let tareaRoute = require('./routes/tarea')
app.use('/api', tareaRoute)
// aqui ruta usuarios

let tableroRoute = require('./routes/tablero')
app.use('/api', tableroRoute)

let bitacoraRoute = require('./routes/bitacora')
app.use('/api', bitacoraRoute)

// aqui ruta clasificacion

let tableroColRoute = require('./routes/tableroCol')
app.use('/api', tableroColRoute)
// RUTAS

app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});

