const { HttpError } = require("../helpers");

const validateRegisterUser = (schema) => {
  const func = (req, res, next) => {
    const { error} = schema.validate(req.body);
    if (error) {
      next(HttpError(400, 'Incorrect password or email'));
    }
    next();
  };
  return func;
};

module.exports =  validateRegisterUser;