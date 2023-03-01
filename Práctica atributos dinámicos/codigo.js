//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
let tarjeta = document.getElementById("tarjeta")
tarjeta.classList.add("card");
//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
let iamgen = document.getElementById("logo")

iamgen.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png")
//3- Quitarle al titulo la clase que le está dando un formato feo
let titulo = document.getElementsByClassName("titulo-feo");

titulo[0].classList.remove("titulo-feo");

//4- Chequear si el link a youtube posee o no el atributo href
let linkYoutube = document.getElementById("link_youtube");

let tieneHref = linkYoutube.hasAttribute("href");
console.log(tieneHref)

//5- Obtener el href del link a wikipedia y mostrarlo por consola
let wiki = document.querySelector("#link_wikipedia");

let tienewiki = wiki.getAttribute("href");
console.log(tienewiki);
