describe("Edit", () => {
  it("can edit the post", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // submit a post
    cy.visit("/posts");
    cy.contains("New post").click();
    cy.get("#new-post-form").find("#message").type("Unedited batman message");
    cy.get("#new-post-form").submit();
    cy.get(".posts").should("contain", "Unedited batman message");
    cy.get(".posts").should("not.contain", "https://picsum.photos/536/354");

    // go to an editing page
    cy.get("#edit-link").first().click();
    cy.get("#edit-form").find("#edit-msg").type("Edited batman message");
    cy.get("#edit-form")
      .find("#edit-img")
      .type("https://picsum.photos/536/354");
    cy.get("#edit-form").submit();

    // redirect to the timeline and confirm the changes
    cy.get(".posts").should(
      "contain",
      "Edited batman message",
      "https://picsum.photos/536/354",
      "be.visible"
    );
  });

  it("can only edit if the user is an author of the post", () => {
    // sign out
    cy.get("#btn-sign-out").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("joker@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // check if the edit option is there
    cy.get(".posts").should("not.contain", "#edit-link");
  });
});
