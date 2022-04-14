describe("Timeline", () => {
  it("can submit posts, when signed in, and view them", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#email").type("someone@example.com");
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

    cy.get("#new-post-form").find('#message').type("Hello, world!");
    cy.get("#new-post-form").find('#image_url').type("https://picsum.photos/536/354");
    cy.get("#new-post-form").submit();

    cy.get(".posts").should("contain", "Hello, world!", "https://picsum.photos/536/354", "be.visible");
  });
});
