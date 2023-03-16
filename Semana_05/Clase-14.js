window.addEventListener('load', function(){
    console.log('Cargo la Pagina');
    let usuario = localStorage.getItem('usuario');

    usuario = JSON.parse(usuario);
    console.log(usuario);
});



// FUNCION PARA
// 1. Con los dato obtenidos del localSorage mostrar los datos en DOM
// 2. Crea un boton cerrar sesion el cual elimina los datos de localStorage

function datosUsuarioDom(usuario){

    let email = document.querySelector('#email');
    let perfil = document-querySelector('#perfil');
    console.log(email);

    email.innerHTML += usuario.email;

    perfil.innerHTML += usuario.rol

}

function botonCerrar(){

    let div = document.querySelector('.user');

        div.innerHTML+= `
        <button id="cerrar"> Cerrar Sesion </button>

        `

        let cerrar = document.querySelector('#cerrar');
        cerrar.addEventListener('click', function(){
            localStorage.removeItem('usuario');
            location.herf = 'index.html';
        })

}