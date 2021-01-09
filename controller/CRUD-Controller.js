var db = require('../models/db');
var noteModel = require('../models/notes');


var insert =(req,res) => {
    var titles = req.body.title;
    var subjects = req.body.subject;
    var notes = req.body.note;
    
    var newNote = new noteModel({
        title : titles,
        subject : subjects,
        note: notes
    });

    newNote.save((error)=>{
        if(error){
            console.log(error);
            
        }
        else{
            //console.log('not basariyla eklendi');
            res.write('The note has been successfully saved .');
            res.end();
        }
    });
    
}
var del =(req,res) => {
    noteModel.deleteOne({_id:req.body._id}, 
        (err, data) => {
            if(err){
                console.log(err);
                res.write('Delete process failed.');
            }
            else{
                res.write('Delete process has been successed. ');
            }
        });  
  
}
var update =(req,res) => {
    //mongodb de guncelleme islemi
    noteModel.findByIdAndUpdate(req.body._id,{
        subject: req.body._subject,
        title:req.body._title,
        note : req.body._note},
        (err,data)=>{
            if(err){
                console.log('Update Error!');
                res.write('Update process failed.');
                
            }
            else{
                res.write('Uptade process has been successed.');
            }
        });
       
        res.end('');
}
var read =(req,res) => {
   noteModel.find((err,data)=>{
       if(err){
           console.log('okuma isleminde bir hata olustu');
           res.write('Read process failed.');
       }
       else{
           res.send(data);
       }
   });
}
module.exports.insert = insert;
module.exports.delete = del;
module.exports.update = update;
module.exports.read = read;