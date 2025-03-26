const expressValidator = require("express-validator");

const { param, validationResult } = require("express-validator");

const validateCity = [
  param("city")
    .isString()
    .trim()
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("City name must contain only letters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validator;
