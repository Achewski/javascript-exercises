const findTheOldest = (people) => {
	people.forEach(person => (!("yearOfDeath" in person))?
		person["yearOfDeath"] = new Date().getFullYear():
		person["yearOfDeath"] = person["yearOfDeath"]);
	oldToYoung = people.sort((a, b) => {
		ageA = (a["yearOfDeath"] - a["yearOfBirth"]);
		ageB = (b["yearOfDeath"] - b["yearOfBirth"]);
		return ageB - ageA;
	});
	return oldToYoung[0];
};

// Do not edit below this line
module.exports = findTheOldest;