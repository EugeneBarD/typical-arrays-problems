
exports.min = function min (array) {
	if (array === undefined || array.length === 0) return 0;
	var minimum = array[0];
	for (var i = 0; i < array.length; i++) {
	minimum = minimum < array[i] ? minimum : array[i];
	}
  return minimum || 0;
}

exports.max = function max (array) {
	if (array === undefined || array.length === 0) return 0;
 	var maximum = array[0];
	for (var i = 0; i < array.length; i++) {
	maximum = maximum > array[i] ? maximum : array[i];
	}
  return maximum || 0;
}

exports.avg = function avg (array) {
	if (array === undefined || array.length === 0) return 0;
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
	sum += array[i];
	}
	var average = sum / (array.length);
  return average || 0;
}
