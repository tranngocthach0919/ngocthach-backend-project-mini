const { products, nextId } = require("../shared/shared");

class ProductsController {
  getProducts(req, res) {
    const { search = '' } = req.query;
    let filterProducts = products;

    // search
    if (search) {
      filterProducts = filterProducts.filter(
        (product) =>
          product.id.toString().includes(search) ||
          product.productName.toLowerCase().includes(search.toLowerCase()) ||
          product.image.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase()) ||
          product.quantity.toString().includes(search) ||
          product.price.toString().includes(search)
      );
    }

    res.json(filterProducts);
  }

  getProduct(req, res) {
    const { id } = req.params;
    const product = products.find((product) => product.id === Number(id));

    if (product) {
      res.json(product);
    } else {
      res.sendStatus(404);
    }
  }

  addProduct(req, res) {
    const product = {
      id: nextId(products),
      ...req.body,
    };

    products.push(product);
    res.json(product);
  }

  updateProduct(req, res) {
    const { id } = req.params;
    const { image, productName, category, price, quantity, status } = req.body;

    const product = products.find((product) => product.id === Number(id));
    if (product) {
      product.productName = productName || product.productName;
      product.image = image || product.image;
      product.category = category || product.category;
      product.price = price || product.price;
      product.quantity = quantity || product.quantity;
      product.status = status || product.status;
      res.json(product);
    } else {
      res.sendStatus(404);
    }
    console.log(product);
  }

  deleteProduct(req, res) {
    const { id } = req.params;

    if (id) {

      const product = products.find((product) => product.id === Number(id));

      if (product) products.splice(products.indexOf(product), 1);

      res.json(product);
    } else {
      res.sendStatus(404);
    }
  }
}

module.exports = new ProductsController;
