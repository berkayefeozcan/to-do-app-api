
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
//notlar icin db semasi olusturduk.
var notesShema = new Schema({
    title: String,
    note : String,
    subject : String,

});
// database e kayit icin model olusturuldu
var noteModel = mongoose.model('Notes',notesShema);
module.exports = noteModel;