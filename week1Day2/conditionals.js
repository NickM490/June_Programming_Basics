
// Flashlight Example

// Parameters?

var x = 5

function addNums() {
    var x = 5
    var y = 7
    sum = x + y
    console.log(sum)
}

addNums()



// Conditionals

// if this meets this expectation then do this, if it doesn't meet this expectation then do that

// Like a decision tree


function toggleFlashlight(flashlight) {

    // This is checking to see if the flashlight is on or TRUE
    if (flashlight.isOn == true) {
        // Sets the flashlight.isOn to FALSE
        flashlight.isOn = false;
    }

    // Checks to see if it doesnt meet condition
    else

    {
        flashlight.isOn = true;
    }

    console.log("Hello Flashlight")

}