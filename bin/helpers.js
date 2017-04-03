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

function getGood(insanityLevel) {
  if (insanityLevel < 3) {
    return "Angela Dorothea Merkel (English /ˈæŋɡələ ˈmɛərkəl/[a]; née Kasner; born 17 July 1954) is a German politician who is currently Chancellor of Germany. She is also the leader of the Christian Democratic Union (CDU). Merkel has been described at various times as the de facto leader of the European Union, the most powerful woman in the world, and the world's second most powerful person.";
  } else if (insanityLevel < 8) {
    return "William Bradley brad Pitt (born December 18, 1963) is an American actor and producer. He has received multiple awards and nominations including an Academy Award as producer under his own company Plan B Entertainment.";
  } else {
    return "Born and raised in the Austrian Empire, Tesla received an advanced education in engineering and physics in the 1870s and gained practical experience in the early 1880s working in telephony and at Continental Edison in the new electric power industry. He immigrated to the United States in 1884, where he would become a naturalized citizen. He worked for a short time at the Edison Machine Works in New York City before he struck out on his own. With the help of partners to finance and market his ideas, Tesla set up laboratories and companies in New York to develop a range of electrical and mechanical devices. His alternating current (AC) induction motor and related polyphase AC patents, licensed by Westinghouse Electric in 1888, earned him a considerable amount of money and became the cornerstone of the polyphase system which that company would eventually market.";
  }
}

function getBad(insanityLevel) {
  if (insanityLevel < 3) {
    return "Weiner was a member of the New York City Council from 1992 to 1998, and a congressional aide to U.S. Representative Chuck Schumer from 1985 to 1991. He was a New York City native, attended public schools, and graduated from the SUNY Plattsburgh in 1985 with a B.A. in political science. He was an unsuccessful candidate for Mayor of New York City in the 2005 and 2013 New York City mayoral elections.";
  } else if (insanityLevel < 8) {
    return "Thomas Cruise Mapother IV (born July 3, 1962), known professionally as Tom Cruise, is an American actor and producer. He has been nominated for three Academy Awards and has won three Golden Globe Awards. He started his career at age 19 in the film Endless Love (1981). After portraying supporting roles in Taps (1981) and The Outsiders (1983), his first leading role was in the romantic comedy Risky Business, released in August 1983. Cruise became a full-fledged movie star after starring as Pete  Mitchell in the action drama Top Gun (1986). One of the biggest movie stars in Hollywood,[2][3] Cruise starred in several more successful films in the 1980s, including the dramas The Color of Money (1986), Cocktail (1988), Rain Man (1988), and Born on the Fourth of July (1989).";
  } else if (insanityLevel === 9) {
    return `Dick Chenny`;
  } else {
    return "I am Satan lord of darkness";
  }
}

function generateBio(alliance, insanityLevel) {
  if (alliance === "good") {
    return getGood(insanityLevel);
  } else {
    return getBad(insanityLevel);
  }
}

module.exports = {
  setInsanityAttr,
  generateBio
};
