const good = require("../models/goodPersona");
const evil = require("../models/evilPersona");

function generatePersona(cookie) {
  let persona = {};
  if (cookie.goodEvil === "good") {
    persona = good;
  } else {
    persona = evil;
  }

  persona.styles["insanity"] = setInsanityAttr(cookie.insanity);
  persona["likes"].push(cookie.favFood, cookie.color);
  persona.insanity = cookie.insanity;

  return persona;
}

function setInsanityAttr(num) {
  console.log("into the function");
  num = Number(num);

  if (num < 4) {
    return "sane";
  } else if (num >= 4 && num < 7) {
    return "crazy";
  } else {
    return "psycho";
  }
}

module.exports = generatePersona;
