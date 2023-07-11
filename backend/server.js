import express from 'express';
const app = express();
import data from './data.js';
import mongoose from 'mongoose';
//import dotenv from 'dotenv';
import connectDB from './config/db.js';

import { config } from 'dotenv';
//dotenv.config(); //fetch variables frm dotenv file
config();
// mongoose //Here is d MongoDb connection
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log('connected to db');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//Connect to MongoDB
connectDB()
  .then((db) => {
    // Use connected database instance with Express
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server started on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => console.log(err));

//test
// app.get('/api/products', (request, response) => {
//   response.send(data.products);
// });
//Backend Api for returning product info based on slug of d product.
app.get('/api/products/slug/:slug', (request, response) => {
  const product = data.products.find((x) => x.slug === request.params.slug);
  if (product) {
    response.send(product);
  } else {
    response.status(404).send({ message: 'Product Not Found' });
  }
});
app.get('/api/products/:id', (request, response) => {
  const product = data.products.find((x) => x._id === request.params.id);
  if (product) {
    response.send(product);
  } else {
    response.status(404).send({ message: 'Product Not Found' });
  }
});

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`server at http://localhost:${port}`);
// });
