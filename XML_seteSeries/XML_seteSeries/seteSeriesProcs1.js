//seteSeriesProcs1.js *********************************************************
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
            "<hr/>" +'<h2>' + tituloSerie(i) + '</h2><img src="' + bannerSerie(i) + '" height="80"/><img src="' + canalLogoSerie(i) + '" height="80"/><br/><b>Data de lançamento: </b>'+
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
            if (j != numGenSerie(i)-1 && numGenSerie(i) > 1)
                document.write(", ");
        }
    }
}
