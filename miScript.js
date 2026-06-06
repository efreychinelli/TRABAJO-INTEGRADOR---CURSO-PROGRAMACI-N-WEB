//funciones login//

function validarLogin() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let usuarioCorrecto = "nicolas";
    let passwordCorrecta = "12345";

    if(usuario === usuarioCorrecto && password === passwordCorrecta) {
        window.location.href = "home.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

//funciones formulario//

function enviarCompra() {

    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let email = document.getElementById("email").value;
    let ciudad = document.getElementById("ciudad").value;
    let codigopostal = document.getElementById("codigopostal").value;
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;


    if(nombre === "") {
        alert("Por favor, completá tu nombre completo");
        return;
    }

    if(direccion === "") {
        alert("Por favor, completá tu dirección");
        return;
    }

    if(email === "") {
        alert("Por favor, ingresá tu correo electrónico");
        return;
    }

    if(ciudad === "") {
        alert("Por favor, ingresá tu ciudad");
        return;
    }

    if(codigopostal === "") {
        alert("Por favor, indicá tu código postal");
        return;
    }

    if(producto === "") {
        alert("Es vital que selecciones un producto de nuestro catálogo");
        return;
    }


    if(cantidad < 1 || cantidad === "") {
        alert("La cantidad debe ser al menos 1");
        return;
    }


    alert("Acabas de adquirir el derecho a " + cantidad + " unidades de " + producto);
}
