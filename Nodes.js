// let productOfTwo = (a,b) => {
//     return a+b;
// }
// console.log(productOfTwo(4,8))
// let student = {
//     'Name1':'Kiran',
//     'Name2':'Rahul',
//     'Name3':'Ramesh'
// }

// const obj1 = {'key1': 1}
// const obj2 = { ...obj1}
// if(obj2 === obj1){
// console.log('same objects')
// }
// else{
// console.log('different objects')
// }
// console.log(obj1)
// console.log(obj2)

// const obj1 = {'key1': 1 , 'key2' : 2}
// const obj2 = { ...obj1, key1: 1000}
// console.log(obj1)
// console.log(obj2)
//**********************************///Array Map functions///******************************************************* */ 
// let arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']

// let obj = ['kirna','agiwale',...arr,'age=24']
// console.log(obj)

// arr.map(ele => console.log(ele))
// console.log(arr.map(ele => {if(ele === ' ') {return 'empty string'} return ele}))
// for(let ele of arr) {
//     if(ele === ' ') {
//         ele = 'empty string'
//     }
//     console.log(ele)
// }
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] === ' ') {
//         arr[i] = 'empty string'
//     }
// }

// console.log(arr.map(ele => {
//     if(ele === ' ') {
//         ele = 'empty string'
//     }
//     return ele
// }))

//************************************************************************************************************* */ 
// const person = {
//     name: 'Kiran',
//     age: 24,
//     greet() {
//         console.log('Hello World')
//     }
// }
// **************************///Print a b c d e in sequenc using Promises******************************************** */ 
// const printName = (personData) => {
//     console.log(personData.age)
// }
// printName(person)
// console.log('a');
// console.log('b');
// new Promise((resolve, reject) => {
//     setTimeout(() => resolve('c'),3000)
// }).then(num => {
//     console.log(num)
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve('d'),0)
//     }).then(num => {
//         console.log(num);
//         console.log('e')
//     })
// })
//************************************************************************************************************ */ 


const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    console.log('Kiran')
});

server.listen(4000);







