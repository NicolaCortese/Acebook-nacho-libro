describe("timeline navigation", () => {
  it("can navigate to someone's profile from timeline by clicking their name on a post", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.get(".user-name").first().click();
    cy.url().should("include", "/users/joker/profile");
  });
});
