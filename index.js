var wordExists = require('word-exists');

var times = [[], [], []];

var testValues = [
	'amphidiploidies',
	'zooxanthellae',
	'superlongstringthatisntevenaword',
];

for (var q = 0; q < 3; q++) {
	while (times[q].length < 3) {
		var startTime = Date.now();
		for (var r = 0; r < 1000; r++) {
			wordExists(testValues[q]);
		}
		times[q].push(Date.now() - startTime);
	}
}

const lists = document.querySelectorAll('#speed_tests > ul');

for (var q = 0; q < 3; q++) {
	for (var r = 0; r < 3; r++) {
		var li = document.createElement('li');
		li.innerHTML = times[q][r] + ' ms';

		lists[q].appendChild(li);
	}
}
