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



function generateBio(alliance, insanityLevel) {
  if (alliance === 'good') {
    return bioSwitch(insanityLevel);
  } else {
    return bioSwitch(insanityLevel);
  }
};

module.exports = {
  setInsanityAttr,
  generateBio
}