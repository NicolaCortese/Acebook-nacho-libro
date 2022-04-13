// const User = require('../../models/user');

describe('Registration', () => {
  // beforeEach(() => {
  //   await User.deleteMany();
  // })

  it('A user signs up and is redirected to sign in', () => {
    // sign up
    cy.visit('/users/new');
    cy.get('#email').type('someone@example.com');
    cy.get('#password').type('password');
    cy.get('#submit').click();

    cy.url().should('include', '/sessions/new');

    // sign up from the homepage
    cy.visit('/');
    cy.get('#signup').click();
    cy.get('#email').type('someone@example.com');
    cy.get('#password').type('password');
    cy.get('#submit').click();

    cy.url().should('include', '/sessions/new');
  });

  it('Throws an error when email already exists', () => {
    cy.visit('/users/new');
    cy.get('#email').type('someone@example.com');
    cy.get('#password').type('password');
    cy.get('#submit').click();

    cy.url().should('include', './users/new');
    cy.should('include', 'User already exists');
  });
});
