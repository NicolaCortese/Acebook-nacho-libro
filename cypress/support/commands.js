// const mongoose = require("mongoose");
// const User = require('../../models/user')

// Cypress.Commands.add("addUsers", () => {
// mongoose
//   .connect("mongodb://127.0.0.1/acebook_test", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Mongo connection open");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// const batman = new User({
//   "username": "Batman",
//   "email": "batman@example.com",
//   "password": "password"});
// batman.save();
// });

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
