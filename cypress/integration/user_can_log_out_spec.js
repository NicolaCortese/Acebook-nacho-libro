const webHelper = require("../helper/web_helper");

describe("Sign out", () => {
  it("can sign out", () => {
    //sign out
    cy.get("#btn-sign-out").click();
    cy.url().should("include", "/sessions/new");
  });
});
