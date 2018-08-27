
var biblioteca = ["ABACATE", "ABACAXI", "ABIU", "ABRUNHO", "ABUTUA", "AÇAÍ", "ACEROLA", "ACHACHAIRU", "ACHUÁ", "AGUAÍ", "AJURU", "AKEE", "AMAPÁ", "AMEIXA", "AMÊNDOA", "AMORA", "ANTIDESMA", "APIRANGA", "ARAÇÁ", "ARICURI", "ARIRI", "ATEMOIA", "AVELÃ", "AVOCADO", "BABACO", "BABAÇU", "BACABA", "BACURI", "BACURIPARI", "BALATA", "BANANA", "BARU", "BILIMBI", "BIRIBÁ", "BURANHÉM", "BURITI", "BUTIÁ", "CABELUDINHA", "CACAU", "CAFEZINHO", "CAGAITA", "CAINITO", "CAJÁ", "CAJU", "CALABAÇA", "CALABURA", "CALAMONDIN", "CAMBUCÁ", "CAMBUCI", "CAMUTIM", "CANISTEL", "CAQUI", "CARAMBOLA", "CARAMURI", "CARISSA", "CEREJA", "CHAMPEDAKE", "CHERIMOIA", "CIRIGUELA", "COCO", "CONDESSA", "CRANBERRY", "CRUÁ", "CUBIU", "CUPUAÇU", "CURUBA", "CUTITE", "DAMASCO", "DENDÊ", "DURIAN", "ESFREGADINHA", "FEIJOA", "FIGO", "FRAMBOESA", "GLYCOSMIS", "GOIABA", "GRANADILHA", "GRAVIOLA", "GROSELHA", "GRUMIXAMA", "GUABIJU", "GUABIROBA", "GUAÇATUNGA", "GUACHAMACA", "GUAGILOTE", "GUAMIRIM", "GUARANÁ", "HEISTÉRIA", "IMBÉ", "INAJÁ", "JABUTICABA", "JACA", "JAMBO", "JAMBOLÃO", "JARACATIÁ", "JATOBÁ", "JUÁ", "JUJUBA", "KINO", "KUMQUAT", "LACUCHA", "LANDIN", "LARANJA", "LICHIA", "LOBEIRA", "LONGAN", "LUCUMA", "LULO", "MABOLO", "MAÇÃ", "MACADÂMIA", "MAMÃO", "MAMEY", "MANGA", "MANGABA", "MANGOSTÃO", "MARACUJÁ", "MARMELO", "MAROLO", "MELANCIA", "MELÃO", "MIRTILO", "MORANGO", "MURICI", "MURUMURU", "NARANJILLA", "NECTARINA", "NÊSPERA", "NONI", "ORANGELO", "PAJURÁ", "PATAUÁ", "PEQUI", "PERA", "PÊSSEGO", "PHYSALIS", "PINDAÍVA", "PINHA", "PINHÃO", "PISTÁCHIO", "PITAIA", "PITANGATUBA", "PIXIRICA", "POMELO", "PUÇÁ", "PULASAN", "PUPUNHA", "RAMBAI", "RAMBUTÃO", "RANDIA", "ROMÃ", "RUKAM", "SACHAMANGO", "SAGUARAJI", "SALAK", "SANTOL", "SAPOTI", "SAPUCAIA", "SAPUTÁ", "SORVA", "TAIUVA", "TÂMARA", "TAMARINDO", "TANGERINA", "TANGOR", "TAPEREBÁ", "TAPIÁ", "TARUMÃ", "TATAJUBA", "TORANJA", "TOTAI", "TUCUJÁ", "TUCUM", "TUCUMÃ", "UARÁ", "UBUÇU", "UCHUVA", "UMBU", "UMBUGUELA", "UMÊ", "UVA", "UVAIA", "UXI", "WAMPI", "XIXÁ"];
var element;

var quantidadePalavra = biblioteca.length -1;
console.log(quantidadePalavra);

var posicaoAleatoria = Math.round(Math.random()*quantidadePalavra);

var selecionarPalavra = biblioteca[posicaoAleatoria];

var tamanhoPalavraSorteada = selecionarPalavra.length;

var errou ;
function play(letraParametro){
		if( letraParametro != null){
			if(letraParametro.match(selecionarPalavra)){
				document.getElementById("letra"+letraParametro.search(selecionarPalavra)).value=letraParametro;	
			}
		}


};

function dica(){
	alert(selecionarPalavra);
};

function defineLetras(valor){
	var obj;
	for (let index = 0; index < 20; index++) {
		obj = document.getElementById("letra"+index).value = "";
		obj = document.getElementById("letra"+index).style.display="none";
	};
	for (let index = 0; index < valor; index++) {
		obj = document.getElementById("letra"+index).style.display="inline";
	}
	
}

function init(){
		errou = 0;
		Palavra = document.getElementById("checkPalavra");
		Palavra.value = null;
		document.getElementById("letrasDigitadas").innerHTML="Letras Digitadas:";
		 posicaoAleatoria = Math.round(Math.random()*quantidadePalavra);
		 selecionarPalavra = biblioteca[posicaoAleatoria];
		 tamanhoPalavraSorteada = selecionarPalavra.length;

		defineLetras(tamanhoPalavraSorteada);
		document.getElementById("msg").innerHTML="";

};

