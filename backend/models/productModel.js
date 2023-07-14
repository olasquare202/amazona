import mongoose from 'mongoose';


const productSchema = new mongoose.Schema(//mongoose.Schema accept 2 parameters
    {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
},
{
    timestamps: true
}
);
//create model based on d schema
const Product = mongoose.model('Product', productSchema);

export default Product;