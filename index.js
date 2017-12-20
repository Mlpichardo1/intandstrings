// console.log("linked");

document.getElementById("submit").onclick = function() {
    // take the number from the text field and display them in the display area
    var input = document.getElementById("input").value;
    console.log(input);
    document.getElementById("display").innerHTML += input;
    document.getElementById("input").value = "";
}

document.getElementById("addDigits").onclick = function(){
    // get the sum from the digits display field
    var display = document.getElementById("display").innerHTML;
    var runningTotal = 0;
    for (var i = 0; i < display.length; i++) {
        // console.log(display[i]);
        runningTotal = runningTotal + parseInt(display[i]);
    }
    console.log(runningTotal);
    document.getElementById("display").innerHTML = runningTotal;
}
