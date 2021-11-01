// set all require
require("dotenv").config();
const path = require ("path");
const express = require("express");
const methodOverride = require('method-override')

const userRouter = require("./routes/router");
const sequelize = require("./models/sequalize")


const app = express();
app.use(methodOverride('_method'))

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// set view engine
app.set("view engine", "ejs");

app.use(userRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log("connect");
  })
  .catch((error) => {
    console.log("error");
  });

app.use((err, req, res, next) => {
  console.log(err);
  const { message, code = 500, error = "internal server error" } = err;
  
    return res.status(code).json({
        message,
        code,
        error,
    });
  });

app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server running on port : ${PORT}`);
});

