/* eslint-disable */

//NOT BEING USED FOR THE MOMENT
const signUpAndIn = () => {
  console.log("web helper");
  describe("Sign up and in", () => {
    it("signs up and in", () => {
      // sign up
      cy.visit("/users/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#username").type("someone");
      cy.get("#password").type("password");
      cy.get("#submit").click();

      // sign in
      cy.visit("/sessions/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#password").type("password");
      cy.get("#submit").click();
    });
  });
};

module.exports = signUpAndIn;
