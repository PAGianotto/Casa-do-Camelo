const formulario = document.getElementById('gamesformulario');
const colecao = document.getElementById('colecao');

// Verificação inicial: busca os dados ou cria um array vazio
let galeria = JSON.parse(localStorage.getItem('galeria')) || [];

// Função para desenhar os cards na tela
function renderizarGaleria() {
    colecao.innerHTML = ""; // Limpa a tela para não duplicar
    
    // O segundo parâmetro do forEach (index) nos dá a posição de cada jogo (0, 1, 2...)
    galeria.forEach((game, index) => {
        const novoCard = `
            <div class="card">
                <div class="texto">
                    <h3>${game.nome_titulo}</h3>
                    <img src="${game.descrição}" alt="${game.nome_titulo}" style="max-width: 200px; display:block; margin-bottom:10px;">
                    <button onclick="deletarGame(${index})" style="background-color: #ff4d4d; color: white; border: none; padding: 5px 10px; cursor: pointer;">Deletar</button>
                </div>
            </div>
            <hr>
        `;
        colecao.innerHTML += novoCard;
    });
}

// Função responsável por deletar o jogo
function deletarGame(index) {
    // 1. Remove 1 elemento a partir da posição 'index' no array
    galeria.splice(index, 1);

    // 2. Atualiza o LocalStorage com o array agora sem o item deletado
    localStorage.setItem('galeria', JSON.stringify(galeria));

    // 3. Redesenha a tela para sumir com o card
    renderizarGaleria();
}

// Executa ao carregar a página
renderizarGaleria();

function alterarFundo(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const novo = {
        nome_titulo: document.getElementById('nome').value,
        descrição: document.getElementById('description').value,
    };

    galeria.push(novo);
    localStorage.setItem('galeria', JSON.stringify(galeria));

    renderizarGaleria();
    formulario.reset();
});