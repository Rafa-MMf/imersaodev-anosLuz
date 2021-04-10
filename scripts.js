function calcular() {
  var divResultado = document.getElementById('mostra')
  divResultado.innerHTML = ""
  var campoValor = document.querySelector('#valor-metros')
  var valorMetros = parseInt(campoValor.value)
  var resultado = parseFloat(valorMetros * 9.46)
  var tela = "<h2>O valor em metros é " + resultado + "*10^15</h2>"

  mostra.innerHTML = mostra.innerHTML + tela
}
