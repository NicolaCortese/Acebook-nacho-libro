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
});
