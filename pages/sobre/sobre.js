//window.sobre = new SobreController();
const bodySobre = document.querySelector("#sobre");

const exibeSobre = (id, titulo, imagePath, mensagem) => {
    const divLinha = document.createElement("div");
    const conteudoSobre = `
        <div><strong>${titulo}</strong></div><br />
        <div>${mensagem}</div>
    `;

    divLinha.innerHTML = conteudoSobre;
    return divLinha;
}

listarSobre().then(exibe => {
    exibe.forEach(indice => {
        bodySobre.appendChild(exibeSobre(indice.id, indice.titulo, indice.imagePath, indice.mensagem))
    })
})

/************** Informação ***********/
const informacao = document.querySelector("#informacao");
const accordion = document.getElementsByClassName("accordion");

const informacaoSobre = (id, descricao, empresa, mensagem) => {
    const divLinhaInforcao = document.createElement("div");
    const conteudoInformcao = `
        <button class="accordion">${descricao}</button>
        <div class="painel">
            <p>${mensagem}</p>
        </div>
    `;

    divLinhaInforcao.innerHTML = conteudoInformcao;
    return divLinhaInforcao;
}

//informacao.appendChild(informacaoSobre());

listaInforcao().then(info => {
    info.forEach((item, index) => {
        informacao.appendChild(informacaoSobre(item.id, item.descricao, item.empresa, item.mensagem))
        console.log(item, index)
        accordion[index].addEventListener("click", event => {
            accordion[index].classList.toggle("active");
            const painel = accordion[index].nextElementSibling;

            if(painel.style.display === "block") {
                painel.style.display = "none";
            } else {
                painel.style.display = "block";
            }

        })
    })
})
