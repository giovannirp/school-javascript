const bodyBox = document.querySelector("#box");

const exibeBox = (id, titulo, mensagem) => {
    const divLinha = document.createElement("div");
    divLinha.classList.add("cardBox");
    const conteudoBox = `
        <strong>${titulo}</strong>
        <div>${mensagem}</div>
    `;

    divLinha.innerHTML = conteudoBox;
    return divLinha;
}

listaBox().then(mostra => {
    mostra.forEach(indice => {
        bodyBox.appendChild(exibeBox(indice.id, indice.titulo, indice.mensagem));
    })
})