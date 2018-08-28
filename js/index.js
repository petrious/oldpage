
var biblioteca = ["ABACATE", "ABACAXI", "ABIU", "ABRUNHO", "ABUTUA", "AÇAÍ", "ACEROLA", "ACHACHAIRU", "ACHUÁ", "AGUAÍ", "AJURU", "AKEE", "AMAPÁ", "AMEIXA", "AMÊNDOA", "AMORA", "ANTIDESMA", "APIRANGA", "ARAÇÁ", "ARICURI", "ARIRI", "ATEMOIA", "AVELÃ", "AVOCADO", "BABACO", "BABAÇU", "BACABA", "BACURI", "BACURIPARI", "BALATA", "BANANA", "BARU", "BILIMBI", "BIRIBÁ", "BURANHÉM", "BURITI", "BUTIÁ", "CABELUDINHA", "CACAU", "CAFEZINHO", "CAGAITA", "CAINITO", "CAJÁ", "CAJU", "CALABAÇA", "CALABURA", "CALAMONDIN", "CAMBUCÁ", "CAMBUCI", "CAMUTIM", "CANISTEL", "CAQUI", "CARAMBOLA", "CARAMURI", "CARISSA", "CEREJA", "CHAMPEDAKE", "CHERIMOIA", "CIRIGUELA", "COCO", "CONDESSA", "CRANBERRY", "CRUÁ", "CUBIU", "CUPUAÇU", "CURUBA", "CUTITE", "DAMASCO", "DENDÊ", "DURIAN", "ESFREGADINHA", "FEIJOA", "FIGO", "FRAMBOESA", "GLYCOSMIS", "GOIABA", "GRANADILHA", "GRAVIOLA", "GROSELHA", "GRUMIXAMA", "GUABIJU", "GUABIROBA", "GUAÇATUNGA", "GUACHAMACA", "GUAGILOTE", "GUAMIRIM", "GUARANÁ", "HEISTÉRIA", "IMBÉ", "INAJÁ", "JABUTICABA", "JACA", "JAMBO", "JAMBOLÃO", "JARACATIÁ", "JATOBÁ", "JUÁ", "JUJUBA", "KINO", "KUMQUAT", "LACUCHA", "LANDIN", "LARANJA", "LICHIA", "LOBEIRA", "LONGAN", "LUCUMA", "LULO", "MABOLO", "MAÇÃ", "MACADÂMIA", "MAMÃO", "MAMEY", "MANGA", "MANGABA", "MANGOSTÃO", "MARACUJÁ", "MARMELO", "MAROLO", "MELANCIA", "MELÃO", "MIRTILO", "MORANGO", "MURICI", "MURUMURU", "NARANJILLA", "NECTARINA", "NÊSPERA", "NONI", "ORANGELO", "PAJURÁ", "PATAUÁ", "PEQUI", "PERA", "PÊSSEGO", "PHYSALIS", "PINDAÍVA", "PINHA", "PINHÃO", "PISTÁCHIO", "PITAIA", "PITANGATUBA", "PIXIRICA", "POMELO", "PUÇÁ", "PULASAN", "PUPUNHA", "RAMBAI", "RAMBUTÃO", "RANDIA", "ROMÃ", "RUKAM", "SACHAMANGO", "SAGUARAJI", "SALAK", "SANTOL", "SAPOTI", "SAPUCAIA", "SAPUTÁ", "SORVA", "TAIUVA", "TÂMARA", "TAMARINDO", "TANGERINA", "TANGOR", "TAPEREBÁ", "TAPIÁ", "TARUMÃ", "TATAJUBA", "TORANJA", "TOTAI", "TUCUJÁ", "TUCUM", "TUCUMÃ", "UARÁ", "UBUÇU", "UCHUVA", "UMBU", "UMBUGUELA", "UMÊ", "UVA", "UVAIA", "UXI", "WAMPI", "XIXÁ"];
var element;

var quantidadePalavra = biblioteca.length - 1;
console.log(quantidadePalavra);

var posicaoAleatoria = Math.round(Math.random() * quantidadePalavra);

var selecionarPalavra = biblioteca[posicaoAleatoria];

var tamanhoPalavraSorteada = selecionarPalavra.length;
var palavraAlterada;
var arrayErros = [];
var erros;
var acertos;


function play(letraParametro) {
	if (letraParametro == null) alert("Digite ao menos uma palavra! ");

	else {
		palavraAlterada = selecionarPalavra;
		letraParametro = letraParametro.toUpperCase();
		
		if (palavraAlterada.match(letraParametro)) {
			while (palavraAlterada.match(letraParametro) != null) {
				var posicao = palavraAlterada.search(letraParametro);
				document.getElementById("letra" + posicao).value = letraParametro;
				palavraAlterada = palavraAlterada.replace(letraParametro, '0');
				palavraAlterada.match(letraParametro);
				acertos++;
				if(acertos == tamanhoPalavraSorteada){
					fim( "Você ganhou! Parabéns =)");
				}
			}
		} else {
			erros++;
			if (erros <= 5) {
				arrayErros.push(letraParametro);
				document.getElementById("letrasDigitadas").innerHTML = "Letras Digitadas Erradas:" + arrayErros;
				exibeBoneco();
			}
		}
	}

	checkPalavra.focus();
	document.getElementById("checkPalavra").value = null;
};

function dica() {
	alert(selecionarPalavra);
};

function defineLetras(valor) {
	for (let index = 0; index < 20; index++) {
		document.getElementById("letra" + index).value = "";
		document.getElementById("letra" + index).style.display = "none";
	};
	for (let index = 0; index < valor; index++) {
		document.getElementById("letra" + index).style.display = "inline";
	}

}

function init() {
	limparBoneco();
	var arrayErros = [];
	document.getElementById("msg").innerText = "";
	erros = 0;
	acertos = 0;
	arrayErros = [];
	Palavra = document.getElementById("checkPalavra");
	Palavra.value = null;
	document.getElementById("letrasDigitadas").innerHTML = "Letras Digitadas Erradas:" + arrayErros;
	posicaoAleatoria = Math.round(Math.random() * quantidadePalavra);
	selecionarPalavra = biblioteca[posicaoAleatoria];
	tamanhoPalavraSorteada = selecionarPalavra.length;
	defineLetras(tamanhoPalavraSorteada);
	exibeBoneco();
};

function limparBoneco() {
	$('.cabeca').css('display', 'none');
	$('.corpo').css('display', 'none');
	$('.braco-direito').css('display', 'none');
	$('.braco-esquerdo').css('display', 'none');
	$('.perna-direita').css('display', 'none');
};

var exibeBoneco = function () {
	debugger
	if (acertos === 0) {
		erros = 0;
	} else if (erros === 1) {
		$('.cabeca').css('display', 'block');
	} else if (erros === 2) {
		$('.cabeca').css('display', 'block');
		$('.corpo').css('display', 'block');
	} else if (erros === 3) {
		$('.cabeca').css('display', 'block');
		$('.corpo').css('display', 'block');
		$('.braco-direito').css('display', 'block');
	} else if (erros === 4) {
		$('.cabeca').css('display', 'block');
		$('.corpo').css('display', 'block');
		$('.braco-direito').css('display', 'block');
		$('.braco-esquerdo').css('display', 'block');
		$('.perna-direita').css('display', 'block');
	} else {
		$('.cabeca').css('display', 'block');
		$('.corpo').css('display', 'block');
		$('.braco-direito').css('display', 'block');
		$('.braco-esquerdo').css('display', 'block');
		$('.perna-direita').css('display', 'block');
		$('.perna-esquerda').css('display', 'block');
		$('.cabeca').css('animation-duration', '1s');
		$('.cabeca').css('animation-name', 'ficarRoxo');
		$('.cabeca').css('animation-iteration-count', 'infinite');
		$('.cabeca').css('animation-direction', 'alternate');

		$('.braco-direito').css('animation-duration', '0.3s');
		$('.braco-direito').css('animation-name', 'debaterBracoDireito');
		$('.braco-direito').css('animation-iteration-count', 'infinite');
		$('.braco-direito').css('animation-direction', 'alternate');
		$('.braco-esquerdo').css('animation-duration', '0.3s');
		$('.braco-esquerdo').css('animation-name', 'debaterBracoEsquerdo');
		$('.braco-esquerdo').css('animation-iteration-count', 'infinite');
		$('.braco-esquerdo').css('animation-direction', 'alternate');

		$('.perna-direita').css('animation-duration', '0.3s');
		$('.perna-direita').css('animation-name', 'debaterPernaDireita');
		$('.perna-direita').css('animation-iteration-count', 'infinite');
		$('.perna-direita').css('animation-direction', 'alternate');

		$('.perna-esquerda').css('animation-duration', '0.3s');
		$('.perna-esquerda').css('animation-name', 'debaterPernaEsquerda');
		$('.perna-esquerda').css('animation-iteration-count', 'infinite');
		$('.perna-esquerda').css('animation-direction', 'alternate');

		fim("Voce perdeu! A resposta correta era : " + selecionarPalavra + ", mais sorte na próxima! :)")

		
	}
}

function fim(msg){
	setTimeout(function () {
		init();
	}, 3000);
	document.getElementById("msg").innerText = msg;

}


