import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();
//Backend API for signin
userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    //get d user by email
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      //compare d plain password(body.password) & encrypted password(user.password) in db
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalide email or password' });
  })
);

export default userRouter;
