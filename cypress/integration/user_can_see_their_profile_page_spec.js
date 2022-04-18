describe("Timeline", () => {
  it("can submit posts, when signed in, and view them", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    // submit a post
    cy.visit("/posts");
    cy.contains("New post").click();
    cy.get("#new-post-form").find('#message').type("Batman post");
    cy.get("#new-post-form").submit();
    cy.visit("/users/profile");
    cy.get(".posts").should(
      "contain",
      "Batman post",
    );
    // 
    });

  // it("can submit posts, when signed in, and view them", () => {
  //   cy.visit("/sessions/new");
  //   cy.get("#email").type("joker@example.com");
  //   cy.get("#password").type("password");
  //   cy.get("#submit").click();
  // });
});
