const express = require("express");

const ctrl = require("../../controllers/contacts");

const {
  validateAddContact,
  validateUpdateContact,
  validateFieldsContact,
} = require("../../middlewares");

const {
  schemaAddContact,
  schemaUpdateContact,
  scemaRequiredField,
} = require("../../validateSchemas/contacts");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateAddContact(schemaAddContact), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", validateUpdateContact(schemaUpdateContact), validateFieldsContact(scemaRequiredField), ctrl.updateContact);

module.exports = router;
