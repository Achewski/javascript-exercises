const repeatString = function(string, num) {
	if (num < 0) {
		return "ERROR";
	} else{
		let multiString = '';
		for (i = 0; i < num; i++) {
			multiString += string;
		}
		return multiString;
	}
};

// Do not edit below this line
module.exports = repeatString;
