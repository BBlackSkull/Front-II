window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
   const form = document.querySelector('form');
   const inputEmail = document.querySelector('#inputEmail');
   const inputPassword = document.querySelector('#inputPassword');
    



    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
       event.preventDefault();
       
       const settings = {

        email: inputEmail.value,
        password: inputPassword.value 

       }
        const config = {
            method :'POST',
            body: JSON.stringify(settings),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
        
        realizarLogin(config);


    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {

        const endPoint = 'https://todo-api.ctd.academy/v1/users/login';

        fetch(endPoint,settings)
        .then(response => response.json())
        .then((json)=>{ 
            console.log(json);
            if(json.jwt){
                console.log('Datos correctos');
                localStorage.setItem('jwt', JSON.stringify(json.jwt));

                location.replace('mis-tareas.html');
            }else {
                alert('Error' + json);
            }
        }) 
        .catch (error =>{
            console.log('ocurrio un error');
        })
        
       




        
    };


});