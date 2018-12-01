
function verificarLocalStorageTexto() {
    if (localStorage.getItem('value') != null) {
        document.querySelector('#texto').innerHTML = localStorage.getItem('value');
    }
}


function verificarLocalStorageNome() {
    var nome = localStorage.getItem('valueNome');
    if (nome != null) {
        document.getElementById('nome').value = nome;
    }
}

function verificarTempo() {
    debugger

    var timeNow = (new Date()).getTime();
    var min = timeNow - localStorage.getItem('timestamp');

    var ultimoAcesso = localStorage.getItem('acesso');
    document.getElementById('acesso').value = ultimoAcesso;
    if (min > 1800000 && (localStorage.getItem('timestamp')) != null) {
        alert("Bem-vindo");
    }
}

function limpar() {
    localStorage.clear();
}

function setDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var curHour = currentDate.getHours();
    var curMinute = currentDate.getMinutes();
    var curSec = currentDate.getSeconds();
    var tempo = day + '/' + month + '/' + year + " " + curHour + ":" + curMinute + ":" + curSec;
    localStorage.setItem('acesso', tempo);
}


document.querySelector('#texto').addEventListener('keyup', function (e) {
    localStorage.setItem('value', this.value);
    localStorage.setItem('timestamp', (new Date()).getTime());
}, false);

document.querySelector('#nome').addEventListener('keyup', function (e) {
    localStorage.setItem('valueNome', this.value);
    localStorage.setItem('timestamp', (new Date()).getTime());

}, false);

setDate();
verificarLocalStorageTexto();
verificarLocalStorageNome();
verificarTempo();