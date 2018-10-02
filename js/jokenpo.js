var escolhido = 0;

var ganhos = 0;

var perdas = 0

var empates = 0


function selecionou(value){
    limparCSS();
    escolhido = value;
    switch(escolhido){
		case 1 :
			$("#pedra").css("background-color","blue");
			break;
        case 2 :
			$("#papel").css("background-color","blue");
			break;
        case 3 :
			$("#tesoura").css("background-color","blue");
			break;
	}
    jogadaIA(escolhido);
};


function jogadaIA(){
    let valor = gerarAleatorio(escolhido);
    switch(valor){
		case 1 :
			$("#pedraIA").css("background-color","red");
			break;
        case 2 :
			$("#papelIA").css("background-color","red");
			break;
        case 3 :
			$("#tesouraIA").css("background-color","red");
			break;
    }
    
    calcularResultado(valor,escolhido);
}

function calcularResultado(IA,jogador){
    if(IA == 1 && jogador == 3 )
        perdas++;
    else if(IA == 1 && jogador == 2 ){
        vitoria();
    }
    else if(IA == 2 && jogador == 3){
        vitoria();
    }
    else if(IA == 2 && jogador == 1){
        derrota();
    }
    else if(IA == 3 && jogador == 1){
        vitoria();
    }
    else if(IA == 3 && jogador == 2){
        derrota();
    }
    else{
        empate();
    }
}

function resetar(){
    limparCSS();
    escolhido = 0;

    ganhos = 0;

    perdas = 0

    empates = 0

	$("#derrota").text(perdas);
	$("#empate").text(empates);
	$("#vitoria").text(ganhos);

}


function gerarAleatorio(){
    return  Math.floor(Math.random() * 3) + 1;
    
}
function derrota(){
	perdas++;
	$("#derrota").text(perdas);
};

function empate(){
	empates++;
	$("#empate").text(empates);
};

function vitoria(){
	ganhos++;
	$("#vitoria").text(ganhos);
};



function limparCSS(){
    $("#pedraIA").css("background-color","#343A40")
    $("#papelIA").css("background-color","#343A40")
    $("#tesouraIA").css("background-color","#343A40")
    $("#papel").css("background-color","#343A40")
    $("#tesoura").css("background-color","#343A40")
    $("#pedra").css("background-color","#343A40")

}