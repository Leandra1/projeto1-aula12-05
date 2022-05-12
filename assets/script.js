
var num1
var num2
function numbers(number){

    var num = document.getElementById('print').innerHTML

    var aux = document.getElementById('print').innerHTML= num+number

    document.getElementById('print').innerHTML = aux

    num1 = parseInt(aux)

   
}


function operacao(op){

    document.getElementById('print').innerHTML= num1 + ' + '
    //num2 = document.getElementById('print').innerHTML.split()
    //ver a questão do segundo numero da operação usando o split e ver como usar split pelo link do slide de js do gsa
}