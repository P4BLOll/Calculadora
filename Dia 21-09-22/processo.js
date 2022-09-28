class Calculadora{
    
    soma(a,b){
     return a + b
    }
    subtrair(a,b){
     return a - b
    }
    multiplicação(a,b){
     return a*b

    }
    divisão(a,b){
     return a/b
    }

    }

function Somando(){
    a = Number
    b = Number
    let resultado = new Calculadora()
    var n1 = (document.querySelector('input#primeiro'))
    var n2 = (document.querySelector('input#segundo'))
    var a = Number(n1.value)
    var b = Number(n2.value)
    var valorfinal = document.querySelector('#resul')
    let resultadodasoma = resultado.soma(a,b)
    valorfinal.innerHTML = `${a} + ${b} = ${resultadodasoma}`

}
function Subtraindo(){
    a = Number
    b = Number
    let resultado = new Calculadora()
    var n1 = (document.querySelector('input#primeiro'))
    var n2 = (document.querySelector('input#segundo'))
    var a = (n1.value)
    var b = (n2.value)
    var valorfinal = document.querySelector('#resul')
    let resultadodasubtração = resultado.subtrair(a,b)
    valorfinal.innerHTML = `${a} + ${b} = ${resultadodasubtração}`
}
function Dividindo(){
    a = Number
    b = Number
    let resultado = new Calculadora()
    var n1 = (document.querySelector('input#primeiro'))
    var n2 = (document.querySelector('input#segundo'))
    var a = Number(n1.value)
    var b = Number(n2.value)
    var valorfinal = document.querySelector('#resul')
    let resultadodadivisao = resultado.divisão(a,b)
    valorfinal.innerHTML = `${a} + ${b} = ${resultadodadivisao}`
}
function Multiplicando(){
    a = Number
    b = Number
    let resultado = new Calculadora()
    var n1 = (document.querySelector('input#primeiro'))
    var n2 = (document.querySelector('input#segundo'))
    var a = Number(n1.value)
    var b = Number(n2.value)
    var valorfinal = document.querySelector('#resul')
    let resultadodamultiplicacao = (resultado.multiplicação(a,b))
    valorfinal.innerHTML = `${a} + ${b} = ${resultadodamultiplicacao}`
}
function limpar(){
    var valorfinal = document.querySelector('#resul')
    valorfinal.innerHTML = "Resultado"
}