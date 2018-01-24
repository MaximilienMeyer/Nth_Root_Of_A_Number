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

	/*ACCURACY OPTIMIZATION*/
	if (number >= 16000){
		index *= 100;
	}else if (number >= 14000){
		index *= 90;
	}else if (number >= 12000){
		index *= 80;
	}else if (number >= 10000){
		index *= 70;
	}else if (number >= 8000){
		index *= 60;
	}else if (number >= 6000){
		index *= 50;
	}else if (number >= 4000){
		index *= 40;
	}else if (number >= 2000){
		index *= 30;
	}else if (number >= 1000){
		index *= 20;
	}else if (number >= 500){
		index *= 10;
	}

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