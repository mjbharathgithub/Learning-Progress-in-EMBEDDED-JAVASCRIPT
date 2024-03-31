import express from "express";
const app = express();
const port = 3000;

let today = new Date();
let date = today.getDay();
let adv = "notihng";
let type = "notihng";

app.get("/", (req, res) => {
  if (date === 0 || date === 6) {
    type = "WeekEnd";
    adv = "Time to enjoy";
  } else {
    type = "WeekDay";
    adv = "Time to work hard";
  }
  
  res.render("index.ejs", {
    typeOfday: type,
    relevantAdvice: adv,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
