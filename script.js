const makeChange = (c) => {
  // your name here
	const obj= {};
	obj.q = parseInt(c/25);
	c = c%25;
	obj.d = parseInt(c/10);
	c = c%10;
	obj.n = parseInt(c/5);
	c = c%5;
	obj.p = parseInt(c);
	return obj;
}; 

// Do not the change the code below
const c = parseInt(prompt("Enter c: "));
alert(JSON.stringify(makeChange(c)));
