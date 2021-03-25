const mongoose = require('mongoose');

mongoose.connect('mongodb://Roque:Esperma93@chatdb-shard-00-00.unpat.mongodb.net:27017,chatdb-shard-00-01.unpat.mongodb.net:27017,chatdb-shard-00-02.unpat.mongodb.net:27017/ChatDB?ssl=true&replicaSet=atlas-aj4fce-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));