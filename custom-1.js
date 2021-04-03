// //copy
//
//
// const student = {
//     name: "Bob",
//     age: 23,
//     friends: ["Alex", "Helen", "Donald"]
// }
//
// const studentPlus = {
//     name: "Bob",
//     age: 23,
//     friends: ["Alex", "Helen", "Donald"]
// }
//
// const studentPlusPlus = {...studentPlus, eyes: "blue", friends: [...studentPlus.friends]}
//
//
// studentPlusPlus.friends[0] = "Peter"
//
//
// console.log(studentPlusPlus)
//
//
// console.log(studentPlus)
//
//
// console.log(student === studentPlus)
//
// const studentSuper = student;
//
// const copyStudent = {...student} // поверхностное копирование
//
//
// copyStudent.friends.push("Mary")
//
// console.log(student)
//
// const deepCopyStudent = {...student, friends: [...student.friends]} // глубокое копирование
//
//
// console.log(deepCopyStudent)
// console.log(deepCopyStudent === student) // false
//
// console.log(deepCopyStudent.friends === student.friends) //false
//
// const array = [
//     {id: 1, name: "yes"},
//     {id: 2, name: "no"},
// ]
//
// const array2 = array;
//
// console.log(array2 === array)
//
// const copyArray = [...array];
//
// console.log(copyArray === array)
//
//
// function myFn(num) {
//     function log() {
//         console.log(num)
//     }
//
//     return [num, log]
// }
//
// const [number, logFunction] = myFn(3);
//
// // map
//
//
// const students = [
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ];
//
// const namesStudents = students.map(st => `Hello friend ${st.name}`)
//
// console.log(namesStudents)
//
// //глубокая копия через map
//
// const copySt = students.map(st => ({...st}))
//
// console.log(copySt);
//
// console.log(copySt[0] === students[0])
//
//
//
// //filter
//
// const cars = [
//     {id: 1, model: "Opel", typeEngine: "Benzin", maxSpeed: 300, year: 1990},
//     {id: 2, model: "Mazda", typeEngine: "Dizel", maxSpeed: 240, year: 2003 },
//     {id: 3, model: "Citroen", typeEngine: "Benzin", maxSpeed: 200, year: 2012 }
// ]
//
// const freshCars = cars.filter(car => car.year > 2000 && car.typeEngine === "Benzin");
//
// console.log(freshCars);
//
// const onlyModelsOfCars = cars.map(car => car.model)
//
// console.log(onlyModelsOfCars)
//
// const onlyIDOfCars = cars.map(car => car.id)
// console.log(Math.max(...onlyIDOfCars))
//
// const a =12;
//
// const b = a;
// b = 4;


// let arr = [1, 2, 3];
// let sum = 0;
// let average = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     average = sum / arr.length
// }
// debugger
// console.log(average)

//
//
// let a = '2';
//
// let b = +a;
//
// console.log(typeof b)
// console.log(typeof a)
//
// let man = {
//     name: "George",
//     age: 25
// }
//
// const {name, age} = man;
//
// console.log(name)

// let a = Math.sqrt()
//
// let user = {}
//
//
// for (let i = 0; i<20; i++){
//     user[i] = "hello"
// }
//
// console.log(user)
//
// delete user[10+2]
//
// console.log(user)
//
//
// const array = [{name: 2, log: 3}, {name: 2, log: 1}, {name: 2, log: 4}, {name: 2, log: 8}]
//
// const element = array.find(el=> el.log === 1 )
//
// console.log(element)

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7]

const sum = arrayOfNumbers.reduce((acc, el) => acc + el, 0)
console.log(sum)

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    }, {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
