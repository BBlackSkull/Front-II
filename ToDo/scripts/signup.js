window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
   
    const form = document.querySelector('form');
    const inputNombre = document.querySelector('#inputNombre');
    const inputApellido = document.querySelector('#inputApellido');
    const inputEmail = document.querySelector('#inputEmail')
    const inputPassword = document.querySelector('#inputPassword');
    const inputPasswordRepetida = document.querySelector('#inputPasswordRepetida')

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
      event.preventDefault();

        console.log ('Enviando...')

        if(inputPassword.value === inputPasswordRepetida.value) { 

        const datos = {
            firstName : inputNombre.value,
            lastName : inputApellido.value,
            email : inputEmail.value,
            password : inputPassword.value,
            
        }
        
        
        const config = {
            method :'POST',
            body: JSON.stringify(datos),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        }

       realizarRegister(config);
        


    }   else {
        alert('Las contraseñas son distintas');
} 

    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(settings) {
        
        const endPoint = 'https://todo-api.ctd.academy/v1/users';


        

        fetch(endPoint,settings )
        .then(response => response.json())
        .then((json)=>{
            console.log(json)
            if(json.jwt ){
                //guardo en localstorage el token
                localStorage.setItem('jwt', JSON.stringify(json.jwt));
                location.replace('mis-tareas.html')
            } else {

                 alert('Algunos datos son incorrectos. ')
            }
        }) 
        .catch (error =>{
            console.log('ocurrio un error', error);
        })


    };


});