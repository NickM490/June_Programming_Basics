
// Array of ints
var myArray = [1, 2, 3, 4, 5]



// Array of strings
var anotherArray = ["Geralt", "Ciri", "Yennefer", "Triss", "Vesemir"]


function sayName(value) {
    // Logic to add value to the end of the array
    console.log(value)
}

// sayName("Geralt")


//Array 1
var produceList = ["apples", "oranges", "jalepenos"];

// Add "mangos" to the end of the array
produceList.push("mangos");
produceList.push("bananas");
console.log(produceList);

// Remove the last element in the array
produceList.pop()
produceList.pop()

console.log(produceList);

//  "Takis"
produceList[0] = "Takis"
produceList[1] = "Cream Cheese"
produceList[2] = "More Jalepenos"
produceList[3] = "Testing adding more items"
produceList[4] = "Testing for 5"

console.log(produceList);

console.log(produceList.length);
console.log(produceList[1])
console.log(produceList[2])
console.log(produceList[3])


for(var i =0; i < produceList.length; i++){
    console.log(i)
    console.log(produceList[i])
}



//Array 2
var accountBalances = [5000, 10, 2500];


//Array 3
var auntsContact = ["Jayne", "Smithe", "123 Main Street", "Springfield", "MO", 12345];

for(var i = 0; i < auntsContact.length; i++){
    console.log("The variable i is: " + i)
    console.log("The value of the index position of i in the array is " + auntsContact[i])
    console.log("==========================================================")
    console.log("==========================================================")
}


// console.log(auntsContact[3])

var thisArray = []
for( var i = 1; i <= 10 ; i++) {
    thisArray.push(i)
}
console.log(thisArray)


function addNumsToArray(num) {
    var thisArray = []

    for( var i = 1; i <= num ; i++) {
        thisArray.push(i)
    }
    console.log(thisArray)
}

addNumsToArray(100)

