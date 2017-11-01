let farenheit = [0, 32, 45, 50, 75, 80, 99, 120];
console.log(farenheit.map(function(elem) { return Math.round((elem - 32) * 5 / 9);}));