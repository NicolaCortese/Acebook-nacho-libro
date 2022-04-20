describe("Registration", () => {
  it("A user signs up and is redirected to sign in", () => {
    // sign up from the homepage
    cy.visit("/");
    cy.get("#signup").click();
    cy.get("#username").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // redirected to the sign in page
    cy.url().should("include", "/sessions/new");

    // get a confirmation alert
    cy.get("#content").should(
      "contain",
      "You are now registered! Please sign in."
    );
  });

  it("will not sign up if the email already exists", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#username").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // attempt to sign up with the same e-mail
    cy.visit("/users/new");
    cy.get("#username").type("unknown");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // not get redirected
    cy.url().should("include", "/users/new");

    // get an error alert
    cy.get("#content").should(
      "contain",
      "This email already exists! Would you like to sign in?"
    );
  });

  it("will not sign up if the username already exists", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#username").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // attempt to sign up with the same username
    cy.visit("/users/new");
    cy.get("#username").type("someone");
    cy.get("#email").type("unknown@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // not get redirected
    cy.url().should("include", "/users/new");

    // get an error alert
    cy.get("#content").should(
      "contain",
      "This username is already taken! Please choose another username."
    );
  });

  it("will not sign up if the the fields are empty", () => {
    // attempt to sign up without filling up the fields
    cy.visit("/users/new");
    cy.get("#submit").click();

    // not get redirected
    cy.url().should("include", "/users/new");
    
    // get an error alert
    cy.get("#content").should(
      "contain",
      "Empty fields! Please insert all the information."
    );
  });
});
