// console.log("Hello, Everyone");

// Java --> variable is declared with a type int (statically typed language) --> int a;
// JS --> variable is declared
// JS Primitives --> number, string, boolean, null, undefined
// let a = 10;
// console.log(a);
// a = 10.1;
// a = "I am a string";
// console.log(a);
// a = true;
// console.log(a);

// JS --> 10 days --> (Brenden Eich) --> Java Syntax

// Is Prime
// let number = 23;
// let flag = true;
// for(let i = 2 ; i * i <= number ; i++){
//     if(number % i == 0){
//         flag = false;
//         break;
//     }
// }

// if(flag == true){
//     console.log(number , "is Prime");
// } else{
//     console.log(number , "is not Prime")
// }

// JS Non Primitives --> functions, Arrays, Objects

// function sayHi(param) {
//     console.log("sayHi was called");
//     console.log("value inside param is", param);
//     let rval = Math.random() > 0.5 ? "good work" : false;
//     return rval;
// }

// let rval = sayHi("Hello");
// console.log("value inside rval is", rval);
// rval = sayHi(10);
// console.log("value inside rval is", rval);

// Function overloading does not exist in js, instead we can pass any number of parameters in any function
// function sayHi(param){
//     console.log(arguments);
//     console.log(param);
// }

// sayHi();
// sayHi(10);
// sayHi(10 , 20);

// In Java --> Array is a collection of homogeneous data types
// In JS --> Array is a collection of anything
// let arr = [];

// let arr = [
//     1,
//     1.1,
//     true,
//     function sayHi() {
//         console.log("function inside an array");
//         return "val returned from an array";
//     },
//     null,
//     [1, 2, 3, 4, 5, 6]
// ];

// console.log(arr);
// console.log(arr[2]);
// console.log(arr[arr.length - 1]);

// console.log(arr[3]);
// arr[3]();
// console.log(arr[3]());

// addLast --> push
// removeLast --> pop
// add first --> unshift
// remove first --> shift

// In Java , we follow classical oops
// class --> architecture --> blueprint
// object --> actual house --> instance

// In JS --> it is optional
// classical oops
// class Avenger{
//     constructor(name , lastName , age){
//         this.name = name;
//         this.lastName = lastName;
//         this.age = age;
//     }
// }

// let cap = new Avenger();

// Object is a key- value pair --> Prototypal OOPs

let obj = {
    name: "Steve",
    lastName: "Rogers",
    age: 35,
    isAvenger: true,
    movies: ["civil war", "first avengers", "Avengers"],
    address: {
        city: "Manhatten",
        state: "new York"
    },

    sayHi: function () {
        console.log("cap says Hi");
        return "cap sends blessings";
    }
}

// get using . operator
// console.log(obj);
// console.log(obj.isAvenger);
// console.log(obj.address.city);
// console.log(obj.movies[1]);
// console.log(obj.sayHi);
// console.log(obj.sayHi());

// get using [] operator
// let prop = "age";
// console.log(obj[prop]);
// console.log(obj["age"]);
// console.log(obj.abc);

// let outer = "address";
// let inner = "city";

// console.log(obj[outer][inner]);

// Loop
// for(let key in obj){
//     console.log("Key " , key , "Value " , obj[key]);
//     console.log("Key " , key , "Value " , obj.key);
// }

// Set, Update and delete
obj.friends = ["tony" , "bruce" , "peter"];
obj.isAvenger = false;
delete obj.movies;

console.log(obj);