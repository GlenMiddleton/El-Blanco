console.log("Hello World")
// This will print hell world in your console

/*
This is
A multiline
Comment
*/

/*

Variables

var a = 10;
let a = 10;




const x = 20;
*/


let a = 10;
console.log(a)

const x = 20;
console.log(x)

a = 5
console.log(a)

let bob = 69;
console.log(bob)

// data types
/*
Conists of
Numbers
Strings
and booleans
*/

let temp = 10; // data typre = number
console.log(temp)

let temp1 = "fart";// data type = string (text)
console.log(temp1)

/*
All numbers in javascript must begin with a letter or an underscore.
You cant use a reserved word as a variable name.
Reserved word turns blue.
*/

// Arithmatic Operaters

// Addition

console.log(5+2)
console.log("abc"+"def")

// Subtraction

console.log(5-2)

// Muliply

console.log(5*2)

// Exponent(power)

console.log(2**3)

// Division

console.log(5/2)

// Incrament

let h = 11;
console.log(h++)
console.log(h)


let k = 10
console.log(++k)

// Decresent operater

console.log(k--)

console.log(k)

console.log(--k)


//comparison operators

// equals ==

console.log(5 == 3)

console.log(4 == 4)
// not equals

console.log(5!=4)
console.log(4!=4)

//greater than

console.log(5> 4)

console.log(4 >5)

//less than

console.log(5< 4)
console.log(4<5)


//greater than or equals to

console.log(5>= 4)
console.log(4 >=5)

//less than or equals to

console.log(5<= 4)
console.log(4 <=5)

//assignment operators

//equals= 
//this is the simple assignment

let n = 12

//add an assignment +=
n+=12 //this is the same as writing n+n=12
console.log(n)

//subtract an assignment -=

n-=4 //this is the same as writing n=n-4
console.log(n)

//multiply and assignment *=
n*=5 //this is the same as writing n=n*5
console.log(n)

//dvide and assignment %=

let y = 4

y%=2 //this is the same as writing y=y%2
console.log(y)

    //conditional operator
/*
the conditional operator value evaluates an expression for the true or false
if true it executes the first statement
otherwise it executes the second
*/

let first = 10
let second = 12

console.log(first>second?"true":"false")
//           ^Test condition^

            // TYOEOFOPERATOR

let mystring = "hello"
console.log(typeof(mystring))

let mynumber = 12
console.log(typeof(mynumber))

         //USERINPUT

/*
the prompt() function is used to take imput
from the user
the default datatype for input is string
to convert the datatype to number, wrap the 
promt in a NUMBER() function call
*/

let mysecondstring = prompt("enter something");
let mysecondnumber = number(prompt("enter a number"));
console.log(mysecondnumber);

// if statement

let myAge = 400
if (myAge > 500?console.log("your over 500 years old"):console.log("you are under 500"));