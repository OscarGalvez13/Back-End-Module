const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      username: "OscarG",
      firstName: "Oscar",
      lastName: "Galvez",
    },
    {
      id: 2,
      username: "clauro",
      firstName: "Claudia",
      lastName: "Rodriguez",
    },
  ]);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    username: "OscarG",
    firstName: "Oscar",
    lastName: "Galvez",
  });
});

module.exports = router;
