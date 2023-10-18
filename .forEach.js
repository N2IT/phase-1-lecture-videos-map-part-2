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

// Example of how to find and log all book titles and make titles to uppercase
// function loopThrough(inventory, foo) {
//     for (let item of inventory) {
//         foo(item)
//     }
//     debugger
// }

// function logTitle(item){
//     console.log(item.title.toUpperCase())
// }

// Like the loopThrough() above the forEach does not return a value - its logging as undefined
// books.forEach(logTitle);

//OR

// books.forEach(function(item){
//     console.log(item.title.toUpperCase())
// })

//OR

books.forEach(item => console.log(item.title.toLowerCase()))
