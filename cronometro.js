

var h = 0;
var min = 0;
var ss = 0;

var tempo = 1000;//quantos milésimos valem 1 segundo
var cron;

function start() {

    //cron = setInterval(function(){})

    cron = setInterval(timer, tempo)

}

function pause() {

    clearInterval(cron) //Pega a variável cron que será a que irá pausar

}

function stop() {

    clearInterval(cron);

    h = 0;
    min = 0;
    ss = 0;

    document.getElementById('contar').innerHTML = '00:00:00';

}

function timer() {
    ss++;
    
    if(ss == 60) {
        ss = 0;
        min++;
        
        if(min == 60) {
            min = 0;
            h++;
        } 
    }


                                                 //se min for menor que 10, ENTÂO coloque 0 antes e soma com min, SENÂO exiba os min
    var format = (h < 10 ? '0' + h : h) + ':' + (min < 10 ? '0' + min : min) + ':' + (ss < 10 ? '0' + ss : ss) 
    document.getElementById('contar').innerHTML = format

}


//? Então 
//: Senão.exit