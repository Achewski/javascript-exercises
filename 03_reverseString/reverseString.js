const reverseString = function(string) {
	let stringReversed = "";
	for (i = string.length; i >= 0; i--) {
		stringReversed += string.slice(i, i + 1);
	}
	return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;