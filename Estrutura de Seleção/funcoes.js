function exe1(){

    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    
    // Processamento
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    let resultado
    if (media > 7)
        resultado = `Aluno aprovado, com nota ${media}`
        else resultado = `Aluno reprovado, com nota ${media}`

    // Saída
    document.getElementById("resultado").innerHTML = `O resultado é = ${resultado}`
}

function exe2(){

    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    
    // Processamento
    let media = (nota1 + nota2) / 2
    let resultado
    
    if ((media >=0) && (media < 3)){

        resultado = `Aluno reprovado com média ${media}.`

    }
    else if ((media >= 3) && (media < 7)){

        resultado = `Aluno em exame com média ${media}.`

    }
    else if ((media >= 7 ) && (media <= 10)){

        resultado = `Aluno aprovado com média ${media}.`

    }
    else {

        resultado = `Notas informadas são inválidas!`

    }
    // Saída
    document.getElementById("resultado").innerHTML = resultado
}

function exe3(){

    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value) 

    // Processamento
    if (numero1 < numero2){
        resultado = numero1}
    else if (numero2 < numero1){
        resultado = numero2}
    else resultado = "Não existe! Os números são iguais."
    // Saída
    document.getElementById("resultado").innerHTML = `O menor número = ${resultado}`
}

function exe4(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let numero3 = Number(document.getElementById("numero3").value)

    if ((numero1 > numero2) && (numero1 > numero3)){

        resultado = numero1

    }
    else if ((numero2 == numero1) && (numero1 == numero3)){

        resultado = "Todos os números são iguais"

    }
    else if ((numero2 > numero1) && (numero2 > numero3)){

        resultado = numero2

    }
    else {

        resultado = numero3

    }

    // Saída
    document.getElementById("resultado").innerHTML = `O maior número = ${resultado}.`
}

function exe5(){
    // entrada de dados
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let opcao = Number(document.getElementById("opcao").value)
    // processamento
    let resultado
    switch(opcao){
        case 1: resultado = (numero1 + numero2) / 2
               break
        case 2: if (numero1 >= numero2){
                    resultado = numero1 - numero2
                }
                else {
                    resultado = numero2 - numero1
                }
                break
        case 3: resultado = (numero1 * numero2)
                break
        case 4: if (numero2 != 0){
                    resultado = numero1 / numero2
                }
                else {
                    resultado = "Divisão por zero"
                }
                break
        default: resultado = "opção inválida"
    }
    document.getElementById("resultado").innerHTML = resultado
}

function exe6(){
    // entrada de dados
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let opcao = Number(document.getElementById("opcao").value)
    // processamento
    let resultado
    switch(opcao){
        case 1: resultado = `Exponenciação ${Math.pow(numero1, numero2)}`
               break
        case 2: resultado = `Raiz quadrada ${Math.sqrt(numero1)} & ${Math.sqrt(numero2)}`
                break
        case 3: resultado = `Raiz cúbica ${Math.cbrt(numero1)} & ${Math.cbrt(numero2)}`
                break
        default: resultado = "opção inválida"
    }
    document.getElementById("resultado").innerHTML = resultado
}

function exe7(){
    // entrada de dados
    let salario = Number(document.getElementById("salario").value)
    let aumento = 0
   if (salario < 500){
       aumento = (salario * 30) / 100
   }
   else if (aumento == 0){
       document.getElementById("resultado").innerHTML = `Não houve aumento`
   }
   else {
       document.getElementById("resultado").innerHTML = `Aumento ${aumento} e salário reajustado: ${salario + aumento}`
   }
}

function exe8(){
    // entrada de dados
    let salario = Number(document.getElementById("salario").value)
    let aumento = 0

    if (salario <= 300)
        aumento = (salario * 35) / 100
        else aumento = (salario * 15) / 100
    document.getElementById("resultado").innerHTML = `Aumento ${aumento} e salário reajustado: ${salario + aumento}`
}

function exe9(){
    // entrada de dados
    let saldoMedio = Number(document.getElementById("saldoMedio").value)
    // 
    let aumento = 0

    if (saldoMedio >= 400){

        aumento = (saldoMedio * 30) / 100

    }
    else if ((saldoMedio <= 400) && (saldoMedio >= 300)){

        aumento = (saldoMedio * 25) / 100

    }
    else if ((saldoMedio <= 300) && (saldoMedio >= 200)){

        aumento = (saldoMedio * 20) / 100

    }
    else {

        aumento = (saldoMedio * 10) / 100

    }
    document.getElementById("resultado").innerHTML = `Valor do crédito ${aumento} e saldo Médio: ${saldoMedio + aumento}`
}

function exe10(){
    // Acima de R$12.000,00 = 5% do distribuidor & isento de impostos.
    // Entre R$12.000,00 e R$25.000,00 = 10% do distribuidor & 15% de impostos.
    // Acima de R$25.000,00 = 15% do distribuidor & 20% de impostos.
    let custoFabrica = Number(document.getElementById("custoFabrica").value)
    let distribuidor = 0
    let impostos = 0

    if (custoFabrica <= 12000){
        distribuidor = (custoFabrica * 5) / 100
        impostos = 0
    }
    else if ((custoFabrica > 12000) && (custoFabrica <= 25000)){
        distribuidor = (custoFabrica * 10) / 100
        impostos = (custoFabrica * 15) / 100
    }
    else {
        distribuidor = (custoFabrica * 15) / 100
        impostos = (custoFabrica * 20) / 100
    }
    document.getElementById("resultado").innerHTML = `Custo de Fábrica = R$${custoFabrica}, Distribuidor R$${distribuidor}, Impostos R$${impostos} e o valor ao consumidor final: ${custoFabrica + distribuidor + impostos}`
}

//    Até de R$300,00 = 15%.
//    De R$300,00 até R$600,00 = 10%.
//    De R$600,00 até R$900,00 = 5%.
//    Acima de R$900,00 = 0%.
function exe11(){
    // entrada de dados
    let salario = Number(document.getElementById("salario").value)
    // 
    let aumento = 0

    if (salario <= 300){

        aumento = (salario * 15) / 100

    }
    else if ((salario > 300) && (salario <= 600)){

        aumento = (salario * 10) / 100

    }
    else if ((salario > 600) && (salario <=900)){

        aumento = (salario * 5) / 100

    }
    else {

        aumento = salario

    }
    document.getElementById("resultado").innerHTML = `Valor do crédito ${aumento} e saldo Médio: ${salario + aumento}`
}

function exe12(){
    // entrada de dados
    let salarioBruto = Number(document.getElementById("salarioBruto").value)
    // 
    let gratificacao = 0
    let salario = 0
    if (salarioBruto <= 350){

        gratificacao = 100
        salario = (salarioBruto + gratificacao)
    }
    else if ((salarioBruto > 350) && (salarioBruto <= 600)){

        gratificacao = 75
        salario = (salarioBruto + gratificacao)

    }
    else if ((salarioBruto > 600) && (salarioBruto <=900)){

        gratificacao = 50
        salario = (salarioBruto + gratificacao)

    }
    else if (salarioBruto > 900){

        gratificacao = 35
        salario = (salarioBruto + gratificacao)

    }
    document.getElementById("resultado").innerHTML = `Valor da Gratificação ${gratificacao} e Salário a Receber: ${(salarioBruto + gratificacao) - (salario * 7/100)}`
}

function exe13(){
    let precoProduto = Number(document.getElementById("precoProduto").value)
    let novoPreco = 0
    let classificacao

    if (precoProduto <= 50){
        novoPreco = precoProduto + ((precoProduto * 5) / 100)
    }
    else if ((precoProduto > 50) && (precoProduto <= 100)){
        novoPreco = precoProduto + ((precoProduto * 10) / 100)
    }
    else {
        novoPreco = precoProduto + ((precoProduto * 15) / 100)
    }
    ///////////////////////////////////////////////
    if (novoPreco <= 80){

        classificacao = "Barato"

    }
    else if ((novoPreco > 80) && (novoPreco <= 120)){

        classificacao = "Normal"

    }
    else if ((novoPreco > 120) && (novoPreco <=200)){

        classificacao = "Caro"

    }
    else {

        classificacao = "Muito Caro"

    }

    document.getElementById("resultado").innerHTML = `Novo preço do Produto ${novoPreco} e Classificação: ${classificacao}`
}

function exe14(){
    // entrada de dados
    let salario = Number(document.getElementById("salario").value)
    // 
    let aumento = 0

    if (salario <= 300){

        aumento = (salario * 50) / 100

    }
    else if ((salario > 300) && (salario <= 500)){

        aumento = (salario * 40) / 100

    }
    else if ((salario > 500) && (salario <= 700)){

        aumento = (salario * 30) / 100

    }
    else if ((salario > 700) && (salario <=800)){

        aumento = (salario * 20) / 100

    }
    else if ((salario > 800) && (salario <=1000)){

        aumento = (salario * 10) / 100

    }
    else {

        aumento = (salario * 5) / 100

    }
    document.getElementById("resultado").innerHTML = `Valor do aumento é de R$${aumento} e o novo Salário R$${salario + aumento}`
}

function exe15(){
    // entrada de dados
    let investimento = Number(document.getElementById("investimento").value)
    let opcao = Number(document.getElementById("opcao").value)
    let resultado
    switch(opcao){
        case 1: resultado = investimento + ((investimento * 3)/100)
               break
        case 2: resultado = investimento + ((investimento * 4)/100)
                break
        default: resultado = "opção inválida"
    }
    document.getElementById("resultado").innerHTML = resultado
}

function exe16(){
    // entrada de dados
    let valorProduto = Number(document.getElementById("valorProduto").value)
    let desconto = 0
    let resultado
   if (valorProduto < 30){
       desconto = 0
       resultado = valorProduto - desconto
   }
   else if ((valorProduto > 30) && (valorProduto <= 100)){
        desconto = ((valorProduto * 10)/100)
        resultado = valorProduto - desconto
   }
   else {
    desconto = ((valorProduto * 15)/100)
    resultado = valorProduto - desconto
   }
   document.getElementById("resultado").innerHTML = `Valor do Produto = R$${valorProduto}, valor do Desconto = R$${desconto} e o novo valor = R$${resultado}`
}

function exe17(){
    // entrada de dados
    let senha = Number(document.getElementById("senha").value)
    let resultado
   if (senha == 4531){
       resultado = "Senha correta!"
   }
   else {
    resultado = "Senha incorreta!"
   }
   document.getElementById("resultado").innerHTML = `${resultado}`
}

function exe18(){
    // entrada de dados
    let idade = Number(document.getElementById("idade").value)
    let resultado
   if (idade >= 18){
       resultado = "Maioridade"
   }
   else {
    resultado = "Menoridade"
   }
   document.getElementById("resultado").innerHTML = `${resultado}`
}

function exe19(){
    // entrada de dados
    let altura = Number(document.getElementById("altura").value)
    let opcao = Number(document.getElementById("opcao").value)
    let resultado
    switch(opcao){
        case 1: resultado = (72.7 * altura) - 58
               break
        case 2: resultado = (62.1 * altura) - 44.7
                break
        default: resultado = "opção inválida"
    }
    document.getElementById("resultado").innerHTML = `${resultado.toFixed(2)}`
}

function exe20(){
    // entrada de dados
    let idade = Number(document.getElementById("idade").value)
    // 
    let resultado

    if (idade < 5){

        resultado = "Desculpe, não há categoria para o nadador"

    }
    else if ((idade >= 5) && (idade <= 7)){

        resultado = "Categoria Infantil"

    }
    else if ((idade >= 8) && (idade <= 10)){

        resultado = "Categoria Juvenil"

    }
    else if ((idade >= 11) && (idade <=15)){

        resultado = "Categoria Adolescente"

    }
    else if ((idade >= 16) && (idade <=30)){

        resultado = "Categoria Adulto"

    }
    else {

        resultado = "Categoria Sênior"

    }
    document.getElementById("resultado").innerHTML = `${resultado}`
}

function exe21(){
    // entrada de dados
    let preco = Number(document.getElementById("preco").value)
    let codigo = Number(document.getElementById("codigo").value)

    // 
    let resultado

    if (codigo == 1){

        resultado = "Sul"

    }
    else if (codigo == 2){

        resultado = "Norte"

    }
    else if (codigo == 3){

        resultado = "Leste"

    }
    else if (codigo == 4){

        resultado = "Oeste"

    }
    else if ((codigo == 5) && (codigo == 6)){

        resultado = "Nordeste"

    }
    else if ((codigo >= 7) && (codigo <= 9)){

        resultado = "Sudeste"

    }
    else if ((codigo >= 10) && (codigo <= 20)){

        resultado = "Centro-Oeste"

    }
    else if ((codigo >= 21) && (codigo <= 30)){

        resultado = "Nordeste"

    }
    else {

        resultado = "Inválido"

    }
    document.getElementById("resultado").innerHTML = `O produto de valor R$${preco}, código = ${codigo} é proveniente da região ${resultado}`
}

function exe22(){
    let idade = Number(document.getElementById('idade').value)
                let peso = Number(document.getElementById('peso').value)
                let resultado
                if (idade < 20){
                    if (peso < 60){
                        resultado = 9    
                    }
                    else if (peso <= 90){
                        resultado = 8
                    }
                    else {
                        resultado = 7
                    }
                }
                else if (idade <= 50){
                        if (peso  < 60){
                            resultado = 6
                        }
                        else if (peso <= 90){
                            resultado = 5
                        }
                        else {
                            resultado = 4
                        }
                    } // idade > 50
                    else if (peso < 60){
                        resultado = 3
                    }
                    else if (peso <= 90 ){
                        resultado = 2
                    }
                    else {
                        resultado = 1
                    }
                // saída
                document.getElementById('resultado').innerHTML = resultado
}

function exe23(){
    // entrada de dados
    let codigo = Number(document.getElementById('codigo').value)
    let qtde = Number(document.getElementById('qtde').value)
    // preço unitário
    let precoUnitario
    if ((codigo >= 1) && (codigo <= 10)){
        precoUnitario = 10
    }
    else if ((codigo >= 11) && (codigo <= 20)){
        precoUnitario = 15
    }
    else if ((codigo >= 21) && (codigo <= 30)){
        precoUnitario = 20
    }
    else if ((codigo >= 31) && (codigo <= 40)){
        precoUnitario = 30
    }
    else {
        precoUnitario = 0 // default
    }
    // preço total
    let precoTotal = precoUnitario * qtde
    // desconto
    let desconto
    if (precoTotal < 250) {
        desconto = (precoTotal * 5) / 100
    }
    else if (precoTotal <= 500){
        desconto = (precoTotal * 10) / 100
    }
    else {
        desconto = (precoTotal * 15) / 100
    }
    // preço final
    let precoFinal = precoTotal - desconto
    // saída
    document.getElementById('resultado').innerHTML = 
`Preço unitário: ${precoUnitario} <br/> Preço Total: ${precoTotal} <br/> Desconto: ${desconto} <br/> Preço Final: ${precoFinal}`
}

function exe24(){
    // entrada de dados
    let preco = Number(document.getElementById("preco").value)
    let opcaoCategoria = Number(document.getElementById("opcaoCategoria").value)
    let opcaoSituacao = Number(document.getElementById("opcaoSituacao").value)
    let aumento
    let novoPreco
    let classificacao
    let resultado
    // Categoria
    switch(opcaoCategoria){
        case 1: if (preco <= 25){
            aumento = (preco * 5) / 100
        }
        else {
            aumento = (preco * 12) / 100
        }
               break

        case 2: if (preco <= 25){
            aumento = (preco * 8) / 100
            imposto = ((preco + aumento) * 5) / 100
        }
        else {
            aumento = (preco * 15) / 100
            imposto = ((preco + aumento) * 5) / 100
        }
                break

        case 3: if (preco <= 25){
            aumento = (preco * 10) / 100
        }
        else {
            aumento = (preco * 18) / 100
        }
                break
        default: resultado = "opção inválida"
    }

     // Situação
     switch(opcaoSituacao){
        case 1:
            imposto = ((preco + aumento) * 5) / 100
        break

        case 2:
            imposto = ((preco + aumento) * 8) / 100
        break
    }

    novoPreco = preco + aumento - imposto

    if (novoPreco <= 50) {
        classificacao = "Barato"
    }
    else if ((novoPreco >= 50) && (novoPreco <= 120)){
        classificacao = "Normal"
    }
    else {
        classificacao = "Caro"
    }

    document.getElementById("resultado").innerHTML = ` Preço:  ${preco}  Aumento:${aumento}  Imposto ${imposto} NovoPreco: ${novoPreco} classificacao ${classificacao}`
}

function exe25(){
    let horasTrabalhadas = Number(document.getElementById("horasTrabalhadas").value)
    let horasFaltas = Number(document.getElementById("horasFaltas").value)
    let horasTotal
    let resultado

    horasTotal = horasTrabalhadas - (2/3 * (horasFaltas))

    horasTotalMinutos = horasTotal * 60

    if (horasTotalMinutos >= 2400) {
        resultado = 500
    }
    else if ((horasTotalMinutos >= 1800) && (horasTotalMinutos <= 2400)){
        resultado = 400
    }
    else if ((horasTotalMinutos >= 1200) && (horasTotalMinutos <= 1800)){
        resultado = 300
    }
    else if ((horasTotalMinutos >= 1800) && (horasTotalMinutos <= 2400)){
        resultado = 200
    }
    else {
        resultado = 100
    }

    document.getElementById("resultado").innerHTML = `${horasTrabalhadas} ${horasFaltas} ${horasTotal} ${resultado}`
}