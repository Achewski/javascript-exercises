const palindromes = string => {
	let stringReversed = "";
	string = string.toLowerCase().replace(/[\W]/g, "");
	for (i = string.length-1; i >= 0; i--) {stringReversed += string[i]};
	return (stringReversed === string);
};

// Do not edit below this line
module.exports = palindromes;