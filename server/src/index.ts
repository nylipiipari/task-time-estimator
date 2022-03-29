import express, { Express } from 'express';
import 'dotenv/config';

const port = process.env.PORT || 3001;

const app: Express = express();

app.get('/', (req, res) => {
    res.send('Yoooooooo!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});