// let firstName = "Bhavya";
// let lastName = "Kandhari";
// console.log("Hello! " + firstName + " " + lastName);


// let firstName = "Bhavya";
// let lastName = "Kandhari";
// let gender = "Male";

// if (gender == "Male") {
//     console.log("Hello! Mr. " + firstName + " " + lastName);
// } else {
//     console.log("Hello! Ms. " + firstName + " " + lastName);
// }


// for (let i=0; i<= 1000; i++) {
//     console.log(i);
// }


// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let n of numberArray) {
//     if (n % 2 == 0) {
//         console.log(n);
//     }
// }




// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let maxNumber = 0;

// for (let n of numberArray) {
//     if (n > maxNumber) {
//         maxNumber = n;
//     }
// }

// console.log("Max number is: " + maxNumber);



// const people = [
//     { firstName: "John", lastName: "Doe", gender: "male" },
//     { firstName: "Jane", lastName: "Smith", gender: "female" },
//     { firstName: "Mike", lastName: "Johnson", gender: "male" },
//     { firstName: "Emily", lastName: "Davis", gender: "female" },
//     { firstName: "David", lastName: "Wilson", gender: "male" }
// ];

// const malePeople = people.filter(person => person.gender === "male");

// const maleFirstNames = malePeople.map(person => person.firstName);

// console.log("Male people's first names:", maleFirstNames);




// let numberArray = [1, 2, 3, 4, 5];
// console.log(numberArray.reverse());



// function add(a, b, callbackFn) {
//     const result = a + b;
//     callbackFn(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is:" + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is :" + data);
// }


// add(10, 20, displayResult);
// add(20, 30, displayResultPassive);


// let counter = 30;

// const countdown = setInterval(() => {
//     console.log(counter);
//     counter--;

//     if (counter < 0) {
//         clearInterval(countdown);
//     }
// }, 1000);


// let startTime = Date.now();

// setTimeout(() => {
//     let endTime = Date.now();
//     let actualDelay = endTime - startTime;
//     console.log(`Expected delay: 1000ms`);
//     console.log(`Actual delay: ${actualDelay}ms`);
// }, 1000);



// function terminalClock() {
//     setInterval(() => {
//         let date = new Date();
//         let time = date.toLocaleTimeString();
//         console.log(time);
//     }, 1000);
// }

// terminalClock();