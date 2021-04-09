
// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// eslint-disable-next-line no-unused-vars
const alchohol = {
  "Jabroni": "Patron Tequila",
  "School Counselor": "Anything with Alcohol",
  "Programmer": "Hipster Craft Beer",
  "Bike Gang Member": "Moonshine",
  "Politician": "Your tax dollars",
  "Rapper": "Cristal",
};

function getDrinkByProfession(param) {
  const key = (words) => words.split(' ').map(w => w.substring(0, 1).toUpperCase() + w.substring(1).toLowerCase()).join(' ');
  const drink = alchohol[key(param)];
  if (drink) return drink
  return "Beer"
}
console.log(getDrinkByProfession("pOLitiCIaN"))
console.log(getDrinkByProfession("pOLitiCIaN g"))
