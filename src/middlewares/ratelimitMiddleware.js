const rateLimiter = require("express-rate-limit");

const limiter = rateLimiter({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // Max 100 requests per window
  message: "Too many requests from this IP, please try again later",
});

module.exports = limiter;
