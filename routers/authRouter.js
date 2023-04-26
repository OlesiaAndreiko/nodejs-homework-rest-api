const express = require("express");
const ctrl = require("../controllers/auth");

const { validateUser, authenticate, validateUpdateSubscr } = require("../middlewares");

const { schemas } = require("../db/models/usersModel");

const router = express.Router();

router.post("/register", validateUser(schemas.registerSchema), ctrl.register);

router.post("/login", validateUser(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/", authenticate, validateUpdateSubscr(schemas.subscUpdateSchema), ctrl.updateSubscription);

module.exports = router;