// // scripts.js


var a = prompt ('Enter (a)'),
	b = prompt ('Enter (b)'),
	value = (a * a) - (2 * a * b) + (b * b);
console.log('The result of the equation, where "a" is equal: ' + a + ' and "b": ' + b + ' is equal to: ' + value);

if (value < 0 ) {
	console.log('Wynik jest ujemny');
} else if (value > 0) {
	console.log('Wynik jest dodatni');
} else {
	console.log('Wynik jest równy 0');
}
// if (value < 0 ) {
//   console.log('Wynik jest ujemny');
// } else if 
//   (value > 0) {
//   console.log('Wynik jest dodatni');
// }
// if (value == 0) {
//   console.log('Wynik jest równy 0');
// } else if (value != 0) {
//   console.log('Wynik jest różny od 0');
// }