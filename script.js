var ano = document.getElementById('ano');
var mes = document.getElementById('mes');
var dia = document.getElementById('dia');
var resultado = document.querySelector('#resultado')

function idaded() {
    var anov = parseInt(ano.value)
    var mesv = parseFloat(mes.value)
    var diav = parseInt(dia.value)

    var totald = (anov * 365) + (mesv * 30) + diav
    
    resultado.innerHTML = totald
}