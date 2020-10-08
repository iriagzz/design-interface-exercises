
function calculoVenda(valor1, valor2){   
    if (valor2 == "3x"){
        return (valor1 * 1.1)
   }
   else if (valor2 == "5x"){
        return (valor1 * 1.2)
   }else{
    alert('Escolha a quantidade de parcelas')
   }
}

function calculoParcela(valor1, valor2){
    if (valor2 == "3x"){
        return (calculoVenda(valor1, valor2)/3)
   }
   else if (valor2 == "5x"){
        return (calculoVenda(valor1, valor2)/5)
   }
}

function calcular(){
    const select = document.getElementById('selecao')
    const parcela = select.options[select.selectedIndex].value

    const produto = parseFloat(document.getElementById('produto').value)

    document.getElementById('venda').value = calculoVenda(produto, parcela).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
    document.getElementById('resultado').value = calculoParcela(produto, parcela).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })

}

function limpar(){
    document.getElementById('produto').value = ""
    document.getElementById('venda').value = ""
    document.getElementById('resultado').value = ""
    document.getElementById('selecao').value = "parcelas"
}

