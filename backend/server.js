import express from 'express';
import data from './data.js';

const app = express();
//test
app.get('/api/products', (request, response) => {
  response.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
