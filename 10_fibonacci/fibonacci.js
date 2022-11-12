const fibonacci = member => {
	if (member < 0) {
		return "OOPS";
	} else {
		let n1 = 0;
		let n2 = 1;
		for (i = 1; i <= member; i++) {
			n3 = (n1 + n2);
			n1 = n2;
			n2 = n3;
		}
		return n1;
	}
};

// Do not edit below this line
module.exports = fibonacci;