describe("Delete", () => {
  it("can delete the post", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // submit a post
    cy.visit("/posts");
    cy.contains("Post").click();
    cy.get("#new-post-form").find("#message").type("Batman post");
    cy.get("#new-post-form").submit();
    cy.get(".posts").should("contain", "Batman post");

    // delete the post
    cy.get("#del-link").first().click();
    cy.get(".posts").should("not.contain", "Batman post");
  });

  it("can only delete if the user is an author of the post", () => {
    // sign out
    cy.get("#btn-sign-out").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("joker@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

   // check if the delete option is there
   cy.get(".posts").should("not.contain", "#del-link");
  });
});
