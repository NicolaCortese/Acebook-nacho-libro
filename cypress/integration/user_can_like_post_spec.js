describe("Likes", () => {
  it("can like the posts and the number of likes changes", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // likes the second post
    cy.get(".like-button").eq(1).click();
    cy.get(".likes-count").eq(1).should("contain", "4");

    // likes the first post
    cy.get(".like-button").eq(0).click();
    cy.get(".likes-count").eq(0).should("contain", "3");
  });

  it("we can unlike a post and the like count should decrease", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // likes the post
    cy.get(".like-button").first().should("contain", "Like").click();
    cy.get(".likes-count").should("contain", "4");

    //unlike the post
    cy.get(".unlike-button").first().should("contain", "Unlike").click();
    cy.get(".likes-count").should("contain", "3");

    //unlikes a post that has already been liked
    cy.get(".unlike-button").last().should("contain", "Unlike").click();
    cy.get(".likes-count").eq(2).should("contain", "3");
  });
});
