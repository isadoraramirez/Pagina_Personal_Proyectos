// function limpiarSelect(){
//   listQuestion.innerHTML = "";
// }
// function setearCiudad(ciudad){
//   listQuestion.dataset.ciudad =  ciudad;
// }
// const para desplegar menu
const navIcon = document.getElementById("nav-icon");
const navMenu = document.getElementById("nav-menu");
// const para opciones de menu 
const btnAbout = document.getElementById("btn-about");
const btnNews = document.getElementById("btn-news");
const btnFilters = document.getElementById("btn-general-filter");
//para informacion mostrada 
const news = document.getElementById("news");
const about = document.getElementById("about");
const filters = document.getElementById("general-filter");
//evento para ocultar y mostrar elementos
navIcon.addEventListener('click', () => {
navMenu.classList.toggle('ocultar'); 
});
btnAbout.addEventListener('click', () => {
  about.classList.remove('ocultar');
  filters.classList.add('ocultar');
  navMenu.classList.add('ocultar');
  news.classList.add('ocultar');
});
btnNews.addEventListener('click', () => {
  about.classList.add('ocultar');
  filters.classList.add('ocultar');
  navMenu.classList.add('ocultar');
  news.classList.remove('ocultar');
});
btnFilters.addEventListener('click', () => {
  about.classList.add('ocultar');
  filters.classList.remove('ocultar');
  navMenu.classList.add('ocultar');
  news.classList.add('ocultar');
});
window.onload = function cargar(){
  filters.classList.remove('ocultar');
}
//acceder a la data de cada pais
// const data = window.WORLDBANK;


// section donde esta la informacion y el select
const indicator = document.getElementById("information-filter-inner");
const listQuestion = document.getElementById("list-question");

// ejecutar el llenado del selector dependiendo del país
const buttonTypes = Array.from(document.getElementsByClassName('search-country'));
//console.log(buttonTypes);
for (let boton in buttonTypes){
  buttonTypes[boton].addEventListener('click',(e) =>{
    e.preventDefault() //e.target()
    let paisElegido = data[e.target.dataset.ciudad].indicators;
    listQuestion.innerHTML = "";
    listQuestion.dataset.ciudad = e.target.dataset.ciudad;
    listQuestion.insertAdjacentHTML('beforeend', '<option value="">Selecciona un tema</option>'); 
    paisElegido.forEach( ciudad => {
    listQuestion.insertAdjacentHTML('beforeend', `<option value="${ciudad.indicatorCode}">${ciudad.indicatorName}</option>`);
    });

  })
}



