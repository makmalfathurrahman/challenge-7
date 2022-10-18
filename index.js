const express = require("express");
var expressLayouts = require("express-ejs-layouts");
const app = express();
const route = require("./routes/index");
const authorizationMid = require("./middleware");
const session = require("express-session");
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.json());

// app.use(authorizationMid);

app.use(route);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
