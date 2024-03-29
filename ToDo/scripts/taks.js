// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.

//si existe un token guardalo
const jwt = JSON.parse(localStorage.getItem('jwt'));
console.log(jwt);

if ( ! jwt){ // si no existe el token vamos al login
location.replace('index.html');
}

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  
  const btnCerrarSesion = document.querySelector('#closeApp');
  const formCrearTarea = document.querySelector('.nueva-tarea');
  const userName = document.querySelector('.user-info p');
  obtenerNombreUsuario();
  consultarTareas();

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
   
    if(confirm('¿Desea salir de la App?') ){
      
      localStorage.removeItem('jwt');
      location.replace('index.html');
    }



  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    
      const endPoint = 'https://todo-api.ctd.academy/v1/users/getMe';
      
      const config = {
        method: 'GET',
        headers: {
          authorization: jwt
        }
      }

        fetch(endPoint,config)
        .then(resp => resp.json())
        .then(data => {

          const nombre = `${data.firstName} ${data.lastName}`;
        })


  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    
    const endPoint = 'https://todo-api.ctd.academy/v1/tasks';

    const config = {
      method: 'GET',
      headers: {
        authorization: jwt
      }
    }

      fetch(endPoint,config)
      .then(respo => respo.json())
      .then(data => {
        console.log(data);
        renderizarTareas(data);
      })
  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    
    event.preventDefault();

    const endPoint = 'https://todo-api.ctd.academy/v1/tasks';
    




  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {







  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   
    

    

  };

});