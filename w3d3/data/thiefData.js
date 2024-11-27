const thief1 = {
  id: 1,
  email: "gentleman@cambrioleur.com",
  name: "Arsène Lupin",
  password: "tophat",
  imagePath: "/images/arsene.gif",
};

const thief2 = {
  id: 2,
  email: "pontiac@bandit.com",
  name: "Doug Judy",
  password: "rosa",
  imagePath: "/images/doug.webp",
};

const thievesArr = [thief1, thief2];
const thievesObj = { "gentleman@cambrioleur.com": thief1, "pontiac@bandit.com": thief2 };

module.exports = { thievesArr, thievesObj };
