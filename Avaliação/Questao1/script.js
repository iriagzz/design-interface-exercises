
function media(valor1, valor2, valor3){
    const resultado = (valor1 + valor2 + valor3)/3
    return resultado
}

function calcular(){
    const num1 = parseFloat(document.getElementById('numero1').value)
    const num2 = parseFloat(document.getElementById('numero2').value)
    const num3 = parseFloat(document.getElementById('numero3').value)

    document.getElementById('resultado').value = media(num1, num2, num3).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits:2 })
}

function limpar(){
    document.getElementById('numero1').value = ""
    document.getElementById('numero2').value = ""
    document.getElementById('numero3').value = ""
    document.getElementById('resultado').value = ""
}

document.getElementById('calcular').addEventListener("click",calcular)
document.getElementById('limpar').addEventListener("click",limpar)
