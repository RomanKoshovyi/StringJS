let
    str,
    input = document.getElementById("input"),
    output = document.getElementById("output");

function Clear(){
    input.value = "";
    output.innerHTML = "";
}

function Run(){
    output.innerHTML = "";
    str = new String(input.value);
    for(let i = 0; i < str.length; i+=2){
        str = str.substr(0, i) + ' ' + str.substr(i, str.length);
    }
    output.innerHTML = str;
}