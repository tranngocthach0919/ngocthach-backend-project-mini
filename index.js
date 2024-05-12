const express = require('express');
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const port = 3100 || process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (res, req) => {
    res.json("Welcom");
})

const ProductsController = require('./controllers/products.controllers');
const CategoriesController = require('./controllers/categories.controllers');
const StatusController = require('./controllers/status.controllers');

app.get('/products', ProductsController.getProducts);
app.get('/product/:id', ProductsController.getProduct);
app.post('/product', ProductsController.addProduct);
app.patch('/product/:id', ProductsController.updateProduct);
app.delete('/product/:id', ProductsController.deleteProduct);

app.get('/categories', CategoriesController.getCategories);

app.get('/status', StatusController.getStatus);

app.listen(port, () => {  
    console.log(`LetDiv app listening on port ${port}`);
  });
