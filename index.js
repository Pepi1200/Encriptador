let tituloMensaje = document.getElementById("titulo-mensaje");
let parrafo = document.getElementById("parrafo");
let muñeco = document.getElementById("muñeco");
let mensaje=document.getElementById("mensajeEncriptado");
let copiarBtn=document.getElementById("btnCopiar");

function encriptar() {
  let texto = document.getElementById("texto").value;

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    imprimir(textoCifrado);
}

function desencriptar() {
  let texto = document.getElementById("texto").value;

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    imprimir(textoCifrado);
}

function imprimir(texto){
  if (texto.length != 0) {
    tituloMensaje.textContent = "";
    mensaje.style.top='10px';
    parrafo.textContent = texto;
    muñeco.style.display='none'
    copiarBtn.style.display='block'
  } 
  else {
    muñeco.style.display='block';
    copiarBtn.style.display='none';
    mensaje.style.top='65%';
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function copiar(){
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById("parrafo").innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}