const endpointPersonajes = "https://rickandmortyapi.com/api/character"
const containerCards = document.querySelector(".cards");

const pedirInfo = () =>{
    fetch(endpointPersonajes)
    .then((res) => res.json())
    .then((data) =>{
        crearTarjeta(data.results);
    })
}

pedirInfo();


const crearTarjeta = (data) =>{

    const mostrarEnHtml = data.reduce((acc, curr) =>{

        return acc + 
        `<div class="card">
            <div class="container-img">
                <img id="img-personaje" src="${curr.image}" alt="">
            </div>
            <div class="info-personaje">
                <p id="nombre-personaje">Nombre: ${curr.name}</p>
                <p id="status-personaje">Status: ${curr.status}</p>
            </div>
        </div>
        `
    }, "");

    containerCards.innerHTML = mostrarEnHtml
};

pedirInfo();

const formBuscador = document.querySelector("#form-buscador");
const inputBuscador = document.querySelector("#buscador");

const buscarPersonajes = (busqueda) =>{
    fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
    .then((res) => res.json())
    .then((data) =>{
        crearTarjeta(data.results);
    })
}

formBuscador.onsubmit = (e) =>{
    e.preventDefault();
    buscarPersonajes(inputBuscador.value)
}
