// Mutation vs Immutability

// Immutability =>
// Mutability =>

const user = {name:"bob"}

const someArr = [1,2,3,4, user]
const someOtherArr = someArr
const someOtherOtherArr = [...someArr]

someArr[4].name = "Robert"
someOtherArr.push(5)


console.log(someArr, someOtherArr, someOtherOtherArr)