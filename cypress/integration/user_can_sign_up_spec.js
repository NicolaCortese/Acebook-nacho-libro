const mongoose = require("mongoose");

// require("../../spec/mongodb_helper");


describe("Registration", () => {
  before( async () => {
    await mongoose.connection.collections.users.drop()
  });

  it("A user signs up and is redirected to sign in", () => {
    // sign up from the homepage
    cy.visit("/");
    cy.get("#signup").click();
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.url().should("include", "/sessions/new");
  });

  it("will not sign up if the email already exists", () => {
    cy.visit("/users/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.visit("/users/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.url().should("include", "/users/new");
    //add an error message here
  });
});
