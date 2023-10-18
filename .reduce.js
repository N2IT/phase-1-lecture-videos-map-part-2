let books = [
    {
        title: 'Eloquent Javascript',
        price: 16.00,
        inventory: 5
    },
    {
        title: 'JavaScript: The Good Parts',
        price: 10.50,
        inventory: 30
    },
    {
        title: 'Learn JavaScript VISUALLY',
        price: 25.00,
        inventory: 2
    },
    {
        title: 'You don\'t know js',
        price: 60.00,
        inventory: 8
    },
    {
        title: 'JavaScript: The Definitive Guide',
        price: '18.95',
        inventory: 0
    }
]

//REduce will allo us to produce a single value of some kind

//this is totaling $ value of inventory
// const reducer = (accumulator, item) => {
//     console.log(accumulator, item)
//     let total = item.price * item.inventory
//     return accumulator+=total
// }

// let total = books.reduce(reducer,0)

//This is concatenating strings; titles of the books
// const reducer = (accumulator, item) => {
//     console.log(accumulator, item)
//     return accumulator +", " + item.title
// }

// let total = books.reduce(reducer,'').substring(2)

// THis is mine: totaling inventory numbers
const reducer = (accumulator, item) => {
    console.log(accumulator, item)
    let total = item.inventory
    return accumulator += item.inventory
}
let total = books.reduce(reducer,0)