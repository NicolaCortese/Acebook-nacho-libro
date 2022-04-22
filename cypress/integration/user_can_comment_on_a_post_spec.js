describe("comment", () => {
  it("can comment on the post", () => {
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

    // comment on a post
    cy.get("#comment-box").find(".comment-text-area").type("Nice comment");
    cy.get(".comment-button").first().click();
    cy.get(".comment-object").first().should("contain", "Nice comment");


  })
})