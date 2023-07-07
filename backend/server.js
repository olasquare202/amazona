import express from 'express';
import data from './data.js';

const app = express();
//test
app.get('/api/products', (request, response) => {
  response.send(data.products);
});
//Backend Api for returning product info based on slug of d product.
app.get('/api/products/slug/:slug', (request, response) => {
  const product = data.products.find((x) => x.slug === request.params.slug);
  if (product) {
    response.send(product);
  } else {
    response.status(404).send({ message: 'Product Not Found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
