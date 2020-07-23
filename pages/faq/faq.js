const sobre = document.querySelector("#faq");
const ajuda = document.getElementsByClassName("ajuda");

const exibeFaq = (id, titulo, informacao) => {
    const linhaFaq = document.createElement("div");
    const conteudoSobre = `
        <div><strong class="titulo">${titulo}</strong></div>
        <div>${informacao}</div>
        <br />
    `;

    linhaFaq.innerHTML = conteudoSobre;
    return linhaFaq;
}

listaFaq().then(exibe => {
    exibe.forEach((indice, index) => {
        sobre.appendChild(exibeFaq(indice.id, indice.titulo, indice.informacao));
    })
})