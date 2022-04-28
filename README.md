# Acebook Nacho Libro

[![Nachos](https://github.com/NicolaCortese/Acebook-nacho-libro/actions/workflows/test.yml/badge.svg)](https://github.com/NicolaCortese/Acebook-nacho-libro/actions/workflows/test.yml)

## [Nacho Libro](https://nacho-libro.onrender.com/posts) Social Media Website

_(Please allow a few minutes to load on your first visit)_

We have created an application where users can interact with each other. This can be done by signing up, personalizing their profile page, creating posts, liking and commenting on other peoples posts.

## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest long term support (LTS) version of [Node.js](https://nodejs.org/en/), currently `16.14.0`.
   ```
   nvm install 16
   ```

### Set up your project

1. Fork this repository
2. Rename your fork to `acebook-<name>`
3. Clone your fork to your local machine
4. Install Node.js dependencies
   ```
   npm install
   ```
5. Install an ESLint plugin for your editor. For example: [linter-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for vscode.

6. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@4.4
   ```
7. Start MongoDB
   ```
   brew services start mongodb-community@4.4
   ```

---

### Start the server

```
npm start
```

- Browse to [http://127.0.0.1:3000](http://127.0.0.1:3000)

### Start test server

The server must be running locally with test configuration for the
integration tests to pass.

```
npm run start:test
```

This starts the server on port `3030` and uses the `acebook_test` MongoDB database,
so that integration tests do not interact with the development server.

### How to run the tests

- Run all tests
  ```
  npm test
  ```
- Run a check
  ```bash
  npm run lint              # Linter only
  npm run test:unit         # Unit tests only
  npm run test:integration  # Integration tests only
  ```

---

## MongoDB Connection Errors?

Some people occasionally experience MongoDB connection errors when running the tests or trying to use the application. Here are some tips which might help resolve such issues.

- Check that MongoDB is installed using `mongo --version`
- Check that it's running using `brew services list`
- Try swapping `127.0.0.1`, everywhere that it appears in your codebase, with `127.0.0.1`. It might be surprising but this does sometimes make a difference.

---

## Overview of Functionality

- Sign-up and create an account
- Sign-in/sign-out
- View all the posts
- Add a post
- Add a comment
- Like a post
- View details about each profile
- Edit user profile [profile picture | cover photo | works at | lives in | hobbies]

---

## Card wall

https://trello.com/b/uX1363Jy/%E2%98%A0-nacho-libro-%E2%98%A0

## Credits

Images: [heart icon](https://www.flaticon.com/free-icon/heart_1216811?related_id=1216649&origin=search), [logo](https://www.flaticon.com/free-icon/nachos_390248?term=nachos&page=1&position=56&page=1&position=56&related_id=390248&origin=search), [desk](https://www.flaticon.com/free-icons/desk), [guitar](https://www.flaticon.com/free-icons/hobbies-and-free-time), [location](https://www.flaticon.com/free-icons/hotel), [bday](https://www.flaticon.com/free-icons/birthday)

## Technologies

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Frontend development
- [Express](https://expressjs.com/) | Web framework for Node.js(Backend development)
- [Nodemon](https://nodemon.io/) | Reloads the server automatically.
- [Handlebars](https://handlebarsjs.com/) | Renders view templates.
- [Mongoose](https://mongoosejs.com) | Models objects in MongoDB.
- [ESLint](https://eslint.org) | Linting.
- [Jest](https://jestjs.io/) | Testing.
- [Cypress](https://www.cypress.io/) | End-to-end testing.

---

## Contributors

- [Maria Gromovaja](https://github.com/ruiined) <br>
- [Nicola Cortese](https://github.com/NicolaCortese)<br>
- [Joe Thornton](https://github.com/joe-thornton)<br>
- [Samuel Raducan](https://github.com/samuelmbp)<br>
- [Felix Taljaard](https://github.com/felixtaljaard)<br>
- [Jasmine Cheung](https://github.com/jazzc001)<br>
- [Henry Ferrari](https://github.com/HCVF)

---

## Screenshots

### Timeline

![Timeline](/docs/nacho_libro_timeline.gif)

### New Post

![New Post](/docs/nacho_libro_new_post.gif)

### Profile Page

![Profile](/docs/nacho_libro_profile.gif)

---

## Domain & Process Modeling

![Process Modeling](/docs/process-modeling-1.png)

![Process Modeling](/docs/process-modeling-2.png)
