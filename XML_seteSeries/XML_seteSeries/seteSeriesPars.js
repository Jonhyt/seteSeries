//seteSeriesPars.js ***********************************************************
var docXML;
//através de um ficheiro XML no servidor, e de um objeto XMLHttpRequest, produz a variável docXML, capaz de ser processada em javaScript no cliente. Em simultâneo, será iniciada a função principal inic().
function inicXML(fichXML) {
  //criação de um objeto XMLHttpRequest
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      docXML = xmlhttp.responseXML; inic();
    }
  }
  xmlhttp.open("GET", fichXML, true);
  xmlhttp.send();
}

//EXTRAÇÃO DE DADOS
//título da coleção de séries de TV
function tituloColSeries() {
  return docXML.childNodes[0].getAttribute("titulo");
}