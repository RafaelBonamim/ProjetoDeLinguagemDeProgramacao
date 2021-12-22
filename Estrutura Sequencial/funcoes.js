
function exe1(){

    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    
    // Processamento
    let resultado = numero1 - numero2

    // Saída
    document.getElementById("resultado").innerHTML = `O resultado é = ${resultado}`

}

function exe2(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let numero3 = Number(document.getElementById("numero3").value)

    // Processamento
    let resultado = numero1 * numero2 * numero3

    // Saída
    document.getElementById("resultado").innerHTML = `O resultado é = ${resultado}`
}

function exe3(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)

    // Processamento
    // Estrutura de Seleção
    // Se numero2 for = 0
    if (numero2 == 0){
        document.getElementById("resultado").innerHTML = "Por gentileza, digite um número maior do que zero!"
    }
    else {
        let resultado = numero1 / numero2 
        // Saída
        document.getElementById("resultado").innerHTML = `O resultado é = ${resultado}`
    }
}

function exe4(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)

     // Processamento
    resultado = (nota1 * 2 + nota2 * 3) / (2+3)

    document.getElementById("resultado").innerHTML = `O resultado é = ${resultado}`
}

function exe5(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let valor = Number(document.getElementById("valor").value)

    // Processamento
    resultado = valor + (valor * 0.1)
    
    // Saída
    document.getElementById("resultado").innerHTML = `O resultado é = ${resultado}`
    
}

function exe6(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let salario = Number(document.getElementById("salario").value)
    let comissao = Number(document.getElementById("comissao").value)

    // Processamento
    comissao = comissao * (4 / 100)
    resultado = salario + comissao

    // Saída
    document.getElementById("resultado").innerHTML = `O resultado é ${resultado}`
}

function exe7(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let peso = Number(document.getElementById("peso").value)


    let emagrece = peso - (20*peso)/100
    let engorda = peso + (15*peso)/100

    document.getElementById("emagrece").innerHTML = `O resultado se emagrecer 20% ${emagrece}`
    document.getElementById("engorda").innerHTML = `O resultado se engordar 15% ${engorda}`
    
}

function exe8(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let quilograma = Number(document.getElementById("quilograma").value)

    resultado = quilograma * 1000

    document.getElementById("resultado").innerHTML = `O resultado em gramas é = ${resultado}`
}

function exe9(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let basemaior = Number(document.getElementById("basemaior").value)
    let basemenor = Number(document.getElementById("basemenor").value)
    let altura = Number(document.getElementById("altura").value)

    resultado = ((basemaior + basemenor) * altura / 2)

    
    document.getElementById("resultado").innerHTML = `O resultado da área do trapézio é de ${resultado}`    
}

function exe10(){
    var lateral = Number(document.getElementById("lateral").value)

    resultado = (lateral * lateral)

    document.getElementById("resultado").innerHTML = `O resultado da área do quadrado é de ${resultado}`
    
}

function exe11(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let diagonalmaior = Number(document.getElementById("diagonalmaior").value)
    let diagonalmenor = Number(document.getElementById("diagonalmenor").value)


    resultado = ((diagonalmaior * diagonalmenor) / 2)

    
    document.getElementById("resultado").innerHTML = `O resultado da área do trapézio é de ${resultado}`    
}

function exe12(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let salariominimo = Number(document.getElementById("salariominimo").value)
    let salario = Number(document.getElementById("salario").value)

    // Processamento
    resultado = salario / salariominimo

    // Saída
    document.getElementById("resultado").innerHTML = `O resultado é ${resultado}`
}

function exe13(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let numero = Number(document.getElementById("numero").value)

    // Processamento
    resultado0 = numero * 0
    resultado1 = numero * 1 
    resultado2 = numero * 2 
    resultado3 = numero * 3 
    resultado4 = numero * 4 
    resultado5 = numero * 5 
    resultado6 = numero * 6 
    resultado7 = numero * 7 
    resultado8 = numero * 8 
    resultado9 = numero * 9 
    resultado10 = numero * 10 

    // Saída
    document.getElementById("resultado0").innerHTML = `${numero} * 0 = ${resultado0}`
    document.getElementById("resultado1").innerHTML = `${numero} * 1 = ${resultado1}`
    document.getElementById("resultado2").innerHTML = `${numero} * 2 = ${resultado2}`
    document.getElementById("resultado3").innerHTML = `${numero} * 3 = ${resultado3}`
    document.getElementById("resultado4").innerHTML = `${numero} * 4 = ${resultado4}`
    document.getElementById("resultado5").innerHTML = `${numero} * 5 = ${resultado5}`
    document.getElementById("resultado6").innerHTML = `${numero} * 6 = ${resultado6}`
    document.getElementById("resultado7").innerHTML = `${numero} * 7 = ${resultado7}`
    document.getElementById("resultado8").innerHTML = `${numero} * 8 = ${resultado8}`
    document.getElementById("resultado9").innerHTML = `${numero} * 9 = ${resultado9}`
    document.getElementById("resultado10").innerHTML = `${numero} * 10 = ${resultado10}`
}

function exe14(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let anoNascimento = Number(document.getElementById("anoNascimento").value)
    let anoAtual = Number(document.getElementById("anoAtual").value)

    // Processamento
    let idadeAnos = anoAtual - anoNascimento
    let idadeMeses = idadeAnos * 12
    let idadeSemanas = idadeAnos * 52
    let idadeDias = idadeAnos * 365

    // Saída
    document.getElementById("resultado").innerHTML = `Idade em Anos = ${idadeAnos}, Meses = ${idadeMeses}, Semanas = ${idadeSemanas} e Dias = ${idadeDias}`
    
}

function exe15(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let salario = Number(document.getElementById("salario").value)
    let conta1 = Number(document.getElementById("conta1").value)
    let conta2 = Number(document.getElementById("conta2").value)

    // Processamento
    let multa1 = conta1 * 2 / 100
    let multa2 = conta2 * 2 / 100

    let resultado = salario - (conta1 + multa1) - (conta2 + multa2)

    // Saída
    document.getElementById("resultado").innerHTML = `O valor total a ser pago é de R$ = ${resultado}`
    
}

function exe16(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let catetoOposto = Number(document.getElementById("catetoOposto").value)
    let catetoAdjacente = Number(document.getElementById("catetoAdjacente").value)

    // Processamento
    let resultado1 = (catetoAdjacente * catetoAdjacente)
    let resultado2 = (catetoOposto * catetoOposto)
    let resultado3 = resultado1 + resultado2
    let hipotenusa = resultado3 ** (1/2) 

    let resultado = hipotenusa

    // Saída
    document.getElementById("resultado").innerHTML = `O valor da Hipotenusa é de ${resultado}`
    
}

function exe17(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let raio = Number(document.getElementById("raio").value)
    let pi=3.14, comprimentoCircunferencia, areaCircunferencia, diametro;

    comprimentoCircunferencia = 2*pi*raio;
    areaCircunferencia  = pi* raio*raio;
    diametro = 2*raio;

    let resultado = comprimentoCircunferencia
    let resultado1 = areaCircunferencia
    let resultado2 = diametro

    // Saída
    document.getElementById("resultado").innerHTML = `O valor do Comprimento é de ${resultado}`
    document.getElementById("resultado1").innerHTML = `O valor da Área é de ${resultado1}`
    document.getElementById("resultado2").innerHTML = `O valor do Diâmetro é de ${resultado2}`

    
}

function exe18(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let celcius = Number(document.getElementById("celcius").value)
    
    // Processamento
    let fahrenheit = ((celcius * 1.8) + 32)
    
    let resultado = fahrenheit

    // Saída
    document.getElementById("resultado").innerHTML = `O valor da conversão é de ${resultado.toFixed(2)} °Fahrenheit`
    
}

function exe19(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let lado1 = Number(document.getElementById("lado1").value)
    let lado2 = Number(document.getElementById("lado2").value)

    area = lado1 * lado2

    potenciaW = area * 18

    resultado = potenciaW

    document.getElementById("resultado").innerHTML = `A área total em m² é de: ${area} m²`    

    document.getElementById("resultado1").innerHTML = `A potência de iluminação que deverá ser utilizada é de ${resultado} W`    
}

function exe20(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let angulo = Number(document.getElementById("angulo").value)
    let distancia = Number(document.getElementById("distancia").value)

    let hipotenusa = distancia / Math.cos(angulo)
    

    document.getElementById("resultado").innerHTML = `A medida da escada é de: ${hipotenusa}`

}

function exe21(){
    // Entrada de Dados

    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let salarioMinimo = Number(document.getElementById("salarioMinimo").value)
    let horasTrabalhadas = Number(document.getElementById("horasTrabalhadas").value)
    let horasExtraTrabalhadas = Number(document.getElementById("horasExtraTrabalhadas").value)

    valorHorasTrabalhadas = (salarioMinimo / 8)
    valorHorasExtraTrabalhadas = (salarioMinimo / 4)

    aReceberHorasExtra = horasExtraTrabalhadas * valorHorasExtraTrabalhadas
    aReceberHorasTrabalhadas = horasTrabalhadas * valorHorasTrabalhadas

    resultado = aReceberHorasTrabalhadas + aReceberHorasExtra


    document.getElementById("resultado").innerHTML = `O valor total a receber é de: ${resultado} `    
}

function exe22(){
    // Entrada de Dados
    // ND = N * (N -3) /2
    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let numeroLados = Number(document.getElementById("numeroLados").value)
    
    let numeroDiagonais = numeroLados * (numeroLados - 3) / 2

    resultado = numeroDiagonais


    document.getElementById("resultado").innerHTML = `O valor total de Diagonais é de: ${resultado} `    
}

function exe23(){
    // Entrada de Dados
    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let angulo1 = Number(document.getElementById("angulo1").value)
    let angulo2 = Number(document.getElementById("angulo2").value)
    
    let angulo3 = 180 - (angulo1 + angulo2)

    resultado = angulo3


    document.getElementById("resultado").innerHTML = `O valor total do terceiro ângulo é de: ${resultado}.`    
}

function exe24(){
    // Entrada de Dados
    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let quantia = Number(document.getElementById("quantia").value)

    let dolar = quantia * 1.80
    let marcoAlemao = quantia * 2
    let libraEsterlina = quantia * 3.57

    document.getElementById("resultado").innerHTML = `Conversão = Dólar = R$${dolar}, Marco Alemão = R$${marcoAlemao} e Libra Esterlina = R$${libraEsterlina}.`    
}

function exe25(){
    // Entrada de Dados
    // Recuperar os dados digitados do usuário
    // Converter texto para número c/ Função Number
    let horas = Number(document.getElementById("horas").value)
    let minutos = Number(document.getElementById("minutos").value)

    let horasMinutos = horas * 60
    let minutosTotal = horasMinutos + minutos
    let segundos = minutosTotal * 60

    document.getElementById("resultado").innerHTML = `Conversão = Horas em Minutos = ${horasMinutos}, Total de Minutos = ${minutosTotal} e Total de Segundos = ${segundos}.`    
}