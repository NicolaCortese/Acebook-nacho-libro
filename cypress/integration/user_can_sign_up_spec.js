// const mongoose = require("mongoose");

// require("../../spec/mongodb_helper");

describe("Registration", () => {
  // before( async () => {
  //   await mongoose.connection.collections.users.drop()
  // });

  it('A user signs up and is redirected to sign in', () => {
    // sign up from the homepage
    cy.task('log', 'Running from line #12');
    cy.visit('/');
    cy.get('#signup').click();
    cy.get('#username').type('someone');
    cy.get('#email').type('someone@example.com');
    cy.get('#password').type('password');
    cy.get('#submit').click();

    cy.url().should('include', 'http://localhost:3030/sessions/new');
  });

  // it('Throws an error when email already exists', () => {
  //   cy.visit('/users/new');
  //   cy.get('#username').type('someone');
  //   cy.get('#email').type('someone@example.com');
  //   cy.get('#password').type('password');
  //   cy.get('#submit').click();

  //   cy.url().should('include', './users/new');
  //   cy.should('include', 'Email already exists');
  // });

  it('will not sign up if the email already exists', () => {
    cy.visit('/users/new');
    cy.get('#username').type('someone');
    cy.get('#email').type('someone@example.com');
    cy.get('#password').type('password');
    cy.get('#submit').click();

    cy.visit('/users/new');
    cy.get('#username').type('unknown');
    cy.get('#email').type('someone@example.com');
    cy.get('#password').type('password');
    cy.get('#submit').click();

    cy.url().should('include', '/users/new');
    cy.should(
      'include',
      'This email already exists. Would you like to sign in?'
    );
  });

  it('will not sign up if the username already exists', () => {
    cy.visit('/users/new');
    cy.get('#username').type('someone');
    cy.get('#email').type('someone@example.com');
    cy.get('#password').type('password');
    cy.get('#submit').click();

    cy.visit('/users/new');
    cy.get('#username').type('someone');
    cy.get('#email').type('unknown@example.com');
    cy.get('#password').type('password');
    cy.get('#submit').click();

    cy.url().should('include', '/users/new');
    cy.should('include', 'This username is already taken.');
  });
});
