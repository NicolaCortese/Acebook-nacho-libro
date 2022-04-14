/* eslint-disable */
describe("Likes", () => {
  it("can like the posts, view who liked it and the number of likes", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#email").type("someone@example.com");
    cy.get('#username').type('someone')
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // submit a post
    cy.visit("/posts");
    cy.contains("New post").click();
    cy.get("#new-post-form").find('[type="text"]').type("Hello, world!");
    cy.get("#new-post-form").submit();

    // likes the post
    cy.get(".like-button").click()
    cy.get("#likes-count").should("contain", "1")
    cy.visit("/posts");
    cy.get("#liked-by").should("contain", "someone");
  });
});
/* eslint-enable */

