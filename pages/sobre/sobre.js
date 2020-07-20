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