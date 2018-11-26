function Sprite(x, y, largura, altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas, yCanvas){
        debugger
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas,this.largura, this.altura);

    }
}

var bg = new Sprite(0,0,600,600);
var cube = new Sprite(700,109,50,50);