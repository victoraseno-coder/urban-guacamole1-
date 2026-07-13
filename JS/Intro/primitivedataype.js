/*
numbers .
floating point number:<has decimal places>
real numbers
positive 
negative numbers 

*/

let number1 = 23; // real number
let number2 = 30; //floating pointnumber
let number3 = -33; //negative number
let biggestNumber = 45576576799894;
console.log(biggestNumber);
console.log(number1);
console.log(number2);
console.log(number3);

/*
strings -> store sequence of characters 
3 ways of creating a string 
1.double quote string 
2.single quote string 
3.backticks strings
*/

let str1 = "I am Aseno"; // double quotes
console.log(str1);
let str2 = "Iam Aseno"; //single quotes
console.log(str2);
let str3 = `Iam Aseno`; // backticks
console.log(str3);
let str4 = "23"; // string or a number :<string>
console.log("23 si a string");

/*why do we have multiple ways of representing a string */
str4 = `they told "me am raila"`;
console.log(str4);
let str5 = 'they told "me am aseno"';
console.log(str5);
/* 
Booleam represent true or false
*/
let johnismarried = true; //true value
console.log(johnismale);
johnismarried = false;
console.log(johnismarried);

/*
Null -> lack of value ie absense of value
*/
let nullval1 = null;
console.log(nullval1);

/* 
Undefined -> lack of value ie absense of value 

difference between undefined and null 

--->never explicitly set something to undefined 
If you wantbto create a variable that does not have a value never use undefined use null

*/
let undefinedval1 = undefined; //dont do
console.log(undefinedval1); //undefined
let undefinedval2; //js engine sets it to undefined
console.log(undefinedval2); // undefined
