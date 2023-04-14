const { HttpError } = require("../helpers");

const validateFieldsContact = (schema) => {
  const func = (req, res, next) => {
    const { error} = schema.validate(req.body);
    if (error) {
      next(HttpError(400, `Doesn't support field with ${error.details[0].context.key} name`));
    }
    next();
  };
  return func;
};

module.exports =  validateFieldsContact;