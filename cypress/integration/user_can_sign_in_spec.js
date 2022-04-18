const webHelper = require("../helper/web_helper");

describe("Authentication", () => {
  it("A user signs in and is redirected to /posts", () => {
    cy.url().should("include", "/posts");
    cy.contains("a", "New post");
  });
});
