const good = require("../models/goodPersona");
const evil = require("../models/evilPersona");

function generatePersona(cookie) {
  let persona = {};
  if (cookie.goodEvil === "good") {
    persona = good;
  } else {
    persona = evil;
  }
  persona['likes'].push(cookie.favFood, cookie.color);
  persona.insanity = cookie.insanity;

  return persona;
}

module.exports = generatePersona;
