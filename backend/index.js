const express = require("express");
const app = express();
const port = 4080;
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const mongoose=require('mongoose');
const mongoUrl = "mongodb+srv://blinc360:CTyIbXOz8DLffUpb@blinc360.dun0mxe.mongodb.net/blinc360?retryWrites=true&w=majority&appName=Blinc360";
// const mongoUrl = 'mongodb://127.0.0.1:27017/Blinc360';

main()
  .then(() => {
    console.log("Successfully connected to Blinc360 Database");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongoUrl);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionOptions = {
  secret: "supersecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());

const Intern = require("./models/intern");
const Startup = require("./models/startup");
const Admin = require("./models/admin");

passport.use("intern", new LocalStrategy(Intern.authenticate()));

passport.serializeUser(Intern.serializeUser());
passport.deserializeUser(Intern.deserializeUser());

passport.use("startup", new LocalStrategy(Startup.authenticate()));

passport.serializeUser(Startup.serializeUser());
passport.deserializeUser(Startup.deserializeUser());

passport.use("admin", new LocalStrategy(Admin.authenticate()));

passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

app.use((err, req, res, next) => {
  console.error(err);

  if (err.status) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const internRouter = require("./routes/intern");
const startupRouter = require("./routes/startup");
const adminRouter = require("./routes/admin");

app.use("/intern/", internRouter);
app.use("/startup/", startupRouter);
app.use("/admin/", adminRouter);

app.get("/", (req, res, next) => {
  res.send("It's the backend of Blinc 360!");
});

app.listen(port, () => {
  console.log(`Blinc 360 running on port ${port}`);
});
