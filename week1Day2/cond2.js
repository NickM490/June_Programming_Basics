

function checkThing(thing) {
    if(!thing) {
        console.log("The thing is not defined")
    }
}



function checkNum(num, num2, num3) {

    if (num == 5) {
        console.log("The number is 5")
        if (num2 == 7) {
            console.log("Found a seven")
            if(num3 == 9) {
                console.log("Found a nine")
            }
        }
        // ! = NOT or false or not true
        else if(num2 != 7) {
            console.log("The number is not 7")
        }

        }
    }

    else if (num == 7) {
        console.log("The number is 7")
    }

    else {
        console.log("The number is not 5 or 7, it be something else")
    }

}

function checkNumForTwo(num) {

    // if the num is 5 OR ht enum is 7
    if (num == 5 || num == 7) {
        console.log("The number is 5")
    }
    // if the num is 5 AND the num is 7
    if (num > 5 && num < 7) {
        console.log("The number must be 6 luls")
    }

    else {
        console.log("The number is not 5 or 7, it be something else")
    }

}