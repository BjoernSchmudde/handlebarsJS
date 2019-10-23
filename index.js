const app = require('express')();
const path = require('path');
const mongoose = require('mongoose');
const Aqmpoint = require('./Aqmpoint');

mongoose.connect('mongodb://localhost:27017/testdb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs');

app.get('/', async (req, res) => {
    let aqmpoints = await Aqmpoint.find();
    res.render('index', { point: aqmpoints })
})

app.listen(4000);