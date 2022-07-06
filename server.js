
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app = require('./app');

const URI = `mongodb+srv://<bhavesh1234>:<feelgood123>@cluster0.4iihk.mongodb.net/?retryWrites=true&w=majority` 
// @cluster0.fknkk.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(URI,{
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
