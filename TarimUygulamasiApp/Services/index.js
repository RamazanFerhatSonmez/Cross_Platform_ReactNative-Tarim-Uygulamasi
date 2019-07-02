import express from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './routes';
import mongoose from 'mongoose';
import cors from 'cors';

mongoose.connect('mongodb://127.0.0.1/TarimUygDb', { useMongoClient: true });
mongoose.Promise = global.Promise;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

AuthRouter(app);

app.get('/', (req, res) => {
    res.send('Tarim App Services');
});


app.listen(3300, () => console.log("Çalıştı.."))