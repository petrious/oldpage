var canvas, ctx, ALTURA, LARGURA, frames = 0, velocidade = 6, record;

var img;

var sons = [];

sons[0] = new Audio("../audio/pulo.mp3");
sons[1] = new Audio("../audio/perdeu.mp3");
sons[2] = new Audio("../audio/ambientedurante.mp3");

var estadoAtual;

var estados = {
	jogar: 0,
	jogando: 1,
	perdeu: 2,
	pausado: 3
};

var maxPulos = 2;
var floor = {
	y: 550,
	altura: 50,
	cor: "black",
	desenha: function () {
		ctx.fillStyle = this.cor;
		ctx.fillRect(0, this.y, LARGURA, this.altura);
	}
};

var person = {
	x: 50, // Initial x-coordinate
	y: 0, // Initial y-coordinate
	altura: cube.altura,
	largura: cube.largura,
	// altura: 50,
	// largura: 50,
	cor: "blue",
	gravidade: 1.8,
	velocidade: 0,
	radius: 50,
	forcaDoPulo: 30,
	quantidadePulos: 0,
	score: 0,

	atualiza: function () {
		this.velocidade += this.gravidade;
		this.y += this.velocidade;
		if (this.y > (floor.y - this.altura) && estadoAtual != estados.perdeu) {
			this.y = floor.y - this.altura;
			this.quantidadePulos = 0;
			this.velocidade = 0;
		}

	},

	pula: function () {
		sons[0].play();
		if (estadoAtual == estados.jogando) {
			if (this.quantidadePulos < maxPulos) {
				this.velocidade = - this.forcaDoPulo;
				this.quantidadePulos++;
			}
		}

	},

	reset: function () {
		this.velocidade = 0;
		this.y = 0;
		if (this.score > record) {
			localStorage.setItem("record", this.score);
			record = this.score;
		}
		this.score = 0;

	},
	desenha: function () {

		// ctx.fillStyle = this.cor;
		// ctx.fillRect(this.x, this.y, this.largura, this.altura);

		cube.desenha(this.x, this.y);

	},
};

var obstaculos = {
	_obs: [],
	tempoInsere: 0,

	insere: function () {
		this._obs.push({
			x: LARGURA,
			largura: 50,
			altura: 30 + Math.floor(120 * Math.random()),
			cor: "black"
		});
		this.tempoInsere = 30 + Math.floor(21 * Math.random());
	},

	atualiza: function () {
		if (this.tempoInsere == 0) {

			this.insere();
		}
		else {
			this.tempoInsere--;
		}
		tam = this._obs.length;
		for (var i = 0; i < tam; i++) {
			var obs = this._obs[i];
			obs.x -= velocidade;
			if (person.x < obs.x + obs.largura && person.x + person.largura >= obs.x && person.y + person.altura >= floor.y - obs.altura) {
				sons[1].play();
				estadoAtual = estados.perdeu;
			}

			else if (obs.x == 0) {
				person.score++;
			}
			else if (obs.x <= -obs.largura) { // remove o obj para ele nao ficar descontinuando eternament
				this._obs.splice(i, 1);
				tam--;
				i--;
			}
		};
	},

	limpa: function () {
		this._obs = [];
	},
	desenha: function () {
		tam = this._obs.length;

		for (var i = 0; i < tam; i++) {
			var obs = this._obs[i];
			ctx.fillStyle = obs.cor;
			ctx.fillRect(obs.x, floor.y - obs.altura, obs.largura, obs.altura);
		}
	}
};


function desenha() {

	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, LARGURA, ALTURA);

	bg.desenha(0, 0);



	ctx.fillStyle = "#fff";
	ctx.font = "15px Arial";
	ctx.fillText("Score", 25, 25);

	ctx.fillStyle = "#fff";
	ctx.font = "50px Arial";
	ctx.fillText(person.score, 30, 68);

	floor.desenha();
	person.desenha();

	if (estadoAtual == estados.jogar) {
		ctx.fillStyle = "green";
		ctx.fillRect(LARGURA / 2 - 50, ALTURA / 2 - 50, 100, 100);

		ctx.fillStyle = "white";
		ctx.fillText("Jogar", LARGURA / 2 - 65, ALTURA / 2 - 65);
	}
	else if (estadoAtual == estados.perdeu) {
		ctx.fillStyle = "red";
		ctx.fillRect(LARGURA / 2 - 50, ALTURA / 2 - 50, 100, 100);

		ctx.save();
		ctx.translate(LARGURA / 2, ALTURA / 2);
		ctx.fillStyle = "#fff";
		// ctx.measureText(person.score).width/2;
		if (person.score > record)
			ctx.fillText("Novo Record!", -150, -90);
		else
			ctx.fillText("Record " + record, -105, -90);
		if (person.score < 10) {
			ctx.fillText(person.score, -13, 19);
		}
		else if (person.score >= 10 && person.score < 100) {
			ctx.fillText(person.score, -26, 19);
		}
		else
			ctx.fillText(person.score, -39, 19);
		ctx.restore();
	}
	else if (estadoAtual == estados.jogando) {
		obstaculos.desenha();
	}
	else if (estadoAtual == estados.pausado) {

		ctx.fillStyle = "white";
		ctx.fillText("Pausado", LARGURA / 2 - 98, ALTURA / 2 - 65);

		ctx.fillStyle = "grey";
		ctx.fillRect(LARGURA / 2 - 50, ALTURA / 2 - 50, 100, 100);
		obstaculos.desenha();

	}

};

function roda() {
	atualiza();
	desenha();

	window.requestAnimationFrame(roda);
	//aqui fica o loop do desenho
	//setInterval é obsoleto pois animationFrame gasta menos processamento e tem melhores animações
};

function atualiza() {
	frames++;
	person.atualiza();

	if (estadoAtual == estados.jogando) {
		obstaculos.atualiza();
	}
};

function clique(ev) {
	if (estadoAtual == estados.jogar)
		estadoAtual = estados.jogando;
	else if (estadoAtual == estados.jogando)
		estadoAtual = estados.pausado;
	else if (estadoAtual == estados.pausado)
		estadoAtual = estados.jogando;
	else if (estadoAtual == estados.perdeu) {
		estadoAtual = estados.jogar;
		obstaculos.limpa();
		person.reset();
	}
};

function checkKeyPressed(e) {
	debugger
	if (e.keyCode == "38" || e.keyCode == "87") {
		person.pula();
	}
	else if (e.keyCode == "80") {
		if (estadoAtual == estados.jogando)
			estadoAtual = estados.pausado;
		else
			estadoAtual = estados.jogando;
	}
	else if (e.keyCode == "32") {
		if (estadoAtual == estados.jogar)
			estadoAtual = estados.jogando;
		else if (estadoAtual == estados.perdeu) {
			estadoAtual = estados.jogar;
			obstaculos.limpa();
			person.reset();
		}

	}
};

function main() {
	canvas = document.createElement("canvas");
	ALTURA = window.innerHeight;
	LARGURA = window.innerWidth;
	ctx = canvas.getContext("2d");
	document.addEventListener("mousedown", clique);
	window.addEventListener("keydown", checkKeyPressed, false);

	if (LARGURA >= 500) {
		LARGURA = 600;
		ALTURA = 600;
	}

	canvas.width = LARGURA;
	canvas.height = ALTURA;
	canvas.style.border = "1px solid #000"

	document.body.appendChild(canvas);

	record = localStorage.getItem("record");
	if (record == null)
		record = 0;

	estadoAtual = estados.jogar;
	img = new Image();
	// img.src= "../img/cube.png";
	img.src = "../img/sheet.png";
	// img.src= "https://i.imgur.com/X5rGkBV.png";
	roda();
}

main();
