
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app = require('./app');


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bhavesh1234:feelgood123@cluster0.4iihk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 
// @cluster0.fknkk.mongodb.net/?retryWrites=true&w=majority

  

const port = process.env.PORT || 4444 ;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
mongoose.Promise = global.Promise;
