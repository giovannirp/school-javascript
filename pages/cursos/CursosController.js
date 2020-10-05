class CursosController {

    constructor() {
        this._corpoCursos = document.querySelector("#cursos");
        this.initialize();

    }

    initialize() {
        // const corpoCursos = document.querySelector("#cursos");
        this.exibeCursos();
        this._corpoCursos.appendChild(this.exibeCursos())
   
    }   

    exibeCursos = (men) => {
        const divLinha = document.createElement('div');
        const conteudoCursos = `
            <div><strong>testetetet</strong></div>
        `;
    
        divLinha.innerHTML = conteudoCursos;
        return divLinha;
    }
}