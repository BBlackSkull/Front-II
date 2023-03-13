/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

 function obtenerDatosDelUsuario() {
//   /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  
   let nombre;
  do {   nombre = prompt('Cual es tu nombre?');
 
 } while(nombre == null || nombre == "" || nombre.length < 3){}

let anoNacimiento;

  let anoActual = new Date().getFullYear();
  do {
    anoNacimiento = prompt('Cual es tu año de nacimiento?');
  } while(isNaN(anoNacimiento));

  let edad = parseInt( anoActual - anoNacimiento);
 
  let ciudad;
 do{  
  ciudad = prompt('En que ciudad vives?');
} while(!isNaN(ciudad) || ciudad == null || ciudad.length < 3);

 let dev = confirm('Te interesa javaScript?');
 
if(dev == true ){
  dev = "Si";
}else {
  dev = "No";
}
 datosPersona.nombre = nombre;
 datosPersona.ciudad = ciudad;
 datosPersona.edad = edad;
 datosPersona.interesPorJs = dev;


}



function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  const datosDev = document.querySelector('.card-header');
  
  datosDev.innerHTML = '';
  
  datosDev.innerHTML += ` 
      <h3>Nombre: <span>${datosPersona.nombre}</span></h3>
      <h3>Edad: <span>${datosPersona.edad}</span></h3>
      <h3>Ciudad: <span>${datosPersona.ciudad}</span></h3>
      <h3>Interes en Javascript: <span>${datosPersona.interesPorJs}</span></h3>
    `
  ;


}



function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  

  const cardHeader = document.querySelector('#fila')

  cardHeader.innerHTML = '';

  listado.forEach(element => {
    
    cardHeader.innerHTML += `

    <div class='caja'> <img src="${ element.imgUrl}"  alt="${element.imgUrl}">
    <p class='lenguajes'> Lenguajes: ${element.lenguajes} </p>
    <p class='bimestre'> Bimestre: ${element.bimestre} </p>
    </div>
    
    `
  });




}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 const sitio = document.querySelector('#sitio')
 sitio.classList.toggle('dark')


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let textoOculto = document.querySelector('#sobre-mi')


document.addEventListener('keydown', function (event){

  if(event.key === "f" || event.key === "F"){
    textoOculto.classList.remove('oculto')
  };

});