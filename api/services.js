const listarSobre = () => {
    return fetch("http://localhost:3000/sobre")
    .then(res => {
        return res.json();
    })

    .then(json => {
        return json;
    })

}

const listaInforcao = () => {
    return fetch("http://localhost:3000/informacao")
    .then(res => {
        return res.json();
    })
    .then(json => {
        return json;
    })
}

const listaFaq = () => {
    return fetch("http://localhost:3000/faq")
    .then(res => {
        return res.json();
    })
    .then(json => {
        return json;
    })
}

const listaBox = () => {
    return fetch("http://localhost:3000/box")
    .then(res => {
        return res.json();
    })
    .then(json => {
        return json;
    })
}