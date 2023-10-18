let books = [
    {
        title: 'Eloquent Javascript',
        price: 16.00,
        inventory: 5
    },
    {
        title: 'JavaScript: The Good Parts',
        price: 10.50,
        inventory: 10
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
//
// const reducer = (accumulator, item) => {
//     console.log(accumulator, item)
//     let total = item.price * item.inventory
//     return accumulator+=total
// }

// const reducer = (accumulator, item) => {
//     console.log(accumulator, item)
//     return accumulator +", " + item.title
// }

const reducer = (accumulator, item) => {
    console.log(accumulator, item)
    let total = item.inventory
    return accumulator += item.inventory
}

// Reduce is sunique from map and find as it can take a second value
let total = books.reduce(reducer,0)