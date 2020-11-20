const express = require("express");
const path = require("path");

const complements = [
  "I bet you make babies smile",
  "You have impeccable manners",
  "You are the most perfect you there is",
  "Your perspective is refreshing",
  "You should be proud of yourself.",
  "You’re more helpful than you realize.",
  "You’ve got all the right moves!",
  "Your kindness is a balm to all who encounter it.",
  "You’re even more beautiful on the inside than you are on the outside.",
  "When you’re not afraid to be yourself is when you’re most incredible."
];

const insults = [
    "You must have been born on a highway, because that's where most accidents happen.",
    "You're a failed abortion whose birth certificate is an apology from the condom factory.",
    "Shut up, you'll never be the man your mother is.",
    "It looks like your face caught on fire and someone tried to put it out with a fork.",
    "Your family tree is a cactus, because everybody on it is a prick.",
    "You are so ugly that when your mama dropped you off at school she got a fine for littering.",
    "Your so ugly when you popped out the doctor said aww what a treasure and your mom said yeah lets bury it",
    "You're so ugly Hello Kitty said goodbye to you.",
    "Your mama is so fat not even Dora could explore her",
    "Hey, you have something on your chin... 3rd one down."
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.get("/insult", function(req, res) {
    res
      .json({
        insult: getRandomInsult()
      })
      .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");