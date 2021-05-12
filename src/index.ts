import Express from 'express';
import Companies from './companies';

const app = Express();

app.use(Express.json());

app.use(Companies());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
