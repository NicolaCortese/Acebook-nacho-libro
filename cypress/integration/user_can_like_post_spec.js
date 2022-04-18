/* eslint-disable */
const signUpAndIn = require("../helper/web_helper");

describe("Likes", () => {
  it("can like the posts, view who liked it and the number of likes", () => {
    signUpAndIn();

    // submit a post
    cy.visit("/posts");
    cy.contains("New post").click();
    cy.get("#new-post-form").find("#message").type("Hello, world!");
    cy.get("#new-post-form").submit();

    // likes the post
    cy.get(".like-button").first().click();
    cy.get(".likes-count").should("contain", "1");
    cy.visit("/posts");
    cy.get(".liked-by").should("contain", "someone");
  });
});
/* eslint-enable */
