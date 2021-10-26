/* const { response, request } = require("express"); */
/* const express = require("express");
const app = express();
const port = 8001;
const faker = require("faker");

app.get("/", (req, res) => {
  res.send("Hello Koder!");
});

app.get("/products", (req, res) => {
  const products = [];
  for (let index = 0; index < 100; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  const { limit } = req.query;
  res.json(
    {
      name: "Product 1",
      price: 1000,
    },
    {
      name: "Product2",
      price: 1500,
    }
  );
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "Product 1",
    price: 1000,
  });
});

app.get("/categories/:categoryId/product/:productId", () => {
  const { categoryId, productId } = request.params;
  response.json({
    productId,
    categoryId,
    name: "Producto1",
    price: 1000,
  });
});

app.listen(port, () => {
  console.log("Lsitening on port:", port);
});
 */

const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");
const apiRouter = require("./routes");
const { logErrors, errorHandler } = require("./Middlewares/errorHandlers");
const authHandler = require("./Middlewares/authHandlers");
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/categories/:categoryId/product/:productId", (request, response) => {
  const { categoryId, productId } = request.params;

  response.json({
    productId,
    categoryId,
    name: "Producto1",
    price: 1000,
  });
});
app.use(authHandler);
apiRouter(app);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`);
});
