function isPositive(n) {
	try{
		if(a == 0){
			throw "Zero Error";
		}else
		if(a < 0){
			throw "Negative Error";
		}else
		{
			throw "YES";
		}
	}
	catch(err){
		return err;
	}
}

console.log(isPositive(5));
console.log(isPositive(0));
console.log(isPositive(-1));
console.log(isPositive(3));