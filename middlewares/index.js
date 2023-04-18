const validateAddContact = require("./validateAddContact");
const validateUpdateContact = require("./validateUpdateContact");
const validateFieldsContact = require("./validateFieldsContact");
const validateUpdateFavorite = require("./validateUpdateFavorite");
const validateFieldsFavofite = require("./validateFiledFavorite")
const isValidId = require("./isValidId");

module.exports = {
    validateAddContact,
    validateUpdateContact,
    validateFieldsContact,
    validateUpdateFavorite,
    validateFieldsFavofite,
    isValidId,
}