
function algoritmo(valor1, valor2){
    
    if (valor1 == valor2){
        return valor1 + valor2
   }
   else{
        return valor1 * valor2
   }
}

function calcular(){
    const varA = parseInt(document.getElementById('varA').value)
    const varB = parseInt(document.getElementById('varB').value)
   
    document.getElementById('resultado').value = algoritmo(varA, varB)
}

function limpar(){
    document.getElementById('varA').value = ""
    document.getElementById('varB').value = ""
    document.getElementById('resultado').value = ""
}

document.getElementById('calcular').addEventListener("click",calcular)
document.getElementById('limpar').addEventListener("click",limpar)