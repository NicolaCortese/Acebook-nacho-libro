describe("Likes", () => {
  it("can like the posts, view who liked it and the number of likes", () => {
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
    cy.visit("/posts");
    cy.get(".liked-by").should("contain", "batman");
  });

  it("we can unlike a post, the like count should decrease, and the name should be removed from the liked by", () => {
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
    cy.visit("/posts");
    cy.get(".liked-by").should("contain", "batman");

    //unlike the post
    cy.get(".like-button").first().should("contain", "Unlike").click();
    cy.get(".likes-count").should("contain", "0");
    cy.visit("/posts");
    cy.get(".liked-by").should("not.exist");
  });

  it("adds the user to the liked-by list when they like a post", () => {
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
    cy.get(".liked-by").should("contain", "batman");
  });
});
