const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = a => {
	let answer = 0;
	for (let i = 0; i < a.length; i++) {
		answer += a[i];
	}
	return answer;
};

const multiply = a => {
	let answer = 1;
	let item;
	for (i = 0; i < a.length; i++) {
		item = a[i];
		answer = answer * item;
	}
	return answer;
};

const power = (a, b) => Math.pow(a, b);

const factorial = a => {
	let f = 1;
	for (i = 1; i <= a; i++) {
		f *= i;
	}
	return f;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
};