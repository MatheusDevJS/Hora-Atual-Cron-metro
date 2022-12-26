function horaatual() {

    var exibir = document.getElementById('res')
    var data = new Date()
    var min = data.getMinutes()
    var hora = data.getHours()
    var seg = data.getSeconds()

    res.innerHTML = `${hora} horas e ${min} minutos e ${seg} segundos`

}

/////////////////////////////////////////////////


/*O setInterval serve para executar uma função ou instrução várias vezes em um determinado intervalo de tempo.
 A sua sintaxe é: setInterval(funcao, tempo); Isto significa que a função "funcao" será executada assim cada vez que se 
 atingir o determinado tempo.*/
