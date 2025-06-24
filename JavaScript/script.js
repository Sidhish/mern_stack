// const product = {
//     name : "parker Pen",
//     rating : 5/10,
//     price : 250,
//     isDeal : true,
//     offer : 5,
// };
// // student["fullName"] = "Sidhu"
// console.log(product );

// const profile = {
//     fullName: "shradha khapra",
//     posts: 195,
//     followers: 569000,
//     following: 4,
//     isFollow: true,
//     id : "@shradhakhapra",
//     role: "Enterpreneur",

// };
// console.log(profile["fullName"]);

// let age = 5;
// let result = age>18 ? "adult" : "child";
// console.log(result);


// const foo = 0;
// switch (foo) {
//   case 0:
//     console.log("negative 1");
//     // break;
//   case 0: // Value of foo matches this criteria; execution starts from here
//     console.log(0);
//   // Forgotten break! Execution falls through
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     // break; // Break encountered; will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log("default");
// }
// // Logs 0 and 1

// daily problem checking the number is multiple of 5 or not 
// let num = prompt("Enter a number: ");
// if(num % 5 == 0){
//     console.log(num," is multiple of 5");
// }else{
//     console.log(num," is not a multiple of 5");
// }

// code to give students grades
// let marks = prompt("Enter your marks: ");
// if(marks >= 80 && marks <= 100){
//     console.log("A");
// }
// else if(marks >= 70 && marks <= 89){
//     console.log("B");
// }
// else if(marks >= 60 && marks <= 69){
//     console.log("C");
// }
// else if(marks >= 50 && marks <= 59){
//     console.log("D");
// }
// else{
//     console.log("F");
// }

// for(let i=0;i<=5;i++){
//     console.log("i = ",i);
// }

// //for_of_loop(used for strings and arrays)
// let str = "Sidhish";
// let size = 0;
// for(let i of str){
//     console.log("i: ",i);
//     size++;
// }
// console.log("Size : ",size);

//for_in_loop(used for objects and arrays) 
// let student={
//     name : "sidhish",
//     age : 20,
//     cgpa : 8.5,
//     isPass : true,
// }
// for(let key in student){
//     console.log("key = ",key,"value =",student[key]);
// }

//print all the even number from 0 to 100

// for(let i=1;i<=100;i++){
//     if(i % 2 == 0){
//         console.log("even number: ",i);
//     } 
// }

//create a game where you start with any random game number. Ask the user to keep guessing the game number untill the user enters correct value.
// let num = 10;
// let userNum = prompt("guess the correct number from 0 to 100: ");
// if(userNum == num){
//     alert("you won the game!!");
// }
// else{
//     alert("you lost the game");
// }  MY SOLUTION
// let crtNum = 25;
// let userNum = prompt("Guess the correct number");
// while(userNum != crtNum){
//     userNum = prompt("You entered wrong number guess again");
// }
// console.log("Congratulations, you entered the correct number");// MAM solution

//templates in js : A way to have embedded expressions in strings
// let item ={
//     name :"pen",
//     cost: 10,
// }
// let output = `the cost of ${item.name} is ${item.cost} rupees`;
// console.log(output);
//string interpolation: to create strings by substitution of placeholders  `string text ${expression} string text`
// let specialString = `this is a template literal ${1+2+3}`;
// console.log(specialString);

//string methods (string is immutable(cannot changed))
// let str="          this Sidhish Puppala   ";
// let num = "0123456";
// let upperStr = str.toUpperCase();// conver all characters to upper case 
// let lowerstr = str.toLowerCase();//convert all characters to lower case
// let trimstr = str.trim();//remove spaces at starting and ending 
// console.log(str);
// console.log(upperStr);
// console.log(lowerstr);
// console.log(trimstr);
// console.log(num.slice(3,6));// we can slice the string into the index value where you want to slice (it prints = 345)
// console.log(str.concat(num));//joins both the strings (or we can add strings directly (str + num) returns same output)
// console.log(str.replace("t","o"));//replaces the string(t) with new string(o) (replaces first one only)
// console.log(str.replaceAll("i","a"));//replaces all(i) with (a) output is - thas Sadhash Puppala  
// console.log(str.charAt(10));//returns the value at the 10 index


//Practice problem 
//prompt the user to enter their full name. generate a username for them based on the input. 
//start username with @,followed by their full name and ending with the fullname length.
//examle: userName:"Sidhish", userName should be: "@Sidhish7"
// let nameG = prompt("Enter your name: ");
// let size = nameG.length;
// let userName = "@" + nameG + size;

// console.log(userName);

//ARRAYS(mutable)
// let marks = [10,20,30,40,50];
// let heros = ["iron Man","spiderman","thor","hulk"];
// console.log(marks);
// console.log(heros); //we can change the values in arrays not like string
// marks[0] = 70;// changes 10 to 70
// console.log(marks);//returns [70, 20, 30, 40, 50]
// for(let i=0;i<heros.length;i++){
//     console.log(heros[i]);
// }
// for(let mark of marks){
//     console.log(mark);
// }

//Practice question
//for a given array with marks of students ->[85,97,44,37,76,60]
//Find the average marks of the entire class
// let marks = [85,97,44,37,76,60];
// let averageMarks = 0;
// for(let i=0;i<marks.length;i++){
//     averageMarks += marks[i];
// }
// console.log(averageMarks/marks.length);

// Practice Question
//For a given array with prices ->[250,645,300,900,50]
//All items have an offer on 10% Off on them. change the array to store final price after appling offer
// let prices=[250,645,300,900,50];
// for(let i=0;i<prices.length;i++){
//     prices[i] = prices[i] - (prices[i]/10);
// }
// console.log(prices);//offer output is [225, 580.5, 270, 810, 45]

//ARRAY methods
//Push() : add to end
//pop() : delete from end and return
//toString() : converts array to string
//Concat() : joins miltiple arrays adn return result
//unshift() : add to start
//shift() : delete from start and return 
//slice() : returns a pieceof the array (slice(startidx , endidx))
//splice() : change original array(add,remove,replace)
//splice(strtIdx,delCount,newE)

// let foodItems = ["potato","apple","grapes","tomato"];
// let numbers = ["90","92","93"];
// console.log(foodItems);
// foodItems.push("litchi","panner");
// console.log(foodItems);
// let deleted = foodItems.pop();
// console.log(foodItems);
// console.log(deleted);
// console.log(foodItems.toString());
// console.log(numbers.toString());
// console.log(foodItems.concat(numbers));
// foodItems.unshift("meat")
// console.log(foodItems);
// foodItems.shift()
// console.log(foodItems);
// console.log(foodItems.slice(0,3));

// //splice
// let arr = [1,2,3,4,5,6,7];
// let arr1 = [1,2,3,4,5,6,7];
// console.log(arr);
// arr.splice(2,2,143,144);//deleting and adding elemetns 
// console.log(arr);
// arr1.splice(2,0,103)//adding elements withput deleting
// console.log(arr1);
// arr1.splice(3,1)//delete element 
// console.log(arr1);
// arr1.splice(3,1,101);
// console.log(arr1);


//practice question
//create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
//1.Remove the first company from the array
//2.Remove Uber and Add ola in its place
//3.Add amazon at the end

// let arr = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift("Bloomberg");
// console.log(arr);
// arr.splice(2,1,"Ola");
// console.log(arr);
// arr.push("Amazon");
// console.log(arr);

//FUNCTIONS 
//Block of code that perfroms a specific task, cam be invoked(called) whenever needed
// parameters in function are like local variable which are of block scope

// function myFunction(){
//     console.log("Hii");
//     console.log("This is sidhish");
// }
// myFunction();

// function myFunction(msg){
//     //parameter -> input
//     console.log(msg);
// }
// myFunction("Hii, good to see you"); //argument 

//ARROW Functions(=>) 
//comapt way of writing a function
/* const functionName = (parameter1,parameter2..)=>{
     //do some work
}*/

// const arrowSum = (a,b) => {
//     console.log(a+b);
// }
// console.log(arrowSum(2,3));

//Practice question
//create a function using the "function" keyword that tajes a string as an argument
//and return the number of vowels in the string.
// create a arrow function to create the same task

// function fnString(str){ 
//     let count  = 0;
//     for(let i=0;i<=str.length;i++){
//         if(str[i] == "a" || str[i] == "e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(fnString("aaaa"));

// const countVowels = (str) => {
//     let count  = 0;
//     for(let i=0;i<=str.length;i++){
//         if(str[i] == "a" || str[i] == "e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//             count++;
//         }
//     }
//     return count;
// } 
// console.log(countVowels("aeioua"));

//ForEach loop in arrays
//arr.forEach(callBackFunction)
//callBackFunction : Here it is a function to execute for each element in an array
//A callback is a function passed as an argument to another function
/* arr.forEach((val) =>{
    console.log(val)    
}) */

// let arr = [1,2,3,4,5,6];
// arr.forEach((val) => {
//     console.log(val);
// });

// let arr = ["andhra","pune","delhi","mumbai"];
// arr.forEach((val,idx,arr) =>{
//     console.log(val.toUpperCase(),idx,arr);
// });

//What is Higher Order Funtions/Methos 
//it is using a function as a parameter or retuning the function as a value 
//  What is a Higher-Order Function?
// A Higher-Order Function (HOF) is a function that does at least one of the following:

// Takes another function as an argument

// Returns a function as its result
// A function that operates on other functions (by taking them as arguments or returning them) is called a Higher-Order Function.

//Practice Question
//For a given array of numbers, print the square of each value using the forEach loop
// let arr = [1,2,3,4,5];
// arr.forEach((val) =>{
//     console.log(val*val);
// });
//Both are same methods
// let arr = [1,2,3,4,5];
// let calSquare = (val) => {
//     console.log(val*val);
// };
// arr.forEach(calSquare);

//Some more Array methods
//map 
//creates a new array with the result of some operation. the value its callback
//returns are used to form new array
//arr.map(callbackfnx(val,idx,arr)) 
/* let newArr = arr.map((val) =>{
    return val*2;
}); */
