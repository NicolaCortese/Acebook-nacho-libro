describe('Update settings', () => {
  it('redirects to the profile page', () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("batman@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // redirected to the settings page
    cy.visit("/users/batman/settings");

    //fills in form
    cy.get("#coverPhoto").type("https://picsum.photos/100/100");
    cy.get("#birthday").type("2000-01-01");
    cy.get("#livesIn").type("Maracaibo");
    cy.get("#worksAt").type("NASA");
    cy.get("#hobbies").type("Sailing, Bowling and Eating");
    cy.get("#submit").click();

    // Check that the details have been updated
    cy.url().should("include", "/users/batman/profile");
    cy.get("#coverPhotoDiv").find("img").should("be.visible");
    cy.get("#profilePicDiv").find("img").should("be.visible");

    cy.get("#birthday").should("contain", "01/01/200");
    cy.get("#livesIn").should("contain", "Maracaibo");
    cy.get("#worksAt").should("contain", "NASA");
    cy.get("#hobbies").should("contain", "Sailing, Bowling and Eating");
    cy.get(".editProfile").should("contain", "Edit Profile");
  })
})