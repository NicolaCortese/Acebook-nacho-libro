describe("Timeline", () => {
  it("can submit posts, when signed in, and view them", () => {
    // sign in as batman
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    // submit a post
    cy.visit("/posts");
    cy.contains("Post").click();
    cy.get("#new-post-form").find('#message').type("Batman post");
    cy.get("#new-post-form").submit();
    // check if batman's posts show on a profile page
    cy.visit("/users/profile");
    cy.get(".posts").should(
      "contain",
      "Batman post",
    );
    // sign out
    cy.get("#btn-sign-out").click();
    // sign in as joker
    cy.visit("/sessions/new");
    cy.get("#email").type("joker@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();
     // submit a post
     cy.visit("/posts");
     cy.contains("Post").click();
     cy.get("#new-post-form").find('#message').type("Joker post");
     cy.get("#new-post-form").submit();
    // check if joker's posts show on a profile page
    cy.visit("/users/profile");
    cy.get(".posts").should(
      "contain",
      "Joker post",
    );
    // check that batman's post do not show on a profile page
    cy.get(".posts").should(
      "not.contain",
      "Batman post",
    );
  });
});
