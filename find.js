//function to find a specific book
//if found in books array it will return 
//else will return 'no does not exist'

//Will loop through our inventory
//Will find 1st object whose condition returns 'true' based on a callback
//finder as the second parameter becomes the callback function when loopThroughAndFind is invoked with argments (books, stiockFirst)
// function loopThroughAndFind(inventory, finder){
//     let result = null;
//     // null and undefined are different - null = absolutely no value
//     for(item of inventory) {
//         if(finder(item) === true) {
//             result = item
//             break //to end a loop
//         }
//     }
//     return result
// }

//Find() is another higher order function that can be used in place of the function above
// let foundItem = books.find(stockFirst)
//     console.log(foundItem);

//OR

// let foundItem = books.find(function(book){
//     return book.title === 'JavaScript: The Definitive Guide';
// })

//OR

let foundItem = books.find(book => book.title === 'JavaScript: The Definitive Guide')

//will find a given book
function isBook(book){
    return book.title === 'JavaScript: The Definitive Guide';
}

//Will find first book that needs to be restocked
function stockFirst(item){
    return item.inventory < 3
}

