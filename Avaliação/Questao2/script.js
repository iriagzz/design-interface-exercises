
function calcularSalario(){
    const salario = parseFloat(document.getElementById('salario').value)
    resultado = salario * 1.10
    document.getElementById('resultado').value =  resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
}

function limpar(){
    document.getElementById('nome').value = ""
    document.getElementById('salario').value = ""
    document.getElementById('resultado').value = ""
}
document.getElementById('calcular').addEventListener("click",calcularSalario)
document.getElementById('limpar').addEventListener("click",limpar)