import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (request, response) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  response.send({ createdProducts }); //then send back product to frontend
  //response.send( 'Hello' );
});

export default seedRouter;
