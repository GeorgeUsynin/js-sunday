// const test = () => "test"
//
// let students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
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
//     }, {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ];
//
//
// //const mappedStudents = students.map(func)
//
// //customMap
//
// function customMap(array, func) {
//     const newArray = []
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(func(array[i]))
//     }
//
//     return newArray
// }
//
// function addScore(student) {
//     return {...student, scores: student.scores + 10}
// }
//
// console.log(customMap(students, addScore))
//
//
// const getName = st => st.name
//
// console.log(customMap(students, getName))
//
// //customFilter
//
// function customFilter(array, func) {
//     const newArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (func(array[i]) === true) {
//             newArray.push(array[i])
//         }
//     }
//
//     return newArray
// }
//
//
// console.log(customFilter(students, st => st.isMarried))
//
// // find
// function customFind(array, func) {
//     for (let i = 0; i < array.length; i++) {
//         if (func(array[i]) === true) {
//             return array[i]
//         }
//     }
// }
//
// const findBob = st => st.name === "Bob"
//
// console.log(customFind(students, findBob))
//
//
// const newArrayStudentsMoreTwenty = students.filter(st=>st.age>20)
//
// console.log(newArrayStudentsMoreTwenty)
//
//
// const newSt = students.map(st=>{
//     return {...st, age: st.age - 1}
// })
//
// console.log(newSt)