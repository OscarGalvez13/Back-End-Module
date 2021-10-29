const jwt = require("jsonwebtoken");

const secret = "MySecret";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTYzNTQ2OTgwN30.mTt3HQ7yzMcwRuxMvcgng3J3wVTTyFMvmYy9icd3Q0E";

const payload = jwt.verify(token, secret);

console.log("Payload:", payload);
