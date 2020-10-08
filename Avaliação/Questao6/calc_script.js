function calcular(){
    const num1 = parseFloat(document.getElementById('numero1').value)
    const num2 = parseFloat(document.getElementById('numero2').value)
    
    const select = document.getElementById('codigo')
    const varCodigo = select.options[select.selectedIndex].value

    switch(varCodigo){
        case "somar":
            document.getElementById('resultado').value = somar(num1, num2).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits:2 })
            break
        case "multiplicar":
            document.getElementById('resultado').value = multiplicar(num1, num2).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits:2 })
            break
        case "dividir":
            document.getElementById('resultado').value = dividir(num1, num2).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits:2 })
            break
        default:
            alert("Verifique se todos os campos foram preenchidos")

    }
}

function somar(valor1, valor2){
    return (valor1 + valor2)
}

function multiplicar(valor1, valor2){
    return (valor1 * valor2)
}

function dividir(valor1, valor2){
    return (valor1 / valor2)
}

function limpar(){
    document.getElementById('numero1').value = ""
    document.getElementById('numero2').value = ""
    document.getElementById('codigo').value = "inicio"
    document.getElementById('resultado').value = ""
}

document.getElementById('calcular').addEventListener("click",calcular)
document.getElementById('limpar').addEventListener("click",limpar)