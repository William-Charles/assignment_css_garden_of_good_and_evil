const good = require("../models/goodPersona");
const evil = require("../models/evilPersona");
const {
  setInsanityAttr,
  generateBio
} = require("./helpers");

function generatePersona(cookie) {
  let persona = {};
  let insanityLevel = Number(cookie.insanity);

  if (cookie.goodEvil === "good") {
    persona = good;
    persona["bio"] = generateBio("good", insanityLevel);
  } else {
    persona = evil;
    persona["bio"] = generateBio("evil", insanityLevel);
  }
  persona["insanityLevel"] = insanityLevel;
  persona.styles["insanity"] = setInsanityAttr(insanityLevel);
  persona["food"] = cookie.favFood;
  persona["color"] = cookie.color;
  persona.styles["color"] = cookie.color;
  console.log(persona);

  return persona;
}

module.exports = generatePersona;
