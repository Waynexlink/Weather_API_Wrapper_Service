const cors = require("cors");

const corsOptions = {
  origin: "*",
  methods: "GET",
};

module.exports = cors(corsOptions);
