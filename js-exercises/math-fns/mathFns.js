
// Don't change the export values.
// You can use the function in the Math module

function sqrt(value) {
  let temp, op = value/2;

	do {
		temp = op;
		op = (temp + (value/temp)) / 2;
	} while ((temp - op) != 0);

	return op;
}

function power(value, pow) {
  let op;
  if (value == 0) {
    if (pow <= 0)
      return op;
    else
      return 0;
  }
  else {
    if (pow == 0)
      return 1;
    else if (pow == 1)
      return value;
    else
      return value * power(value, pow-1);
  }
}

function round(value) {
  let op = parseInt(value);
  return (value - op < 0.5 ? op : op+1);
}

export {
  sqrt,
  power,
  round,
};
