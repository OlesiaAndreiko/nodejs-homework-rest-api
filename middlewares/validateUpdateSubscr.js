const { HttpError } = require("../helpers");

const validateUpdateSubscr = (schema) => {
  const func = (req, res, next) => {
    const { error} = schema.validate(req.body);
    if (error) {
      next(HttpError(400, 'Invalid subscription'));
    }
    next();
  };
  return func;
};

module.exports =  validateUpdateSubscr;