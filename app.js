const createError = require("http-errors");
const express = require("express");
const session = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
const homeRouter = require("./routes/home");
const postsRouter = require("./routes/posts");
const sessionsRouter = require("./routes/sessions");
const usersRouter = require("./routes/users");
const moment = require("./public/javascripts/moment.min");
const { handlebars } = require("hbs");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use(
  session({
    key: "user_sid",
    secret: "super_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  })
);

// Flash Notice Middleware
app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

// passing the user in session to a local session variable on the response
app.use((req, res, next) => {
  res.locals.session = req.session.user;
  next();
});

// clear the cookies after user logs out
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
});

// middleware function to check for logged-in users
const sessionChecker = (req, res, next) => {
  if (!req.session.user && !req.cookies.user_sid) {
    res.redirect("/sessions/new");
  } else {
    next();
  }
};

// route setup
app.use("/", homeRouter);
app.use("/posts", sessionChecker, postsRouter);
app.use("/sessions", sessionsRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log("catch 404");
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  console.log("error handler");
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// custom handlebar helpers
handlebars.registerHelper("reverse", (array) => array.reverse());
handlebars.registerHelper("ifLiked", (postLikedBy, sessionUser) => {
  if (postLikedBy.includes(sessionUser)) {
    return "Unlike";
  } else {
    return "Like";
  }
});
handlebars.registerHelper("timeAgo", (date) => moment(date).fromNow());
handlebars.registerHelper("equal", (one, two) => one === two);
handlebars.registerHelper("dateFormat", require("handlebars-dateformat"));
handlebars.registerHelper("empty", (element) => element.length === 0);

module.exports = app;
