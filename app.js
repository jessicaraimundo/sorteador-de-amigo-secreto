let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo'); 
    let nomeAmigo = inputAmigo.value.trim(); // Remove espaços extras

    if (nomeAmigo === "") {
        alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nomeAmigo);
    
    // Atualiza a lista na tela
    listarAmigos(nomeAmigo);

    // Limpa o campo de entrada
    inputAmigo.value = '';
}

// Função para atualizar a lista de amigos na tela
function listarAmigos(nomeAmigo) {
    let listaAmigos = document.getElementById('listaAmigos');
    let novoItem = document.createElement("li");
    novoItem.textContent = nomeAmigo;
    listaAmigos.appendChild(novoItem);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let sorteioAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[sorteioAleatorio];

    // Exibir resultado na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O nome do seu amigo secreto é: <strong>${amigoSorteado}</strong></li>`;

    // 🎙️ Fala o nome do amigo secreto em voz alta
    let mensagem = `O nome do seu amigo secreto é ${amigoSorteado}`;
    responsiveVoice.speak(mensagem, "Brazilian Portuguese Female", { rate: 1.2 });

    // Log para depuração
    console.log("Índice sorteado:", sorteioAleatorio);
    console.log("Amigo sorteado:", amigoSorteado);
}

function novoJogo() {
    // Limpa a lista de amigos
    amigos = [];

    // Limpa a lista exibida na tela
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";

    // Limpa o campo de entrada
    document.getElementById('amigo').value = "";

    console.log("Novo jogo iniciado! Lista de amigos resetada.");
}
