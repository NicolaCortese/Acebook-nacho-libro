describe("Nav bar", () => {
  describe("When not signed in", () => {
    it("checks it contains all nav elements if not signed in", () => {
      cy.visit("/");
      cy.get("#li-sign-in").should("contain", "Sign in");
      cy.get("#li-sign-up").should("contain", "Sign up");
    });
  });
  describe("When signed in", () => {
    it("checks it contains all nav elements when signed in", () => {
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

      cy.get("#li-timeline").should("contain", "Timeline");
      cy.get("#li-post").should("contain", "Post");
      cy.get("#btn-sign-out").should("have.value", "Sign out");
    });
  });
});
