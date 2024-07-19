let tabla = document.querySelector("#tabla");
let formulario = document.querySelector("#quadratic-form");
let coefA = document.querySelector("#coefA");
let coefB = document.querySelector("#coefB");
let coefC = document.querySelector("#coefC");
let error = document.querySelector("#error");
let volverBtn = document.querySelector("#back-button");


formulario.addEventListener('submit', (event) => {
    event.preventDefault();

 
    error.innerHTML = "";

   
    let valid = true;

    let num1 = coefA.value.trim();
    let num2 = coefB.value.trim();
    let num3 = coefC.value.trim();

    if (num1.length === 0 || isNaN(num1)) {
        error.innerHTML = "Debe ingresar un número válido para A";
        valid = false;
    }
    if (num2.length === 0 || isNaN(num2)) {
        error.innerHTML = "Debe ingresar un número válido para B";
        valid = false;
    }
    if (num3.length === 0 || isNaN(num3)) {
        error.innerHTML = "Debe ingresar un número válido para C";
        valid = false;
    }

    if (valid) {
      
        let a = parseFloat(num1);
        let b = parseFloat(num2);
        let c = parseFloat(num3);

        let resultado = ecuacion(a, b, c);

       
        if (resultado.discriminante >= 0) {
            imprimir(a, b, c, resultado.valorx1, resultado.valorx2);
        } else {
            mostrarMensaje();
        }

       
        limpiar();

        
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';
    }
});


let limpiar = () => {
    coefA.value = "";
    coefB.value = "";
    coefC.value = "";
}


let ecuacion = (a, b, c) => {
    let discriminante = Math.pow(b, 2) - 4 * a * c;
    if (discriminante > 0) {
        let raiz = Math.sqrt(discriminante);
        let valorx1 = ((-b + raiz) / (2 * a));
        let valorx2 = ((-b - raiz) / (2 * a));
        return { discriminante, valorx1, valorx2 };
    } else if (discriminante == 0) {
        let valorx1 = (-b / (2 * a));
        return { discriminante, valorx1, valorx1 };
    } else {
        return { discriminante };
    }
}


let imprimir = (a, b, c, valorx1, valorx2) => {
    let msg = "<table class='table table-bordered table-striped'>";
    msg += "<thead class='table-header-purple'>";
    msg += "<tr><th>a</th><th>b</th><th>c</th><th>x1</th><th>x2</th></tr>";
    msg += "</thead>";
    msg += "<tbody>";
    msg += `<tr><td>${a}</td><td>${b}</td><td>${c}</td><td>${valorx1}</td><td>${valorx2}</td></tr>`;
    msg += "</tbody></table>";

    tabla.innerHTML = msg;
}


let mostrarMensaje = () => {
    let msg = "<h1>La ecuación no se puede resolver porque la raiz es negativa. <br>Intentalo de nuevo</h1>";
    tabla.innerHTML = msg;
}


volverBtn.addEventListener('click', () => {
  
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('form-container').style.display = 'block';
});