const express = require('express')
const hbs=require('hbs');
const app = express()
require('dotenv').config();

const port=process.env.PORT;

app.set('view engine', 'hbs');//para qeu se rendericen las vistas con el paquete hbs
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico middelware que se encuentra en la carrpeta publico y llamarlo en el get /
app.use(express.static('public'));


app.get('/', (req, res) => {
    //renderiza el hbs home que esta en el view
    res.render('home', {
        nombre: 'alex',
        titulo: 'curso de node'
    });
})

app.get('*', (req, res) => {
    res.send('404 | page not found')
})

app.listen(port,() => {
    console.log(`Aplicaicon corriendo en http://localhost:${port}`);
})