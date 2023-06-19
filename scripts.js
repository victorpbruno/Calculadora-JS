let zero = document.querySelector('#zero')
let um = document.querySelector('#um')
let dois = document.querySelector('#dois')
let tres = document.querySelector('#tres')
let quatro = document.querySelector('#quatro')
let cinco = document.querySelector('#cinco')
let seis = document.querySelector('#seis')
let sete = document.querySelector('#sete')
let oito = document.querySelector('#oito')
let nove = document.querySelector('#nove')
let decimal = document.querySelector('#decimal')

let somar = document.querySelector('#somar')
let subtrair = document.querySelector('#subtrair')
let multiplicar = document.querySelector('#multiplicar')
let dividir = document.querySelector('#dividir')
let igual = document.querySelector('#igual')
let limpar = document.querySelector('#limpar')
let del = document.querySelector('#del')
let resultado = document.querySelector('#resultado')


zero.addEventListener('click', function () {
    resultado.value += '0'
})
um.addEventListener('click', function () {
    resultado.value += '1'
})
dois.addEventListener('click', function () {
    resultado.value += '2'
})
tres.addEventListener('click', function () {
    resultado.value += '3'
})
quatro.addEventListener('click', function () {
    resultado.value += '4'
})
cinco.addEventListener('click', function() {
    resultado.value += '5'
})
seis.addEventListener('click', function() {
    resultado.value += '6'
})
sete.addEventListener('click', function() {
    resultado.value += '7'
})
oito.addEventListener('click', function() {
    resultado.value += '8'
})
nove.addEventListener('click', function() {
    resultado.value += '9'
})
somar.addEventListener('click', function() {
    resultado.value += '+'
})
dividir.addEventListener('click', function() {
    resultado.value += '/'
})
multiplicar.addEventListener('click', function() {
    resultado.value += '*'
})
subtrair.addEventListener('click', function() {
    resultado.value += '-'
})
limpar.addEventListener('click', function(){
    resultado.value = ''
})
decimal.addEventListener('click', function(){
    resultado.value += '.'
})
igual.addEventListener('click', function(){
    resultado.value = eval(resultado.value)
})
del.addEventListener('click', function(){
    resultado.value = resultado.value.slice(0,-1)
})