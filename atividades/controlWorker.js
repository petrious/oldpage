var tempoInicio = 0, tempoFinalBubble = 0, tempoFinalNativo = 0, tempoDecorridoBubble  = 0, tempoDecorridoNativo = 0;



// var workerBubble = new Worker('workerBubble.js');
// var workerNativo = new Worker('workerNativo.js');

// var workerBubble = new Worker('/workerBubble.js');
// var workerNativo = new Worker('/workerNativo.js');

// var workerBubble = new Worker('js/workerBubble.js');
// var workerNativo = new Worker('js/workerNativo.js');

var workerBubble = new Worker('workerBubble.js');
var workerNativo = new Worker('workerNativo.js');


function gerar() {
    tempoInicio = new Date().getTime();
    var tamanho = document.getElementById("inputNumber").value;
    var array = [];
    for (var i = 0; i < tamanho; i++) {

        array[i] = randomNumber();
    }
    workerBubble.postMessage(array);
    workerNativo.postMessage(array);

};


function randomNumber() {
    return parseInt((Math.random() * 100), 10)
}

workerBubble.addEventListener('message', function(e) {
    tempoFinalBubble = new Date().getTime();
    tempoDecorridoBubble = parseFloat(tempoFinalBubble - tempoInicio);
    console.log(tempoInicio);
    console.log(tempoFinalBubble);
    document.getElementById("tempo").innerHTML = tempoDecorridoBubble + " ms";
    console.log('Worker said: ', e.data);
}, false);

workerNativo.addEventListener('message', function(e) {
    tempoFinalNativo = new Date().getTime();
    tempoDecorridoNativo = parseFloat(tempoFinalNativo - tempoInicio);
    console.log(tempoInicio);
    console.log(tempoFinalNativo);
    document.getElementById("tempo2").innerHTML = tempoDecorridoNativo + " ms";
    console.log('Worker said: ', e.data);
}, false);


workerNativo.addEventListener('error', function(e){
     debugger
     });
workerBubble.addEventListener('error', function(e){
    debugger
     });