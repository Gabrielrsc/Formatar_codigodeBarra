function converterTexto() {
  // Obtém o texto da área de entrada
  var inputText = document.getElementById("inputTextarea").value;

  // Substitui todas as ocorrências de quebra de linha por '/'
  var convertedText = inputText.replace(/\n/g, " / ");

  // Exibe o texto convertido na área de saída
  document.getElementById("outputTextarea").value = convertedText;
}

function copiarTexto() {
// Seleciona o texto na área de saída
var outputTextarea = document.getElementById('outputTextarea');
outputTextarea.select();
outputTextarea.setSelectionRange(0, 99999); // Para dispositivos móveis

// Copia o texto para a área de transferência
document.execCommand('copy');

// Exibe o balão de cópia
var copyAlert = document.getElementById('copyAlert');
copyAlert.innerHTML = 'Texto copiado!';
copyAlert.style.display = 'inline';

// Agendamento para ocultar o balão após 10 segundos
setTimeout(function () {
  copyAlert.style.display = 'none';
}, 1000);
}

function adicionarQuebraDeLinha() {
  var inputTextarea = document.getElementById("inputTextarea");
  var inputText = inputTextarea.value;

  // Remove quebras de linha existentes
  inputText = inputText.replace(/\n/g, "");

  // Adiciona uma quebra de linha a cada conjunto de 9 caracteres
  var formattedText = inputText.replace(/(.{9})/g, "$1\n");

  inputTextarea.value = formattedText;
}