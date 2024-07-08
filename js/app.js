let participantes = [];
let numerosSorteados = [];
let amigosIncluidos =  document.getElementById("lista-amigos");
let listaSorteio = document.getElementById("lista-sorteio");

function adicionar(){
    let novoParticipante = document.getElementById("nome-amigo").value;
    amigosIncluidos.textContent += novoParticipante + " ";
    participantes.push(novoParticipante);
    document.getElementById("nome-amigo").value = "";
}

function sortear(){
    numerosSorteados = [];    
    for(let i = 0; i < participantes.length; i++){
        listaSorteio.innerHTML += `<p>${participantes[i]} -> ${participantes[NumeroAleatorioNaoSorteado(i)]}</p>`;        
    }
}

function reiniciar(){
    participantes = [];
    amigosIncluidos.textContent = " ";
    listaSorteio.textContent = "";
}

function NumeroAleatorioNaoSorteado(i){
    let indiceAleatorio = Math.floor(Math.random() * participantes.length);
    while(participantes[i]==participantes[indiceAleatorio] || numerosSorteados.includes(indiceAleatorio)){
        indiceAleatorio = Math.floor(Math.random() * participantes.length);
    }
    numerosSorteados.push(indiceAleatorio);
    return indiceAleatorio;
}