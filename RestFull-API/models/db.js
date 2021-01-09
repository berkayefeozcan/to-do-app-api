var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var dataBaseUrl = 'mongodb://localhost/ToDoList';

mongoose.connect(dataBaseUrl,{useNewUrlParser: true , useUnifiedTopology: true ,useFindAndModify: false },(err)=>{
    if (err){
        console.log('database baglantisinda hata'+ err);
    }
    else {
        console.log('mongoose baglandi:'+dataBaseUrl);
    }
});