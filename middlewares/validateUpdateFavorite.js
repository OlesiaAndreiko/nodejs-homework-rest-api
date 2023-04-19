const { HttpError } = require("../helpers");

const validateUpdateFavorite = (schema) => {
  const func = (req, res, next) => {
    const { error} = schema.validate(req.body);
    if (!error) {
      next(HttpError(400, 'Missing field favorite'));
    }
    next();
  };
  return func;
};

module.exports =  validateUpdateFavorite;