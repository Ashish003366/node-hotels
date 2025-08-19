import express from 'express'
import db from './db.js'; 
import bodyParser from 'body-parser';
import person from './routes/personRoutes.js'
import menu from './routes/menuRoutes.js'
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express()
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('welcome to my page how can I help you')
})



app.use('/', person);
app.use('/menu', menu);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
