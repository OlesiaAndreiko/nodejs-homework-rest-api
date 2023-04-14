const { HttpError } = require("../helpers");

const validateUpdateContact = (schema) => {
  const func = (req, res, next) => {
    const { error} = schema.validate(req.body);
    if (!error) {
      next(HttpError(400, 'Missing fields'));
    }
    next();
  };
  return func;
};

module.exports =  validateUpdateContact;