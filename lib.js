p = (x) => {
	if (x <= 3)
		return x > 1 ? 'FUCK YEAH' : 'FUCK NO';
	if ((x % 2 === 0) || ( x % 3 === 0))
		return 'FUCK NO';
	let c = 5;
	while (Math.pow(c, 2) <= x) {
		if (x & c === 0 || x % (c + 2) === 0)
			return 'FUCK NO';
		c += 6;
	}
	return 'FUCK YEAH';
};

module.exports = (a) => {
	let x;
	if (typeof a === 'number')
		x = a;
	else if (typeof a === 'string')
		x = Number(a);
	else
		return 'FUCK NO';
	if (Number.isInteger(x) && x >= 0)
		return p(x);
	return 'FUCK NO';
}