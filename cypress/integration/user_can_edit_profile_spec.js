describe("Update settings", () => {
  it("redirects to the profile page", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // navigate to the settings page

    cy.get("#nav-img").click()
    cy.get(".edit-profile").click();

    // fill in the form

    cy.get("#birthday").type("2000-01-01");
    cy.get("#livesIn").type("Maracaibo");
    cy.get("#worksAt").type("NASA");
    cy.get("#hobbies").type("Sailing, Bowling and Eating");
    cy.get("#submit").click();

    //redirect back to the profile page
    cy.url().should("include", "/users/batman/profile");
    cy.get("#content").should(
      "contain",
      "Thanks for adding the info!"
    );
    cy.get("#profile-details").find("#profile-pic").should("be.visible");
    cy.get("#main-container").find("#cover-photo").should("be.visible");

    cy.get("#profile-details")
      .should("contain", "01/01/200")
      .and("contain", "Maracaibo")
      .and("contain", "NASA")
      .and("contain", "Sailing, Bowling and Eating");
  });
})
