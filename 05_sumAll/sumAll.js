const sumAll = function(start, finish) {
	let sum = 0;
	if (start < 0 || finish < 0 || !Number.isFinite(start) || !Number.isFinite(finish)) {
		return "ERROR";
	}
	if (start < finish){
		for (i = start; i <= finish; i++) {
			sum += i;
		}
	} else {
		for (i = finish; i <= start; i++) {
			sum += i;
		}
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;