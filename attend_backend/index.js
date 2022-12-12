import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js';


const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('Hello to Attendance API!!')
})

// process.env.CONNECTION_URL 
const CONNECTION_URL="mongodb+srv://dayoasaolu:y2kHT0wTaOFshTSC@cluster0.8cktu.mongodb.net/?retryWrites=true&w=majority"
// const CONNECTION_URL="mongodb://admin:wddtWmxCwlR0WUlV@127.0.0.1:27017/"
// const CONNECTION_URL = "mongodb://admin:wddtWmxCwlR0WUlV@db:27017"




const PORT = process.env.PORT || 9000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect!!`));

mongoose.set('useFindAndModify', false);