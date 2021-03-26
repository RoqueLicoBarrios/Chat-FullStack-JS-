const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Roque:Esperma93@chatdb.unpat.mongodb.net/ChatDB?retryWrites=true&w=majority',  {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));