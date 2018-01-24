# Nth Root Of A Number

Web application that calculates and displays the nth root of a number.

Performed without the help of math libraries, only using simple mathematical operators ( + , - , x , / ).

Developed in JS.

## Getting Started

1. Download this actual folder (in zip version or by cloning it using Git) by clicking on "clone or download"
2. If you have decided to download it in zip version, uncompress it
3. Double click on the file nthroot.html and enjoy !

## The way it works : 

1. Enter the number whose root you want to calculate and select the order of the root. 
2. Press "calculate" and you will have the result !

*Note :* The larger the number you enter, the longer the calculation time will be. The screen may remain frozen for a few seconds before displaying the result. You can read the explanations below. 

*Note 2 :* Javascript must be enabled in your web browser.

## Principles explanations :

1. According to the simple mathematical principles concerning the nth roots, we know that :  ![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/d7873203eb76042fcd24056c553de8c86054a2df)
 =  ![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/828ecec40be966aa3a03d8d16b7c8e7108402132).

2. We also know that we can write the exponential function like this : ![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/b8cc06279d975eddb1d5e3b82f3409537827b3d3).

3. By using the Euler Transform on the Mercator series, we can write the natural logarithm function like this : ![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/f4c77cbd34fe687bef51732083c84fc2202bf3e8)



Therefore, by using relations 2 and 3 in relation 1, we are able to compute the nth root of a number using only the basic arithmetic operators (+, -, x, /). 

Unfortunately, a problem arises when we want to calculate a sum with an index going to infinity (the letter n in the sums above). As you know, the larger the index, the longer the calculation time and the variable containing the result of the operation will be heavy. 

For the purposes of this application, I took the initiative to take a maximum index value equal to 100,000. 

As you also know, the value 100,000 and the infinite are far from being comparable, and that is why the larger the value of the number of which we want to compute the nth root, the more the result will be inaccurate.

## Sources : 

https://en.wikipedia.org/wiki/Nth_root

https://en.wikipedia.org/wiki/Exponentiation

https://en.wikipedia.org/wiki/Exponential_function

https://en.wikipedia.org/wiki/Natural_logarithm#Derivative,_Taylor_series
