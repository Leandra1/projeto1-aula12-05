
function numbers(number){

    var num = document.getElementById('print').innerHTML

    var aux = document.getElementById('print').innerHTML= num+number

}

function back(){

    document.getElementById('print').innerHTML= " "

}


function resultado(){

    var result = document.getElementById('print').innerHTML
    document.getElementById('print').innerHTML =  eval(result)
}
