// Dar la bienvenida y configurar el fondo
function configurarFondo() {
  const color = prompt(
    "¡Bienvenido a la página interactiva! ¿Cuál es tu color favorito?"
  );
  if (color) {
    document.body.style.backgroundColor = color;
  } else {
    alert("No ingresaste ningún color. Se mantendrá el fondo predeterminado.");
  }
}

// Llamamos a la función al cargar la página
window.onload = configurarFondo;

// Juego 1: Hermanos
function jugarHermanos() {
  let cantidad = parseInt(prompt("¿Cuántos hermanos tienes?"));
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor, ingresa un número válido mayor que cero.");
    return;
  }

  let nombres = [];
  let intentos = 0;

  while (intentos < cantidad) {
    let nombreHermano = prompt(
      `Ingresa el nombre de tu hermano #${intentos + 1}:`
    );
    if (nombreHermano) {
      nombres.push(nombreHermano);
      intentos++;
    } else {
      alert("No ingresaste un nombre. Intenta de nuevo.");
    }
  }

  console.log("Nombres de tus hermanos:");
  console.log(nombres);
}

// Juego 2: Bloques
function jugarBloques() {
  let cantidad = parseInt(prompt("¿Cuántos bloques deseas generar?"));
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor, ingresa un número válido mayor que cero.");
    return;
  }

  const contenedor = document.getElementById("blocks-container");
  contenedor.innerHTML = ""; // Limpiar contenedor

  for (let i = 0; i < cantidad; i++) {
    const bloque = document.createElement("div");
    bloque.classList.add("block");
    bloque.style.backgroundColor = generarColorHexadecimal();
    contenedor.appendChild(bloque);
  }
}

// Función para generar un color hexadecimal al azar
function generarColorHexadecimal() {
  const letras = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Juego 3: YanKenPo
function jugarYanquenpo() {
  const opciones = ["piedra", "papel", "tijera"];
  let eleccionUsuario = prompt("Elige piedra, papel o tijera:").toLowerCase();

  if (!opciones.includes(eleccionUsuario)) {
    alert("Elección inválida. Por favor, elige piedra, papel o tijera.");
    return;
  }

  const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

  alert(`La computadora eligió: ${eleccionComputadora}`);

  if (eleccionUsuario === eleccionComputadora) {
    alert("¡Es un empate!");
  } else if (
    (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
    (eleccionUsuario === "tijera" && eleccionComputadora === "papel") ||
    (eleccionUsuario === "papel" && eleccionComputadora === "piedra")
  ) {
    alert("¡Ganaste!");
  } else {
    alert("Perdiste. ¡Inténtalo de nuevo!");
  }
}
