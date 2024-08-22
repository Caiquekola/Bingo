// Função para gerar a cartela de bingo
function gerarCartela() {
    let cartela = [];
    while (cartela.length < 24) {  // Bingo normalmente usa 24 números em uma cartela
        let numero = Math.floor(Math.random() * 75) + 1;
        if (!cartela.includes(numero)) {
            cartela.push(numero);
        }
    }
    return cartela;
}

// Função para exibir a cartela no HTML
function exibirCartela() {
    const cartela = gerarCartela();
    const tabela = document.getElementById('bingoTable');
    let linha = document.createElement('tr');

    for (let i = 0; i < cartela.length; i++) {
        const celula = document.createElement('td');
        celula.textContent = cartela[i];
        linha.appendChild(celula);

        if ((i + 1) % 5 === 0) {
            tabela.appendChild(linha);
            linha = document.createElement('tr');
        }
    }
    if (linha.children.length > 0) {
        tabela.appendChild(linha);
    }
}

// Lógica da barra lateral
var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    } else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSidebar() {
    if (showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if (window.innerWidth > 768 && showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
});

// Executa a função de exibir a cartela quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript carregado");
    exibirCartela();  // Gera e exibe a cartela de bingo
});
