const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

const Contact = model("contact", contactSchema);

const schemaAddContact = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().optional(),
});

const schemaUpdateContact = Joi.object({});

const scemaRequiredField = Joi.object()
  .keys({
    name: Joi.string().optional(),
    email: Joi.string().optional(),
    phone: Joi.string().optional(),
    favorite: Joi.boolean().optional(),
  })
  .or("name", "email", "phone", "favorite")
  .required();

const schemaUpdateFavorite = Joi.object({ favorite: Joi.boolean().required() });

const schemas = {
  schemaAddContact,
  schemaUpdateContact,
  scemaRequiredField,
  schemaUpdateFavorite,
};

module.exports = { Contact, schemas };
