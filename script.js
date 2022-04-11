let numeroCartas;
let carta;
let qtdCartas = [];
let cartasEscolhidas = [];
let cartasDiv = [];
let cartasCertas = [];
let jogadas = 0;

let cartas = [
    `<div class="cards" onclick="virandoCartas(this)">
            <div class="card"><img src="front.png" /></div>
            <div class="card back"><img src="bobrossparrot.gif" /></div>
    </div>`, 
    `<div class="cards" onclick="virandoCartas(this)">
            <div class="card"><img src="front.png" /></div>
            <div class="card back"><img src="bobrossparrot.gif" /></div>
    </div>`,
    `<div class="cards" onclick="virandoCartas(this)">
            <div class="card"><img src="front.png" /></div>
            <div class="card back"><img src="explodyparrot.gif" /></div>
    </div>`, 
    `<div class="cards" onclick="virandoCartas(this)">
            <div class="card"><img src="front.png" /></div>
            <div class="card back"><img src="explodyparrot.gif" /></div>
    </div>`, 
    `<div class="cards" onclick="virandoCartas(this)">
            <div class="card"><img src="front.png" /></div>
            <div class="card back"><img src="fiestaparrot.gif" /></div>
    </div>`, 
    `<div class="cards" onclick="virandoCartas(this)">
            <div class="card"><img src="front.png" /></div>
            <div class="card back"><img src="fiestaparrot.gif" /></div>
    </div>`, 
    `<div class="cards" onclick="virandoCartas(this)">
            <div class="card"><img src="front.png" /></div>
            <div class="card back"><img src="metalparrot.gif" /></div>
    </div>`, 
    `<div class="cards" onclick="virandoCartas(this)">
            <div class="card"><img src="front.png" /></div>
            <div class="card back"><img src="metalparrot.gif" /></div>
    </div>`, 
    `<div class="cards" onclick="virandoCartas(this)">
            <div class="card"><img src="front.png" /></div>
            <div class="card back"><img src="revertitparrot.gif" /></div>
    </div>`, 
    `<div class="cards" onclick="virandoCartas(this)">
            <div class="card"><img src="front.png" /></div>
            <div class="card back"><img src="revertitparrot.gif" /></div>
    </div>`, 
    `<div class="cards" onclick="virandoCartas(this)">
            <div class="card"><img src="front.png" /></div>
            <div class="card back"><img src="tripletsparrot.gif" /></div>
    </div>`, 
    `<div class="cards" onclick="virandoCartas(this)">
            <div class="card"><img src="front.png" /></div>
            <div class="card back"><img src="tripletsparrot.gif" /></div>
    </div>`, 
    `<div class="cards" onclick="virandoCartas(this)">
            <div class="card"><img src="front.png" /></div>
            <div class="card back"><img src="unicornparrot.gif" /></div>
    </div>`, 
    `<div class="cards" onclick="virandoCartas(this)">
            <div class="card"><img src="front.png" /></div>
            <div class="card back"><img src="unicornparrot.gif" /></div>
    </div>`
];



quantasCartas();

function quantasCartas() {
    numeroCartas = Number(prompt("Com quantas cartas você quer jogar?"));

    //numero de cartas aceito = par, de 4 a 14
    while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas%2 !== 0) {
        numeroCartas = Number(prompt("Com quantas cartas você quer jogar?"));
    }
    distribuicaoCartas();
}

function distribuicaoCartas() {
    for (let i = 0; i < numeroCartas; i++ ) {
        qtdCartas.push(cartas[i]);
    }
    embaralharCartas();
}

function embaralharCartas() {
    qtdCartas.sort(comparador);
    for (let i = 0; i < numeroCartas; i++) {
        let divCartas = document.querySelector(".game");
        divCartas.innerHTML += qtdCartas[i];
    }
}

function comparador() {
    return Math.random() - 0.5;
}

function virandoCartas(carta) {
        carta.querySelector(".card").classList.add("frontflip");
        carta.querySelector(".back").classList.add("backflip"); 
        cartasDiv.push(carta);
        cartasEscolhidas.push(carta.querySelector(".back>img"));
        
        if (cartasEscolhidas.length === 2) {
                setTimeout(verificarCartas, 1000)
        }

}



function verificarCartas() {
        if (cartasEscolhidas[0].src === cartasEscolhidas[1].src) {
                cartasCertas.push(cartasEscolhidas);
                
        } else {
                let cartaUm = cartasDiv[0];
                let cartaDois = cartasDiv[1];
                cartaUm.querySelector(".card").classList.remove("frontflip");
                cartaUm.querySelector(".back").classList.remove("backflip"); 
                cartaDois.querySelector(".card").classList.remove("frontflip");
                cartaDois.querySelector(".back").classList.remove("backflip"); 
        
        }

        cartasEscolhidas = [];
        cartasDiv = [];
        jogadas += 1;

        if (cartasCertas.length === numeroCartas/2) {
                alert(`Você ganhou em ${jogadas * 2} jogadas!`);
        }
}
