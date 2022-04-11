let numeroCartas;
let qtdCartas = [];

let cartas = [
    `<div class="cards">
            <div class="card front"><img src="front.png" /></div>
            <div class="card back"><img src="bobrossparrot.gif" /></div>
    </div>`, 
    `<div class="cards">
            <div class="card front"><img src="front.png" /></div>
            <div class="card back"><img src="bobrossparrot.gif" /></div>
    </div>`,
    `<div class="cards">
            <div class="card front"><img src="front.png" /></div>
            <div class="card back"><img src="explodyparrot.gif" /></div>
    </div>`, 
    `<div class="cards">
            <div class="card front"><img src="front.png" /></div>
            <div class="card back"><img src="explodyparrot.gif" /></div>
    </div>`, 
    `<div class="cards">
            <div class="card front"><img src="front.png" /></div>
            <div class="card back"><img src="fiestaparrot.gif" /></div>
    </div>`, 
    `<div class="cards">
            <div class="card front"><img src="front.png" /></div>
            <div class="card back"><img src="fiestaparrot.gif" /></div>
    </div>`, 
    `<div class="cards">
            <div class="card front"><img src="front.png" /></div>
            <div class="card back"><img src="metalparrot.gif" /></div>
    </div>`, 
    `<div class="cards">
            <div class="card front"><img src="front.png" /></div>
            <div class="card back"><img src="metalparrot.gif" /></div>
    </div>`, 
    `<div class="cards">
            <div class="card front"><img src="front.png" /></div>
            <div class="card back"><img src="revertitparrot.gif" /></div>
    </div>`, 
    `<div class="cards">
            <div class="card front"><img src="front.png" /></div>
            <div class="card back"><img src="revertitparrot.gif" /></div>
    </div>`, 
    `<div class="cards">
            <div class="card front"><img src="front.png" /></div>
            <div class="card back"><img src="tripletsparrot.gif" /></div>
    </div>`, 
    `<div class="cards">
            <div class="card front"><img src="front.png" /></div>
            <div class="card back"><img src="tripletsparrot.gif" /></div>
    </div>`, 
    `<div class="cards">
            <div class="card front"><img src="front.png" /></div>
            <div class="card back"><img src="unicornparrot.gif" /></div>
    </div>`, 
    `<div class="cards">
            <div class="card front"><img src="front.png" /></div>
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
        let divCartas = document.querySelector(".game")
        divCartas.innerHTML += qtdCartas[i];
    }
}

function comparador() {
    return Math.random() - 0.5;
}

function virandoCarta() {
    cartas = qtdCartas;
    cartas.addEventListener('click', function () {
        cartas.classList.add('flipped');
    })
}