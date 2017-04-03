const good = require("../models/goodPersona");
const evil = require("../models/evilPersona");

function generatePersona(cookie) {
  let persona = {};
  if (cookie.goodEvil === "good") {
    persona = good;
  } else {
    persona = evil;
  }
  //persona.likes.push(cookie.favFood, cookie.color);
  // persona.favFood = cookie.favFood;
  // persona.color = cookie.color;
  persona.insanity = cookie.insanity;
  //possibly insanity variation function
  return persona;
}

module.exports = generatePersona;
