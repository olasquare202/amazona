import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (request, response) => {
  await Product.remove({});
  //console.log(10)
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  //console.log(12);
  const createdUsers = await User.insertMany(data.users);
  // console.log(14);
  return response.send({ createdProducts, createdUsers }); //then send back product to frontend
  //console.log(16);
  //response.send( 'Hello' );
});

export default seedRouter;
