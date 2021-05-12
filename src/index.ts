import Express from 'express';

const PORT = process.env.PORT || 3000;
const app = Express();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
