describe("Registration", () => {
  it("A user signs up and is redirected to sign in", () => {
    // sign up from the homepage
    cy.visit("/");
    cy.get("#signup").click();
    cy.get("#username").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.url().should("include", "/sessions/new");
  });

  it("will not sign up if the email already exists", () => {
    cy.visit("/users/new");
    cy.get("#username").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.visit("/users/new");
    cy.get("#username").type("unknown");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.url().should("include", "/users/new");
    // cy.should(
    //   "include",
    //   "This email already exists. Would you like to sign in?"
    // );
  });

  it("will not sign up if the username already exists", () => {
    cy.visit("/users/new");
    cy.get("#username").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.visit("/users/new");
    cy.get("#username").type("someone");
    cy.get("#email").type("unknown@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.url().should("include", "/users/new");
    // cy.should("include", "This username is already taken.");
  });
});
