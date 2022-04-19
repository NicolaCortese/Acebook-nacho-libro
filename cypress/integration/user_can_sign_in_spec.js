describe("Authentication", () => {
  it("A user signs in and is redirected to /posts", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // redirected to timeline
    cy.url().should("include", "/posts");
    cy.contains("a", "Post");

     // get the confirmation alert
     cy.get("#content").should("contain", "Successfully logged in!")
  });

  it("A user cannot sign in if the credentials are incorrect", () => {
    // sign out
    cy.get("#btn-sign-out").click();

    // attempt to sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("wrong_password");
    cy.get("#submit").click();

    // does not redirect to the timeline
    cy.url().should("not.include", "/posts");

     // get the error alert
     cy.get("#content").should("contain", "Unsuccessful login! Please check your email or password.")
  });
});
