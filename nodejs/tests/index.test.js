const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("should return Hello World JSON", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ Hello: "World" });
  });
});
