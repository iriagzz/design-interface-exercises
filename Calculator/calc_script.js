alert('Bem-vindo à Calculadora!')

function calcular(){
    var num1 = parseFloat(document.getElementById('numero1').value)
    var num2 = parseFloat(document.getElementById('numero2').value)
    
    var select = document.getElementById('operacao')
    var operacao = select.options[select.selectedIndex].value

    switch (operacao){
        case "somar":
            resultado = num1 + num2
            document.getElementById('resultado').value = resultado
            break
        case "subtrair":
            resultado = num1 - num2
            document.getElementById('resultado').value = resultado
            break
        case "multiplicar":
            resultado = num1 * num2
            document.getElementById('resultado').value = resultado
            break
        case "dividir":
            resultado = num1 / num2
            document.getElementById('resultado').value = resultado
            break

        default:
            alert('Insira os valores que deseja calcular ou escolha a operação!')
            break
    }
}

function limpar(){
    document.getElementById('numero1').value = ""
    document.getElementById('numero2').value = ""
    document.getElementById('operacao').value = "inicio"
    document.getElementById('resultado').value = ""
}

