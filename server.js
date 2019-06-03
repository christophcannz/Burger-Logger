const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const routes = require("./controllers/burgers_controllers.js");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

//HANDLEBARS CONFIGURATION
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//ROUTER CONFIGURATION
app.use("/", routes);

//START THE SERVER
app.listen(PORT, () => {
    console.log(`Server initiated at PORT ${PORT}`);
});