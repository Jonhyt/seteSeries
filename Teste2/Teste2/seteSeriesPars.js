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

//Extrai as informações do link da wikipédia
function urlWikiSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return serie.getElementsByTagName("webLinks")[0].getElementsByTagName("link")[0].getAttribute("url");
}

function logoWiki() {
    var serie = docXML.getElementsByTagName("serie")[0];
    return "SeteSeries/" + serie.getElementsByTagName("webLinks")[0].getElementsByTagName("link")[0].getAttribute("logo");
}

//Extrai as informações do link da YouTube
function urlYtSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return serie.getElementsByTagName("webLinks")[0].getElementsByTagName("link")[1].getAttribute("url");
}

function logoYt() {
    var serie = docXML.getElementsByTagName("serie")[0];
    return "SeteSeries/" + serie.getElementsByTagName("webLinks")[0].getElementsByTagName("link")[1].getAttribute("logo");
}

//Extrai as informações do link da IMDB
function urlImdbSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return serie.getElementsByTagName("webLinks")[0].getElementsByTagName("link")[2].getAttribute("url");
}

function logoImdb() {
    var serie = docXML.getElementsByTagName("serie")[0];
    return "SeteSeries/" + serie.getElementsByTagName("webLinks")[0].getElementsByTagName("link")[2].getAttribute("logo");
}

//Extrai informações sobre os atores
function numAtorSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return serie.getElementsByTagName("elenco")[0].getElementsByTagName("ator").length;
}

function actorSerie(s, a) {
    var serie = docXML.getElementsByTagName("serie")[s];
    var ator = serie.getElementsByTagName("elenco")[0].getElementsByTagName("ator")[a];
    return ator.childNodes[0].nodeValue;
}

//Extrai informações sobre a sinópse
function numParSinSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return serie.getElementsByTagName("sinopse")[0].getElementsByTagName("parag").length;
}

function parSinSerie(s, p) {
    var serie = docXML.getElementsByTagName("serie")[s];
    var par = serie.getElementsByTagName("sinopse")[0].getElementsByTagName("parag")[p];
    return par.childNodes[0].nodeValue;
}

//Extrai informações sobre as temporadas
function numTempSerie(s) {
    var serie = docXML.getElementsByTagName("serie")[s];
    return serie.getElementsByTagName("sinopse")[0].getElementsByTagName("parag").length;
}
//resumo
function resTempSerie(s, t) {
    var serie = docXML.getElementsByTagName("serie")[s];
    var temp = serie.getElementsByTagName("temporadas")[0].getElementsByTagName("temporada")[t];
    return temp.childNodes[0].nodeValue;
}
//numero de temporada
function ordTempSerie(s, t) {
    var serie = docXML.getElementsByTagName("serie")[s];
    var temp = serie.getElementsByTagName("temporadas")[0].getElementsByTagName("temporada")[t];
    return temp.getAttribute("numero");
}
//numero de episodios
function epsTempSerie(s, t) {
    var serie = docXML.getElementsByTagName("serie")[s];
    var temp = serie.getElementsByTagName("temporadas")[0].getElementsByTagName("temporada")[t];
    return temp.getAttribute("episodios");
}
//numero de imagem de capa
function capaTempSerie(s, t) {
    var serie = docXML.getElementsByTagName("serie")[s];
    var temp = serie.getElementsByTagName("temporadas")[0].getElementsByTagName("temporada")[t];
    return "SeteSeries/"+temp.getAttribute("capa");
}


