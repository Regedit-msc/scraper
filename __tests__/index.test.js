const { app } = require("../app");
const request = require("supertest");
// Will fail because "node-fetch"is an ESM module
// Just finished rewriting from ESM to common js and back but can't seem to get jest
// to recognise modules. Tried "mjs",still didn't work for me
// Run test manually its only one endpoint 😁.
describe("scrape", () => {
  it("should scrape data and return status code 200 if text is passed to body", async () => {
    const res = await request
      .agent(app)
      .post("/scrape")
      .send({ text: "This is https://live-gists.netlify.app" });
    expect(res.statusCode).toEqual(200);
  });
});
