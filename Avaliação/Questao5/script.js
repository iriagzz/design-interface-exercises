

function media(valor1, valor2, valor3){
    const resultado = (valor1 + valor2 + valor3)/3
    return resultado
}

function situacaoFinal(valor){
    if (valor >= 8){
        return "APROVADO"
    } else{
        return "REPROVADO"
    }
}

function checarValor(valor){
    if( valor > 10 || valor < 0){
        alert('Número Inválido. O número tem que ser menor que 10 e maior que 0')
        return "erro"
    } else{
        return valor
    }
}

function calcular(){
    const aluno = document.getElementById('aluno').value
    const nota1 = checarValor(parseFloat(document.getElementById('nota1').value))
    const nota2 = checarValor(parseFloat(document.getElementById('nota2').value))
    const nota3 = checarValor(parseFloat(document.getElementById('nota3').value))

    if(nota1 == "erro" || nota2 == "erro" || nota3=="erro"){
        limpar()
        alert("A operação não pode ser concluída. Insira valores válidos.")
    }else{
        const mediaFinal =  media(nota1, nota2, nota3)
        document.getElementById('nome').value = aluno
        document.getElementById('resultado').value = mediaFinal.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits:2 })
        document.getElementById('situacao').value = situacaoFinal(mediaFinal)
    }   
}

function limpar(){
    document.getElementById('aluno').value = ""
    document.getElementById('nota1').value = ""
    document.getElementById('nota2').value = ""
    document.getElementById('nota3').value = ""
    document.getElementById('nome').value = ""
    document.getElementById('resultado').value = ""
    document.getElementById('situacao').value = ""
}

document.getElementById('calcular').addEventListener("click",calcular)
document.getElementById('limpar').addEventListener("click",limpar)
