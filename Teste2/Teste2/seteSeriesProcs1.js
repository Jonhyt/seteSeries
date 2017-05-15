﻿//seteSeriesProcs1.js *********************************************************
//inicialização
function inic() {
    listTest1();
}

//TESTE: listagem de banner, logo do canal, data de lançamento e criadores para cada serie
function listTest1() {
    var i, nS = numSeries();
    document.write('<h1>'+tituloColSeries()+'</h1>')
    for (i = 0; i < nS; i++) {
        document.write(
            "<hr/>" +'<h2>' + tituloSerie(i) + '</h2><img src="' + bannerSerie(i) + '" height="80"/><a href="'+canalURLSerie(i)+'"><img src="' + canalLogoSerie(i) + '" height="80"/></a><br/><b>Data de lançamento: </b>'+
            diaLancSerie(i) + '/' +mesLancSerie(i) + '/' + anoLancSerie(i)+'</br>'+'<b>Criado por: </b>'
        );
        for (var j = 0; j < numCriaSerie(i) ; j++) {
            document.write(criaNomeSerie(i, j));
            if (j == 0 && numCriaSerie(i) > 1)
                document.write(", ");
        }
        document.write('<br/><b>Género: </b>');
        for (var j = 0; j < numGenSerie(i) ; j++) {
            document.write(genSerie(i, j));
            if (j != numGenSerie(i) - 1 && numGenSerie(i) > 1)
                document.write(", ");
        }
        document.write('<br/><b>Elenco: </b>');
        for (var j = 0; j < numAtorSerie(i) ; j++) {
            document.write(actorSerie(i, j));
            if (j != numAtorSerie(i) - 1 && numAtorSerie(i) > 1)
                document.write(", ");
        }
        document.write('<br/><b>Sinópse: </b><br/>');
        for (var j = 0; j < numParSinSerie(i) ; j++) {
            document.write(parSinSerie(i, j));
            if (j != numParSinSerie(i) - 1 && numParSinSerie(i) > 1)
                document.write("<br/>");
        }
        document.write('<br/><br/><a href="' + urlWikiSerie(i) + '"><img src="' + logoWiki() + '" height="40"></img></a>');
        document.write(' <a href="' + urlYtSerie(i) + '"><img src="' + logoYt() + '" height="40"></img></a>');
        document.write(' <a href="' + urlImdbSerie(i) + '"><img src="' + logoImdb() + '" height="40"></img></a>');
        for (j = 0; j < numTempSerie(i) ; j++) {
            document.write('<br/></br><img src="' + capaTempSerie(i, j) + '" height="80"/></br><b>' + (j + 1) + 'ª Temporada (' + epsTempSerie(i, j) + ' episódios):</b></br>'+
                resTempSerie(i, j));
        }
    }
}
