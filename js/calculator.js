function insert(number) {
    var number_y = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML =  number_y + number
}

function clean() {
    document.getElementById('result').innerHTML = ""
}

function del() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

function calculate() {
    var result = document.getElementById('result').innerHTML
    result ? 
        document.getElementById('result').innerHTML = eval(result) : 
        document.getElementById('result').innerHTML = ""
}