// const webHelper = require("../helper/web_helper");

describe("Sign out", () => {
  it("can sign out", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    //sign out
    cy.get("#btn-sign-out").click();
    cy.url().should("include", "/sessions/new");

    // get a confirmation alert
    // cy.get("#content").should("contain", "Successfully logged out!")
  });
});
