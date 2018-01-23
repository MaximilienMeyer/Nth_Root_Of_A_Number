/*-----------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------MATH PART----------------------------------------------------------*/
/*------------------------------------------------- ---FUNCTIONS DEFINITION----------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------------------*/

/*FUNCTION THAT PUT A NUMBER TO THE POWER OF THE EXPONENT*/
function power(number, exponent){
	var i = 1;
	var result = 1;
	while(i <= exponent){
		result *= number;
		i++;
	}
	return result;
}

/*FACTORIAL OF NUMBER*/
function factorial(number){
	var result = 1;
	while(number > 1){
		result *= number;
		number --;
	}
	return result;
}

/*EXPONENTIAL OF A NUMBER*/
function exp(number){
	var k = 0;
	var numerator;
	var denominator;
	var result = 0;

	while(k < 100){
		numerator = power(number, k);
		denominator = factorial(k);
		result += numerator/denominator;
		k++;
	}
	return result;
}

/*NATURAL LOGARITHM OF A NUMBER*/
function ln(number){
	var k = 1;
	var index = 1000;
	var firstFactor;
	var secondFactor;
	var result = 0;

	while(k < index){
		firstFactor = 1 / k;
		secondFactor = power((number - 1) / number, k);
		result += firstFactor * secondFactor;
		k++;
	}
	return result;
}

/*NTH ROOT OF A NUMBER*/
function nthRoot(number, rootExponent){
	if(number == 0){
		return 0;
	}
	if(number == 1){
		return 1;
	}
	return exp(1/rootExponent * ln(number));
}

/*REFINE THE ROOT IN CASE OF THE ROOT IS AN INTEGER*/
function refineRoot(result, rootExponent, originalNumber){
	var refineRoot = parseInt(result)+1;

	if(power(refineRoot, rootExponent) == originalNumber){
		return refineRoot;
	}else{
		return result;
	}
}


/*-----------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------HTML PART----------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------------------*/

var form = document.getElementById("form");
var result;

form.addEventListener("submit",function(e){
	e.preventDefault(); 
	var number = form.elements.number.value;
	var order = form.elements.order.value;

	result = nthRoot(number, order);
	result = refineRoot(result, order, number);

	if(order != 2){
		document.getElementById("rootOrder").textContent = order;
	}else{
		document.getElementById("rootOrder").textContent = "";
	}
	document.getElementById("number").textContent = number;
	document.getElementById("result").textContent = result;
	document.getElementById("resultAnswer").style.display = "block";
	
});