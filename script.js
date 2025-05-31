// var age = prompt("Enter your age");
// if (age >= 18){
//     alert("You're an adult")
// }else {
//     alert("You're a minor")
// }


// var num = prompt("Enter a number");
// if(num >0 ){
//     console.log("Positive number");
    
// }else {
//     console.log("Not Positive");
    
// }


// var $num = prompt("Enter a number");
// if($num = !0 && $num % 2 === 0) {
//     alert("Even number")
// }else {
//     alert("Odd number")
// }



// var userName = prompt("Enter your username");
// if (userName === "admin") {
//     alert("Welcome, admin! ")
// }else {
//     alert("Access denied")
// }



// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");
// if(num1 === num2){
//     console.log("Both numbers are the same");
    
// }else {
//     console.log("The numbers are different");
// }



// var numA = prompt("Enter first number");
// var numB = prompt("Enter second number");
// if (numA > numB) {
//     alert("First number is larger")
    
// }else {
//     alert("Second number is larger")
// }


// var numC = prompt("Enter a number");
// if (numC > 100){
//     alert("Too big!")
// }else{
//     alert("Within range")
// }


// var score = prompt("Enter your score");
// if(score >= 50){
//     console.log("You Passed!")
// }else{
//     console.log("You Failed")
// }


// var temp = prompt("Enter area temperature");
// if (temp > 30){
//     alert("It's Hot!")
// }else {
//     alert("It's not hot")
// }




// var numD = prompt("Enter a number");
// if(numD === 0 ){
//     alert("Zero")
// }else{
//     alert("Not Zero")
// }




// var age = prompt("Enter your age");
// if(age >= 60){
//     console.log("You're a senior citizen");
    
// }else{
//     console.log("You're not a senior");
    
// }


// var name = prompt("Enter your name");
// if (name === "Alice"){
//     alert("Hi Alice!")
// }else {
//     alert("You're not Alice")
// }


// var passWord = prompt("Enter password");
// if(passWord == "1234"){
//     console.log("Correct Password");
// }else{
//     console.log("Incorrect Password");
// }




// var hour = prompt("Please enter the current hour (0-23)")
// if (hour < 12){
//     alert("Good morning!");
// }else{
//     alert("Good afternoon")
// }



// var numE = prompt("Enter a number");
// if (numE % 5 === 0) {
//     console.log("Divisible by 5");
    
// }else {
//     console.log("Not divisible by 5");
    
// }



// var playGame = prompt("Do you want to play a game?");
// if (playGame === "yes"){
//     alert("Let's Play")
// }else{
//     alert("Maybe next time")
// }



// var color = prompt("What's your favorite color?");
// if (color === "blue"){
//     console.log("Cool choice!");
    
// }else {
//     console.log("Interesting color");
    
// }




// var dayOfWeek = prompt("Enter day of week");
// if (dayOfWeek === 'sunday'){
//     alert("Weekend!")
// }else {
//     alert("Weekday")
// }


// var fruit = prompt("Enter a fruit");
// if (fruit === 'banana' || fruit === 'apple'){
//     alert("We have that!")
// }else{
//     alert("Sorry, out of stock")
// }



// var game = prompt("type start to begin");
// if (game === "start"){
//     alert("Game started")
// }else{
//     alert("Waiting for input...")
// }




// ------- //

// Second Portion IF-Else If Statements

// var marks = 53
// if(marks >= 80) {
//     console.log("Distinction");
    
// }else if (marks >= 50 && marks < 80){
//     console.log("Pass");
    
// }else if (marks < 50 ){
//     console.log("Fail");
    
// }else {
//     console.log("Invalid Marks");
// }



// var $age = 50
// var isPremMem = false;
// if($age >= 60 && isPremMem ){
//     console.log("Senior Premium Discount");
    
// }else if ($age >= 60){
//     console.log("Senior Discount");
    
// }else if (isPremMem){
//     console.log("Premium Disount");
    
// }else {
//     console.log("No Discount");
    
// }



// var isLoggedIN = false;
// var emailVerified = true;
// if(isLoggedIN && emailVerified){
//     console.log("Access Granted");
// }else if (isLoggedIN && emailVerified === false){
//     console.log("Please verify email");
    
// }else {
//     console.log("Please log in");
// }



// var country = "Pakistan"
// var age = 35;
// var isBanned = true;
// if (age >= 18 && age <= 35 && isBanned === false && (country === "Pakistan" || country === "India")){
//     console.log("You are eligible");
    
// }else if (age < 17 || age > 35) {
//     console.log("You are not eligible due to age");
    
// }else if (isBanned === true) {
//     console.log("You are banned");
// }else {
//     console.log("You are not eligible due to region");
    
// }





// var subscription = "---"
// var $isLoggedIn = true;
// if(subscription === "Premium" && $isLoggedIn === true) {
//     console.log("Welcom Premium user!");
    
// }else if (subscription === "Free" && $isLoggedIn === true){
//     console.log("Welcome free user");

// }else if ($isLoggedIn === false){
//     console.log("Please log in to continue");
    
// }else {
//     console.log("Invalid Subscription");
    
// }




// var hoursWorked = 0;
// var isWeekend = false;

// if(hoursWorked > 40 && isWeekend === false){
//     console.log("Overtime");
    
// }else if (hoursWorked > 0 && isWeekend === true){
//     console.log("Weekend work");
    
// }else if(hoursWorked === 0) {
//     console.log("No work");
    
// }else if (hoursWorked <= 40){
//     console.log("Regular hours");
    
// }