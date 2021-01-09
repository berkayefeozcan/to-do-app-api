const express = require('express');
const crud = require('./controller/CRUD-Controller');
const bodyParser = require("body-parser");
const cors = require("cors");
//const db = require('./models/db');
var app = express();
app.use(cors());
// post methodunun body kismindan gelen veriler parse edilir
app.use(bodyParser.urlencoded({ extended: false })); // form uzerinden gelen veriler icin
app.use(bodyParser.json()); // json uzunatili dosyalar icin parse islemi
app.get('/read',crud.read);
app.post('/delete',crud.delete);
app.post('/update',crud.update);
app.post('/insert',crud.insert);


app.listen(8080);