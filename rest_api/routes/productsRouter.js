const express = require("express");
const faker = require("faker");
const authHandler = require("../middlewares/authHandlers");
const product = require("../usecases/products");

const router = express.Router();

router.get("/", async (request, response, next) => {
  const products = [];
  const { limit } = request.query;

  try {
    const products = await product.get(limit);
    response.json({
      ok: true,
      message: "Done!",
      payload: { products },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  const { id } = request.params;

  try {
    const product = await product.getById(id);
    response.json({
      ok: true,
      message: "Done!",
      payload: { product },
    });
  } catch (error) {
    next(error);
  }
});

// router.use(authHandler);

router.post("/", async (request, response, next) => {
  try {
    const productData = request.body;
    const productCreated = await product.create(productData);

    response.status(201).json({
      ok: true,
      message: "New product created",
      payload: {
        product: productCreated,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;

  try {
    const productResponse = await product.update(id, { name, price });
    response.json({
      status: ok,
      ok: true,
      message: "Done!",
      payload: { productResponse },
    });
  } catch (error) {
    next(error);
  }

  if (id == 99) {
    response.status(404).json({
      ok: false,
      message: "Product not found",
    });
  } else {
    response.status(201).json({
      ok: true,
      message: `Product ${id} updated successfully`,
      payload: {
        name,
        price,
      },
    });
  }
});

router.delete("/:id", async, (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await product.del(id);
    res.json({
      ok: true,
      message: "Product deleted successfully",
      payload: {
        product: deletedProduct,
      },
    });
  } catch {}
  // Logica para eliminar
  res.status(202).json({
    ok: true,
    message: `Product ${id} deleted successfully`,
  });
});

module.exports = router;
