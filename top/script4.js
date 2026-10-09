 class ObraDeArte{
    constructor(titulo, descricao, imagem, descImagem){
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
        this.descImagem = descImagem;
    }

}

const container = document.querySelector('.todosCards');
//console.log(container);

fetch('/api/lista')
    .then((data)=> data.json())
    .then((json)=> {
        json.forEach(game => {
            container.innerHTML += `
            <div class = "card">
            <div class = "texto">
                <h3 id="titulo">${game.nome_titulo}</h3>
                <p>${game.descricao}</p>
            </div>
            <div class = "img">
                <img src="${game.imagem}" alt="${game.descImagem}">
            </div>        
        </div>
            `;
        });
    })
    .catch((err)=>console.log(err));

    

    form.addEventListener('submit', function(o) {
        e.preventDefault();
        const novaObra = new ObraDeArte(t, desc, img, alt);

        fetch('/api/lista', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(novaObra)
        })
        .then(() => {
            window.location.href = 'index.html'
        })
    })





