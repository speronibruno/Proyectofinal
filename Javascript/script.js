/* Preguntar la edad */
let edad;
edad = parseInt(prompt("Bienvenido a la página oficial del CLub Social y Deportivo La Emilia por favor introduce tu edad"));
if (edad >= 18) {
    alert("Puedes ingresar, eres mayor de edad");
} else { alert("Eres menor de edad, ingresas a la pag. bajo tu responsabilidad") }

/*Preguntar para salir cuando hacemos click en la red social*/
function sali() {
    if (window.confirm("Esta seguro que desea abandonar el sitio")) {
        window.open("https://www.instagram.com/clublaemilia/", alert("Gracias por su visita!!"));
    }
    else {
        alert("Sigue Navegando en nuestra web ");
        window.open("index.html");

    }
}
function salf() {
    if (window.confirm("Esta seguro que desea abandonar el sitio")) {
        window.open("https://es-la.facebook.com/ClubSocialyDeportivoLaEmilia/", alert("Gracias por su visita!!"));
    }
    else {
        alert("Sigue Navegando en nuestra web ");
        window.open("index.html");

    }
}
function salw() {
    if (window.confirm("Esta seguro que desea abandonar el sitio")) {
        window.open("https://api.whatsapp.com/send?phone=3364214209&text=Para mas info sobre el club o cualquier duda que tengas comunicate via Whatsapp", alert("Gracias por su visita!!"));
    }
    else {
        alert("Sigue Navegando en nuestra web ");
        window.open("index.html");

    }
}
