var inputNumOne = document.getElementById("num-one");
var inputNumTwo = document.getElementById("num-two");
var textAddSum = document.getElementById("add-sum");
inputNumOne.addEventListener("input", add)
inputNumTwo.addEventListener("input", add)

function add(){
    var numOne = parseFloat(inputNumOne.value) || 0;
    var numTwo = parseFloat(inputNumTwo.value) || 0;
    textAddSum.innerHTML = numOne + numTwo;
}