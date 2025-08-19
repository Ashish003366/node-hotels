import express from 'express'
import db from './db.js'; 
import bodyParser from 'body-parser';
import person from './routes/personRoutes.js'
import menu from './routes/menuRoutes.js'

const app = express()
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('welcome to my page how can I help you')
})



app.use('/', person);
app.use('/menu', menu);
app.listen(3000)