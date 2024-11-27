const { thievesObj } = require("../data/thiefData");

const authenticateThief = (email, password) => {
  if (!email || !password) {
    return { error: "HEY FILL THE FIELDS!", thief: null };
  }

  const currentThief = thievesObj[email];

  if (!currentThief) {
    return { error: "HEY NOT A VALID EMAIL!", thief: null };
  }

  if (currentThief.password !== password) {
    return { error: "HEY NOT A VALID PASSWORD", thief: null };
  }

  return { error: null, thief: currentThief };
};

const fetchThiefByEmail = (email) => {
  const currentThief = thievesObj[email];

  if (!currentThief) {
    return { error: "HEY NOT A VALID EMAIL!", thief: null };
  }

  return { error: null, thief: currentThief };
};

const fetchThiefById = (thiefId) => {
  const thiefList = Object.values(thievesObj);

  const currentThief = thiefList.find((thief) => thief.id === thiefId);

  if (!currentThief) {
    return { error: "HEY NOT A VALID ID!", thief: null };
  }

  return { error: null, thief: currentThief };
};

const createThief = (thiefFormData) => {
  const { email, name, password, imagePath } = thiefFormData;

  const invalidFields = []

  for(const key in thiefFormData){
    if(!thiefFormData[key]){
      invalidFields.push(key)
    }
  }

  if(invalidFields.length > 0){
    return { error: `The following field(s) are missing: ${invalidFields.join(", ")}`, thief: null };
  }


  // if (!email || !name || !password || !imagePath) {
  //   return { error: "HEY MISSING FIELDS YOU DUM DUM", thief: null };
  // }

  const newId = Object.values(thievesObj).length + 1;

  const newThief = { id: newId, email, name, password, imagePath };

  thievesObj[email] = newThief;

  return { error: null, thief: newThief };
};

module.exports = { authenticateThief, fetchThiefByEmail, fetchThiefById, createThief };


// [1,2,3,4].forEach()
// .map()
// .filter()