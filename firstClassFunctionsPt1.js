const loopThroughArray = function(array) {
    for(let item of array) {
        console.log(item)
    }
}

const capitalizeArray = function(array){
    let newArray = []
    for(let item of array) {
        newArray.push(item.toUpperCase())
    }
    console.log(newArray)
}

function handleBooks(fun) {
    let books = ['Eloquent Javascript', 'JavaScript: The Good Parts', 'Learn JavaScript VISUALLY', 'You don\'t know js', 'JavaScrip: The Definitive Guide']
    
    fun(books)
    //looThroughArray(books)
}

handleBooks(loopThroughArray)
handleBooks(capitalizeArray)

// Here's what is happneing:
// function handleBooks is invoked with the argument of function loopThroughArray
//Its as if we invoked loopThroughArray with the argument of books - loopThroughArray(books)
//books was passed to fun
//fun equals the argument loopThroughArray
//loopThroughArray is defined at the top within const loopThroughArray
//Essentially handleBooks is running like this -> handleBooks(loopThroughArray(books))


