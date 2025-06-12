espe = ["Clínica Médica", "Pediatría", "Dermatología", "Cardiología", "Ginecología"]
let rotacion = 0;

function cargarSelect() {
    var select = document.getElementsByName("especialidad")[0];
    for (let i = 1; i < espe.length; i++) {
        var opt = document.createElement("option");
        opt.text = espe[i];
        opt.value = espe[i];
        select.add(opt); 
    }
}


function calcular() {
    var nombre = document.getElementById("nombre").value.trim();
    var motivo = document.getElementById("motivo").value.trim();
    var primeraVez = document.getElementById("check1").checked;
    var esp = document.getElementById("check2").checked;
    var especialidad = document.getElementsByName("especialidad")[0].value;

    if (!nombre || !motivo || !especialidad || (!primeraVez && !esp)) {
        window.alert("Por favor, complete todos los campos y marque ambas casillas.");
        return false;
    } else {
        window.alert(
            "¡Turno solicitado correctamente!\n" +
            "Nombre: " + nombre +
            "\nMotivo: " + motivo +
            "\nEspecialidad: " + especialidad
        );
        return true;
    }
}

function abrirVentanaFechas(inicio, cierre) {
    var opciones = "left=100,top=100,width=650,height=350,toolbar=yes,menubar=yes";
    var ventana = window.open('', '', opciones);

    var contenido = "<html><head><title>Verificación de Fechas</title>";
    contenido += "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css' rel='stylesheet'>";
    contenido += "</head><body class='container p-4 bg-secondary text-white'>";
    contenido += "<center><h2>Verificación de Fechas</h2><br/>";
    contenido += "<p><b>Fecha de inicio:</b> " + inicio + "</p>";
    contenido += "<p><b>Fecha de cierre:</b> " + cierre + "</p>";
    contenido += "<div class='alert alert-success mt-3'>¡Las fechas son válidas!</div>";
    contenido += "</center></body></html>";

    ventana.document.write(contenido);
    ventana.document.close();
}


function verificarFechas() {
    var inicio = document.getElementById("fechaInicio").value;
    var cierre = document.getElementById("fechaCierre").value;

    if (!inicio || !cierre) {
        alert("Por favor, complete ambas fechas.");
        return false;
    }
    if (inicio > cierre) {
        alert("La fecha de inicio no puede ser posterior a la fecha de cierre.");
        return false;
    }
    return true;
}

function calcular1() {
    var inicio = document.getElementById("fechaInicio").value;
    var cierre = document.getElementById("fechaCierre").value;
    if (verificarFechas()) {
        abrirVentanaFechas(inicio, cierre);
    }
}

function modificarTexto() {
    const texto = document.getElementById("texto");
    texto.innerText = "¡El texto ha sido cambiado!";
}

function cambiarTamaño() {
    const texto = document.getElementById("texto");
    if (texto.style.fontSize === "35px") {
        texto.style.fontSize = "20px";
    } else {
        texto.style.fontSize = "35px";
    }
}

function cambiarColorTextp() {
    const texto = document.getElementById("texto");
    if (texto.style.color === "red") {
        texto.style.color = "#333";
    } else {
        texto.style.color = "red";
    }
}

function cambiarTamañoImagen() {
  const img = document.getElementById('img');
  if (img.style.width === "400px") {
    img.style.width = "200px";
  } else {
    img.style.width = "400px";
  }
}

function cambiarImagen() {
  const img = document.getElementById('img');
  if (img.src.includes("/img/cod.jpg")) {
    img.src = "/img/gta.jpg";
  } else {
    img.src = "/img/cod.jpg";
  }
}

function alternarVisibilidad() {
  const img = document.getElementById('img');
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}

function rotarImagen() {
    const img = document.getElementById('img');
    rotacion += 90;
    img.style.transform = `rotate(${rotacion}deg)`;
    img.style.transition = "transform 0.6s";
}

function cambiarColor() {
    const fondo = document.getElementById("formulario2");
    if (fondo.style.background === "rgb(255, 255, 255)" || fondo.style.background === "") {
        fondo.style.background = "rgb(255, 100, 100)"
    } else {
        fondo.style.background = "rgb(255, 255, 255)";
    }
}

function imagenFondo() {
    const img = document.getElementById("formulario2");
    if (img.style.backgroundImage) {
        img.style.backgroundImage = ""
        img.style.backgroundSize = "";
        img.style.backgroundPosition = "";
    }
    else {
        img.style.backgroundImage = "url('/img/kratos.jpg')";
        img.style.backgroundSize = "cover";
        img.style.backgroundPosition = "center";
    }
}

function cambiarBordes() {
    const c = document.getElementById("formulario2");
    if (c.style.border === "3px solid black") {
        c.style.border = "10px solid red";
    } else {
        c.style.border = "3px solid black";
    }
}



