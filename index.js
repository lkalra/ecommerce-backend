const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();//HELPS IN CREATING API also known as rest object
const productsRouter = require('./routes/Products');
const categoriesRouter = require('./routes/Categories');
const brandsRouter = require('./routes/Brands');
const usersRouter = require('./routes/Users');
const authRouter = require('./routes/Auth');
const cartRouter = require('./routes/Cart');
const ordersRouter = require('./routes/Order');

const PORT = process.env.PORT || 8000; //backend will give its host in case anything goes wrong 8000 will be used

//middlewares
app.use(express.json()); //expects json body from FE and parse in req.body
app.use(cors({
    exposedHeaders:['X-Total-Count']
})) //to prevenet cross origin error when we connect two port to eachother

app.use('/products', productsRouter.router);
app.use('/categories', categoriesRouter.router)
app.use('/brands', brandsRouter.router)
app.use('/auth', authRouter.router)
app.use('/users', usersRouter.router)
app.use('/cart', cartRouter.router)
app.use('/orders', ordersRouter.router)

const URL = "mongodb://localhost:27017/ecommerce"; //db in end is database name

function dbconnect() {
    mongoose.connect(URL).then(() => {
        console.log("Database Connected");
    }).catch((err) => {
        console.log(err.message);
    });
}
dbconnect();

app.get('/',(req,res)=>{
    res.json({status:'Done'})
})

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});