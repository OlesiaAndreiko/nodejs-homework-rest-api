const express = require("express");

const ctrl = require("../controllers/contacts");

const {
  isValidId,
  validateAddContact,
  validateUpdateContact,
  validateFieldsContact,
  validateUpdateFavorite,
  validateFieldsFavofite,
} = require("../middlewares");

const { schemas } = require("../db/models/contactModel");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateAddContact(schemas.schemaAddContact), ctrl.addContact);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateUpdateFavorite(schemas.schemaUpdateContact),
  validateFieldsFavofite(schemas.schemaUpdateFavorite),
  ctrl.updateStatusContact
);

router.put(
  "/:contactId",
  isValidId,
  validateUpdateContact(schemas.schemaUpdateContact),
  validateFieldsContact(schemas.scemaRequiredField),
  ctrl.updateContact
);

router.delete("/:contactId", isValidId, ctrl.removeContact);

module.exports = router;