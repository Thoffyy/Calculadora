function adicao() {

    var num1 = parseInt(document.getElementById("input1").value);

    var num2 = parseInt(document.getElementById("input2").value);

  

    document.getElementById("resultado").innerHTML = num1 + num2;

}

function subracao() {

    var num1 = parseInt(document.getElementById("input1").value);

    var num2 = parseInt(document.getElementById("input2").value);

  

    document.getElementById("resultado").innerHTML = subConta(num1, num2);

}


function multiplicao() {

    pegaValoresInput();

    document.getElementById("resultado").innerHTML = num1 * num2;

}


function divisao() {

    pegaValoresInput();

    document.getElementById("resultado").innerHTML = num1 / num2;

}

