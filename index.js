const express = require('express')
const path = require('path')
const cors = require('cors');
// connet mongodb
//Import the mongoose module
var mongoose = require('mongoose');
const { stringify } = require('querystring');

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/womens-fashion';
mongoose.connect(mongoDB);


//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
// connect
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
    //trying to get collection names
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        console.log(names); // [{ name: 'dbname.myCollection' }]
        module.exports.Collection = names;
    });
})

// schema
let Schema = mongoose.Schema;
let productsSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    type: String,
    description: String,
    cost: String,
    quantity: String
})
let Products = mongoose.model("products", productsSchema);
// end connet mongodb

const app = express()

app.use(cors({
    origin: '*'
}));

app.get("/products/all", async (request, response) => {
    const products = await Products.find({});
    try {
        response.send(products);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.get('/products/:type', async function (request, response) {
    // res.send('user' + req.params.id);
    const products = await Products.find({ type: request.params.type });
    try {
        response.send(products);
    } catch (error) {
        response.status(500).send(error);
    }
});

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`App listening on port ${port}`))
