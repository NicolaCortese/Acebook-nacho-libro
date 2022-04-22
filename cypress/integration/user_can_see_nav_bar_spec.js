describe("Nav bar", () => {
  it("checks it contains all nav elements if not signed in", () => {
    cy.visit("/posts");
    cy.get("#li-sign-in").should("contain", "Sign in");
    cy.get("#li-sign-up").should("contain", "Sign up");
  });

  it("checks it contains all nav elements when signed in", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // check if the elements show up
    cy.get("#li-timeline").should("contain", "Timeline");
    cy.get("#li-post").should("contain", "Post");
    cy.get("#li-profile").should("contain", "batman");
    cy.get("#btn-sign-out").should("have.value", "Sign out");
  });
});
