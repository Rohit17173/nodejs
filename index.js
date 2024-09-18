import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const myDataFields = {
    heading: "Enter your name below 👇",
  };
  res.render("index.ejs", myDataFields);
});
 
app.post("/submit", (req, res) => {
  
  let licence =req.body["licence"]
  
  const myDataFields = {
    heading: licence,
  };
  res.render("home.ejs", myDataFields);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
