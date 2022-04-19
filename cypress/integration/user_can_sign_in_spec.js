describe("Authentication", () => {
  it("A user signs in and is redirected to /posts", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    //redirected to timeline
    cy.url().should("include", "/posts");
    cy.contains("a", "Post");
  });
});
