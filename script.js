
function display(Number){
    document.getElementById("result").value += Number;
}
function calculate() {
    var result = document.getElementById("result").value;
    var x = eval(result);
    document.getElementById("result").value = x;
}
function clearSrcr(){
    document.getElementById("result").value = "";
}
function clearScreen() {
    let result = document.getElementById("result");
    result.value = result.value.slice(0,-1);
  }













