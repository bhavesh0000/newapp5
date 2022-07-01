
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
dotenv.config({ path: './.env' });
const app = require('./app');

const DB = `mongodb+srv://bhavesh3000:bhavesh3000@cluster0.4iihk.mongodb.net/bhaveshapp?retryWrites=true&w=majority` ||'mongodb://mongo:27017' 
// @cluster0.fknkk.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(DB,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() =>{
console.log(`connection successful`);

}).catch((err) => console.log(`no connection`)); 
  

const port = process.env.PORT || 4444 ;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
mongoose.Promise = global.Promise;
