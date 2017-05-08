var docXML;
function inicXML(ficheiroXML) {
    function inicXML(fichXML) {
        //criar um objeto XMLHttpRequest
        var xmlhttp = new XMLHttpRequest();
        //especificar a função a ser executada quando o objeto receber cada evento "readystatechange"
        xmlhttp.onreadystatechange = function () {
            //a execução depende do objeto estar terminado e disponível
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                docXML = xmlhttp.responseXML;
                inic();
            }
        }
        xmlhttp.open("GET", fichXML, true);
        xmlhttp.send();
    }
}

//Extração de dados
function tituloCol() {
    return docXML.childNodes[0].getAttribute("titulo");
}