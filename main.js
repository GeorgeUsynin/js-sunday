const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

//1
// sm.onclick = () => alert('yo')
//sm.onclick = null

// const alertFn = ()=> alert('hi')
//
// sm.addEventListener('click', alertFn)
//
// sm.removeEventListener('click', alertFn)

//2


// sm.onclick = (e) => e.stopPropagation()


//
//
// md.onclick = (e) => {
//
//     if (e.target.id === 'medium'){
//         console.log(e.currentTarget.id)
//         alert('hellllo')
//     }
// }


//e.target - элемент, который сгенерировал событие (первый получил клик)

//e.currentTarget - элемент, который вызвал обработчик в процессе всплытия события


// bg.onclick = (e) => {
//     if (e.target.id === 'big') {
//         alert('Yo')
//     }
// }

// md.onclick = (e) => e.stopPropagation()

//
// function bald(x) {
//     const newStr = [...x]
//     const newArr = []
//     let lastArray = []
//     let counter = 0;
//     let name = null;
//     for (let i = 0; i < newStr.length; i++) {
//         if (newStr[i] === '/') {
//             counter++
//             newStr[i] = '-'
//         }
//     }
//     if (counter === 0) {
//         name = 'Clean!'
//     } else if (counter === 1) {
//         name = 'Unicorn!'
//     } else if (counter === 2) {
//         name = 'Homer!'
//     } else if (counter >= 3 && counter <= 5) {
//         name = 'Careless!'
//     } else if (counter > 5) {
//         name = 'Hobo!'
//     }
//
//    return lastArray = [newStr.join(''), name]
//
// }
//
// bald('--/--/---/-/---')
//
//
// let xxx = '--/--/---/-/---'
//
// console.log(xxx.replaceAll('/','-'))

//
// const object = {
//     title: 'hello',
//     age: 2,
//     isOld: true
// }
//
// const {title: t, age, isOld} = object
//
// console.log(t)

// confirm('hello')

// const todolistID_1 = '321-fsd'
// const todolistID_2 = '321-fff'
//
//
// const todolists = [
//     {
//         id: todolistID_1,
//         title: 'What to do',
//         filter: 'all',
//     },
//     {
//         id: todolistID_2,
//         title: 'What to buy',
//         filter: 'all',
//     }
// ]
//
// const tasks = {
//     [todolistID_1]: [
//         {id: '543-gdf', title: 'beer', isDone: false},
//         {id: '543-gdf', title: 'beer', isDone: false},
//         {id: '543-gdf', title: 'beer', isDone: false},
//         {id: '543-gdf', title: 'beer', isDone: false}
//     ],
//     [todolistID_2]: [
//         {id: '543-gdf', title: 'beer', isDone: false},
//         {id: '543-gdf', title: 'beer', isDone: false},
//         {id: '543-gdf', title: 'beer', isDone: false},
//         {id: '543-gdf', title: 'beer', isDone: false}
//     ]
// }
//
// tasks[todolists[0].id][0]
//
// const numbers = [23, 45, 35, 78, 56, 98][9, 7, 9, 8, 9, 9, 1, 0, 0, 1, 0, 1, 1, 0, 2]
//
// const sum = numbers.reduce((acc, el) => acc + el)
//
// console.log(sum)
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
// console.log(students.reduce((acc, el) => acc + el.scores, 0))
//
// const plus100Scores = students.reduce((acc, el) => {
//    acc.push({...el, scores: el.scores + 100})
//    return acc
// },[])
//
// console.log(plus100Scores)
//
// students.reduce((acc, el)=> {
//     if (el.scores > 150){
//         acc.push(el)
//     }
//     return acc
// },[])

let arr = [777, 23, 12, 43, 32, 65, 82, 21, 0, 99]

let arr2 = [777, 23, 12, 43, 32, 65, 82, 21, 0, 99]
console.log(Math.max(...arr))

const len = arr.length - 1

let i, j;

for (i = 0; i < len; i++) {
    let isSorted = true
    for (j = 0; j < len - i; j++) {
        if (arr[j] > arr[j + 1]) {
            isSorted = false;
            // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
    if (isSorted) {
        break
    }
}

console.log(arr)

//array sort

const names = ["Bob", "Alex", "Ramzan", "Donald", "duck", "990", "Игорь"]

console.log(names.sort())

const numbers = [100, 90, 1000, 2, 2]

console.log(numbers.sort((a, b) => a - b))

function compareFn(a, b) {
    if (a > b) {
        return 1 // change
    } else {
        return -1 // not-change
    }
}

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

console.log(students.sort(compareStudents))


function compareStudents(a, b) {
    if (a.age > b.age) {
        return 1 // change
    } else {
        return -1 // not-change
    }
}


let string = "The quick brown fox jumps over the lazy dog"

function filterLongWords(sentence, n) {
    return sentence.split(' ').filter(el => el.length > n)
}

let str = 'abcdef'

let total1 = [...str].map(el => el.charCodeAt(0)).join('').split('').map(el => parseInt(el))

let total2 = total1.map(el => el === 7 ? el = 1 : el)

let sum1 = total1.reduce((acc, el) => acc + el)

let sum2 = total2.reduce((acc, el) => acc + el)


console.log(sum1 - sum2)


const array = [12, 5, 67, 55, 100, 65, 500, 24, 89, 47]

//console.log(array.sort((a, b) => a - b))
for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
        }
    }
}
console.log(array)