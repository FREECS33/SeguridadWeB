let matriz = [];
let intervalo;

function generarMatriz() {
  const coordenadaX = document.getElementById("coordenadaX").value;
  const coordenadaY = document.getElementById("coordenadaY").value;

  for (let i = 0; i < coordenadaX; i++) {
    matriz[i] = [];
    for (let j = 0; j < coordenadaY; j++) {
      matriz[i][j] = "";
    }
  }

  mostrarMatriz();
}

function mostrarMatriz() {
  const matrizHtml = document.getElementById("matriz");
  matrizHtml.innerHTML = "";

  const tabla = document.createElement("table");
  tabla.classList.add("border");

  for (let i = 0; i < matriz.length; i++) {
    const fila = document.createElement("tr");
    for (let j = 0; j < matriz[i].length; j++) {
      const columna = document.createElement("td");
      columna.innerHTML = matriz[i][j];
      fila.appendChild(columna);
    }
    tabla.appendChild(fila);
  }

  const coordenadas = obtenerCoordenadas();

  for (let i = 0; i < coordenadas.length; i++) {
    if (matriz[coordenadas[i].x][coordenadas[i].y] !== "X") {
      matriz[coordenadas[i].x][coordenadas[i].y] = "X";
    } else {
      break;
    }
  }

  matrizHtml.appendChild(tabla);
}

function obtenerCoordenadas() {
  const cantidad = parseInt(document.getElementById("cantidad").value);
  let coords = [];
  for (let i = 0; i < cantidad; i++) {
    let x = Math.floor(Math.random() * matriz.length);
    let y = Math.floor(Math.random() * matriz[0].length);
    coords.push({ x, y });
  }
  return coords;
}

function detener() {
  clearInterval(intervalo);
}
