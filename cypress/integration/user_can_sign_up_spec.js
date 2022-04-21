describe("Registration", () => {
  it("A user signs up and is redirected to the settings page", () => {
    // sign up from the homepage
    cy.visit("/users/new");
    cy.get("#signup").click();
    cy.get("#username").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // redirected to the settings page
    cy.url().should("include", "/users/someone/settings");

    // get a confirmation alert
    cy.get("#content").should(
      "contain",
      "You are now registered! Please edit your profile."
    );

    //fills in form

    cy.get("#birthday").type("2000-01-01");
    cy.get("#lives-in").type("Maracaibo");
    cy.get("#works-at").type("NASA");
    cy.get("#hobbies").type("Sailing, Bowling and Eating");
    cy.get("#submit").click();

    //redirect to sign in
    cy.url().should("include", "/sessions/new");
    cy.get("#content").should(
      "contain",
      "Thanks for adding the info! Please sign in."
    );
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    //redirect to posts
    cy.url().should("include", "/posts");
    cy.get("#li-profile").click();

    //redirects to profile page
    cy.url().should("include", "/users/someone/profile");
    cy.get("#profile-details").find("#profile-pic").should("be.visible");
    cy.get("#main-container").find("#cover-photo").should("be.visible");

    cy.get("#profile-details")
      .should("contain", "01/01/200")
      .and("contain", "Maracaibo")
      .and("contain", "NASA")
      .and("contain", "Sailing, Bowling and Eating");

    cy.get(".edit-profile").should("contain", "Edit Profile");
  });

  it("will not sign up if the email already exists", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#username").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // attempt to sign up with the same e-mail
    cy.visit("/users/new");
    cy.get("#username").type("unknown");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // not get redirected
    cy.url().should("include", "/users/new");

    // get an error alert
    cy.get("#content").should(
      "contain",
      "This email already exists! Would you like to sign in?"
    );
  });

  it("will not sign up if the username already exists", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#username").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // attempt to sign up with the same username
    cy.visit("/users/new");
    cy.get("#username").type("someone");
    cy.get("#email").type("unknown@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // not get redirected
    cy.url().should("include", "/users/new");

    // get an error alert
    cy.get("#content").should(
      "contain",
      "This username is already taken! Please choose another username."
    );
  });

  it("will not sign up if the the fields are empty", () => {
    // attempt to sign up without filling up the fields
    cy.visit("/users/new");
    cy.get("#submit").click();

    // not get redirected
    cy.url().should("include", "/users/new");

    // get an error alert
    cy.get("#content").should(
      "contain",
      "Empty fields! Please insert all the information."
    );
  });
});
