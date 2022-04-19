describe("Likes", () => {
  it("can like the posts and the number of likes", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // submit a post
    cy.visit("/posts");
    cy.contains("New post").click();
    cy.get("#new-post-form").find("#message").type("Hello, world!");
    cy.get("#new-post-form").submit();

    // likes the post
    cy.get(".like-button").first().click();
    cy.get(".likes-count").should("contain", "1");
  });

  it("we can unlike a post and the like count should decrease", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // submit a post
    cy.visit("/posts");
    cy.contains("New post").click();
    cy.get("#new-post-form").find("#message").type("Hello, world!");
    cy.get("#new-post-form").submit();

    // likes the post
    cy.get(".like-button").first().click();
    cy.get(".likes-count").should("contain", "1");

    //unlike the post
    cy.get(".like-button").first().should("contain", "Unlike").click();
    cy.get(".likes-count").should("contain", "0");
  });
});
