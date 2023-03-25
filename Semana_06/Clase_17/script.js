const btn = document.querySelector('button');
const area = document.querySelector('.tarjetas');
const cantidad = document.querySelector('#cantidad');


/* -------------------------------------------------------------------------- */
/*       FUNCION 01 - Consulta datos de la API https://restcountries.com      */
/* -------------------------------------------------------------------------- */
// 1.Consulta datos de la API en el endpoint: https://restcountries.com/v3.1/all
// 2.Desactiva el Boton cuadno inicia la consulta asincrona y lo activa al Finalizar o si ocurrio algun error.
// 3.Llama a la función redenderizar()

let api = 'https://restcountries.com/v3.1/all';

btn.addEventListener('click', function(){

    
    fetch(api)
    .then(response => response.json())
    .then(paises =>{
        console.log(paises);
        let pais = paises;
        renderizar(pais);
    })
    .catch (error => {
        alert("Ocurrio un error");
        console.log(error);
        renderizar(pais);
    })
    .finally(()=>{
        btn.setAttribute('disabled');
    })
    
})



/* -------------------------------------------------------------------------- */
/*                         FUNCION 02 - Renderiza                             */
/* -------------------------------------------------------------------------- */
// 0. 
// 1. Renderiza cada card con el nombre del Pais y su Bandera
// 2. Indica la cantidad Paises
function renderizar(lista){
     
    area.innerHTML = '';

    lista.forEach(paises => {
        area.innerHTML += `
        <div>
                <h2>${paises.name.common} </h2>
                <img src="${paises.flags.png}" alt="${paises.name}">
            </div>
        `
    });

}