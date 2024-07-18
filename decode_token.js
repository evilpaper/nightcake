const jwt = require("jsonwebtoken");

const token = process.argv[2] || null;
const payload = jwt.decode(token, "H3110_WOr1d");
console.log(payload);
