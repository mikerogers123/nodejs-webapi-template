
import express from 'express';
import bodyParser from 'body-parser';
import { configureRoutes } from './src/api/routes/configureRoutes';

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

configureRoutes(app);

app.listen(port);
