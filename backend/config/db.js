import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    //const conn = await mongoose.connect("mongolocaluri", {

    const conn = await mongoose.connect(process.env.MONGO_URI, 
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
    );
    console.log(`MongoDB Connected`);
    return conn.connection.db;
  } catch (error) {
    console.log(12);
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
