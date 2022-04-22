describe("Update settings", () => {
  it("redirects to the profile page", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // redirected to the settings page
    cy.visit("/users/batman/settings");

    //fills in form
    cy.get("#birthday").type("2000-01-01");
    cy.get("#lives-in").type("Maracaibo");
    cy.get("#works-at").type("NASA");
    cy.get("#hobbies").type("Sailing, Bowling and Eating");
    cy.get("#submit").click();

    // Check that the details have been updated
    cy.url().should("include", "/users/batman/profile");
    cy.get("#profile-details").find("#profile-pic").should("be.visible");
    cy.get("#main-container").find("#cover-photo").should("be.visible");

    cy.get("#profile-details")
      .should("contain", "01/01/200")
      .and("contain", "Maracaibo")
      .and("contain", "NASA")
      .and("contain", "Sailing, Bowling and Eating");

    cy.get(".edit-profile").should("contain", "Edit Profile");
  });
});
