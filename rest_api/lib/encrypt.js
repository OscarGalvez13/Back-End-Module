const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  return await bcrypt.hash(password);
};

const verifyPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = {
  hashPassword,
  verifyPassword,
};
