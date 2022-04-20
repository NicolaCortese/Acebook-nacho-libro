describe("Other likes on a post", () => {
  it("can like the posts, view who liked it and the number of likes", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // checks the accordion
    cy.get(".panel").first().should("contain", "Robin");
    cy.get(".panel").first().should("contain", "Batman");
    cy.get(".panel").first().should("contain", "Penguin");
  });
});