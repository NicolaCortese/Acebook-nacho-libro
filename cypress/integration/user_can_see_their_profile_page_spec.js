describe("Timeline", () => {
  it("can submit posts, when signed in, and view them", () => {
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    // // sign up
    // cy.visit("/users/new");
    // cy.get("#email").type("someone@example.com");
    // cy.get("#password").type("password");
    // cy.get("#submit").click();
    // // sign in
    // cy.visit("/sessions/new");
    // cy.get("#email").type("someone@example.com");
    // cy.get("#password").type("password");
    // cy.get("#submit").click();
    // // submit a post
    // cy.visit("/posts");
    // cy.contains("New post").click();
    // cy.get("#new-post-form").find('[type="tex"]t').type("Hello, world!");
    // cy.get("#new-post-form").submit();
    // cy.get(".posts").should("contain", "Hello, world!");
    // // go to profile page and show posts by user
    // cy.visit("/profile");
    // cy.contains("New post").click();
    // cy.get("#new-post-form").find('[type="text"]').type("Hello, world!");
    // cy.get("#new-post-form").submit();
    // cy.get(".posts").should("contain", "Hello, world!");
  });

  it("can submit posts, when signed in, and view them", () => {
    cy.visit("/sessions/new");
    cy.get("#email").type("joker@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();
  });
});
