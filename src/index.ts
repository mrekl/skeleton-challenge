import Express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './misc/errorHandler';
import Auth from './auth';
import Companies from './companies';

dotenv.config();

const app = Express();

app.use(Express.json());

app.use(Auth());
app.use(Companies());

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
