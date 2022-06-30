
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
dotenv.config({ path: './.env' });
const app = require('./app');

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DATABASE_PASSWORD}@cluster0.fknkk.mongodb.net/?retryWrites=true&w=majority` ||'mongodb://mongo:27017' 
// @cluster0.fknkk.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 4444 ;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
mongoose.Promise = global.Promise;
