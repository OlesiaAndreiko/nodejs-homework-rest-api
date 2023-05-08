const validateAddContact = require("./validateAddContact");
const validateUpdateContact = require("./validateUpdateContact");
const validateFieldsContact = require("./validateFieldsContact");
const validateUpdateFavorite = require("./validateUpdateFavorite");
const validateFieldsFavofite = require("./validateFiledFavorite")
const isValidId = require("./isValidId");
const validateUser = require("./validateUser");
const validateUserVerifyEmail = require("./validateUserVerifyEmail");
const authenticate = require("./authenticate");
const validateUpdateSubscr = require("./validateUpdateSubscr");
const upload = require("./upload");

module.exports = {
    validateAddContact,
    validateUpdateContact,
    validateFieldsContact,
    validateUpdateFavorite,
    validateFieldsFavofite,
    isValidId,
    validateUser,
    validateUserVerifyEmail,
    authenticate,
    validateUpdateSubscr,
    upload,
}