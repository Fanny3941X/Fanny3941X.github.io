let examen = document.querySelector("#tabla");
let formulario = document.querySelector("#formulario");
let numero = document.querySelector("#numero");
let error = document.querySelector("#error");
let numeros = [];

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let centinela = false;
    let msge = "";
    let ValorNumero = numero.value.trim();

    if (ValorNumero.length === 0) {
        msge += "El campo número no puede estar vacío.\n";
        centinela = true;
    }else if (isNaN(ValorNumero)) {
        msge += "El campo número debe contener un número.\n";
        centinela = true;
    }

    if (centinela) {
        error.innerHTML = msge;
    } else {
        error.innerHTML = "";
        numeros.push(parseInt(ValorNumero));
        examen.innerHTML = imprimir(numeros);
        limpiar();
    }
});

    let limpiar = () => {
        numero.value = "";
        numero.focus();
    };

let imprimir = (numeros) => {
    let msg ="<table class='table table-bordered'>";
    msg +="<thead><tr><th>No</th>"
    msg +="<th>Numero</th>";
    msg +="<th>Serie1</th>";
    msg +="<th>Serie2</th>";
    msg +="<th>Serie3</th>";
    msg +="</thead>";
    msg +="<tbody>";
    let i = 0;
        while (i < numeros.length) {
        msg += "<tr>";
        msg += `<td>${i + 1}</td>`;
        msg += `<td>${numeros[i]}</td>`;
        msg += `<td>${Serie1(numeros[i])}</td>`;
        msg += `<td>${Serie2(numeros[i])}</td>`;
        msg += `<td>${Serie3(numeros[i])}</td>`;
        msg += "</tr>";
        i++;
}

    msg +="</tbody>";
    msg +="</table>";
    return msg;

}; 

   
    examen.innerHTML = imprimir(numeros);
