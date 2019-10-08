const expect = require("chai").expect;
const mongoUnit = require("mongo-unit");
const request = require("supertest");

const testMongoUrl = process.env.MONGO_URL;

const app = function lazy() {
  return require("../src/app");
};

describe("service", () => {
  const testData = require("./resources/tasks.setdata.json");
  beforeEach(() => mongoUnit.initDb(testMongoUrl, testData));
  afterEach(() => mongoUnit.drop());

  it("Should find all products", async () => {
    const response = await request(app()).get("/products");
    expect(response.status).to.equal(200);
    expect(response.body[0].name).to.equal("Soap");
    expect(response.body[1].name).to.equal("Shampoo");
  });
});
