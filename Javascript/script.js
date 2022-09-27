function() {
    let edad;
    let sexo = prompt("Introduce masculino o femenino");
    const masculino = "masculino";
    const femenino = "femenino";
    edad = prompt("Introduce tu edad");
    if (edad >= 18 && sexo === masculino) {
        alert("Puedes entrar, eres mayor de edad.");
    } else {

        if (edad >= 20 && sexo === femenino) {
            alert("Puedes entrar, eres mayor de edad.");
        } else { alert("Eres menor de edad, ingresas a la pag bajo tu responsabilidad") }

    }
}