//Combine two objects with common properities for given two arrays of objects

const students = [
    { studentId: 1, name: 'Mohammad' },
    { studentId: 2, name: 'Ahmad' },
    { studentId: 3, name: 'Amin' }
];

const marks = [
    { studentId: 1, mark: 100 },
    { studentId: 2, mark: 80 },
    { studentId: 3, mark: 70 }
];

let lookReduceMap = marks.reduce(function (result, current) {
    result[current.studentId] = current.mark
    return result
}, {})

console.log(lookReduceMap)

let newArray = students.map(function (element) {
    let mark = lookReduceMap[element.studentId]
    return { ...element, mark }
})

console.log(newArray)




