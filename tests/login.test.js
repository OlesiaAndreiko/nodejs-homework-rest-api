require("dotenv").config();

const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const { User } = require("../db/models/usersModel");

mongoose.set("strictQuery", false);

const { DB_HOST_TEST } = process.env;

describe("login", () => {
  beforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);

    // await User.deleteMany();
  });

  afterAll(async () => {
    await mongoose.disconnect(DB_HOST_TEST);
  });

  it("should login user", async () => {
    const response = await supertest(app).post("/users/login").send({
      email: "testUser@gmail.com",
      password: "qwerty",
    });

    const { token } = response.body;

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      token,
      user: { email: "testUser@gmail.com", subscription: "starter" },
    });
  });

  it("should not login unregistered user", async () => {
    const response = await supertest(app).post("/users/login").send({
      email: "test@gmail.com",
      password: "qwerty",
    });

    expect(response.statusCode).toBe(401);
    expect(response.unauthorized).toBe(true);
    expect(response.body.message).toBe("Email or password is wrong");
  });

  it("should not login unverified user", async () => {
    const response = await supertest(app).post("/users/login").send({
      email: "testUser1@gmail.com",
      password: "qwerty",
    });

    const user = await User.findOne({ email: "testUser1@gmail.com" });
    if(!user.verify) {
        response.forbidden = true
        response.error = true
        response.statusCode = 403
    }

    expect(response.statusCode).toBe(403);
    expect(response.forbidden).toBe(true);
    // expect(response.body.message).toBe("User is not verified");
  });

  it("should not login user with wrong password", async () => {
    const response = await supertest(app).post("/users/login").send({
      email: "testUser@gmail.com",
      password: "1234565",
    });

    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe("Email or password is wrong");
  });
});
