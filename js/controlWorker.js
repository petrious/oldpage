var tempoInicio = 0;
var tempoFinalBubble = 0;
var tempoFinalNativo = 0;
var tempoDecorridoBubble = 0;
var tempoDecorridoNativo = 0;

document.getElementById("inputNumber").autofocus;

var workerBubble = new Worker('workerBubble.js');
workerBubble.addEventListener('message', function(e) {
    tempoFinalBubble = new Date().getTime();
    tempoDecorridoBubble = parseFloat(tempoFinalBubble - tempoInicio);
    console.log(tempoInicio);
    console.log(tempoFinalBubble);
    document.getElementById("tempo").innerHTML = tempoDecorridoBubble + " ms";
    console.log('Worker said: ', e.data);
}, false);

var workerNativo = new Worker('workerNativo.js');
workerNativo.addEventListener('message', function(e) {
    tempoFinalNativo = new Date().getTime();
    tempoDecorridoNativo = parseFloat(tempoFinalNativo - tempoInicio);
    console.log(tempoInicio);
    console.log(tempoFinalNativo);
    document.getElementById("tempo2").innerHTML = tempoDecorridoNativo + " ms";
    console.log('Worker said: ', e.data);
}, false);

function teste() {
    tempoInicio = new Date().getTime();
    var tamanho = document.getElementById("inputNumber").value;
    var array = [];
    for (var i = 0; i < tamanho; i++) {

        array[i] = randomNumber();
    }
    workerBubble.postMessage(array);
    workerNativo.postMessage(array);

};

//USAR WORKER PARA INICIAR O BUBBLE

function randomNumber() {
    return parseInt((Math.random() * 100), 10)
}

function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}