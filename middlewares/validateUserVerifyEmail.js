const { HttpError } = require("../helpers");

const validateUserVerifyEmail = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      if (error.details[0].context.key === "email") {
        next(
          HttpError(
            400,
            `Missing required field ${error.details[0].context.key}`
          )
        );
      } else {
        next(
          HttpError(
            400,
            `Doesn't support field with ${error.details[0].context.key} name`
          )
        );
      }
    }
    next();
  };
  return func;
};

module.exports = validateUserVerifyEmail;
