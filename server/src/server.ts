import express, { Express } from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import routes from './routes';

const PORT = process.env.PORT || 3001;

const app: Express = express();

app.use(bodyParser.json());

app.use('/items', routes.item);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});