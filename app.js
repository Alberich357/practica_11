var express = require('express');  //importamos la dependencia
var app = express(); //declaramos una App de Express
var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor

app.use('/assets', express.static(__dirname +  '/public'));

app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});

//primera ruta (esta al nivel de la raiz /), Hello world!
app.get('/', function (req, res) {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>');
});


//terecera ruta, recibe un parametro
app.get('/person/:id', function (req, res) {
   res.send('<html><head></head><body><h1>Person:' + req.params.id + '</h1></body></html>');
});

//segunda ruta /api, regresa un objeto json
app.get('/api', function (req, res) {
    res.json({ firstname: 'John', lastname:'Doe' });
});

app.listen(port); //levantar el server y ponerle a la escucha