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

function numSeries() {
    return docXML.getElementsByTagName("serie").length;
}

function tituloSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return serie.getAttribute("titulo");
}

function bannerSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return "SeteSeries/" + serie.getAttribute("banner");
}

//Dados de um canal
function canalNomeSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return serie.getElementsByTagName("canalTV")[0].getAttribute("nome");
}

function canalURLSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return serie.getElementsByTagName("canalTV")[0].getAttribute("url");
}

function canalLogoSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return "SeteSeries/"+serie.getElementsByTagName("canalTV")[0].getAttribute("logo");
}

//Atributos da data de lançamento
function diaLancSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return serie.getElementsByTagName("dataLanc")[0].getAttribute("dia");
}

function mesLancSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return serie.getElementsByTagName("dataLanc")[0].getAttribute("mes");
}

function anoLancSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return serie.getElementsByTagName("dataLanc")[0].getAttribute("ano");
}

//Extrai informações sobre os criadores
function numCriaSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return serie.getElementsByTagName("criadores")[0].getElementsByTagName("criador").length;
}

function criaNomeSerie(s, c) {
    var serie = docXML.getElementsByTagName("serie")[s];
    var criador = serie.getElementsByTagName("criadores")[0].getElementsByTagName("criador")[c];
    return criador.childNodes[0].nodeValue;
}

//Extrai as informações sobre os géneros de uma série
function numGenSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return serie.getElementsByTagName("generos")[0].getElementsByTagName("genero").length;
}

function genSerie(s,g) {
    var serie = docXML.getElementsByTagName("serie")[s];
    var genero = serie.getElementsByTagName("generos")[0].getElementsByTagName("genero")[g];
    return genero.childNodes[0].nodeValue;
}