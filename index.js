let y = document.getElementById("y");
let x = document.getElementById("x");
let tiempo = document.getElementById("tiempo")
let cantidad = document.getElementById("cantidad")

function startPainting() {

    let array = [x][y]

    var randomX = (Math.random() * x) + 1
    var randomY = (Math.random() * y) + 1

    if (array[x] == "X") {
        pintar()
    }

    // var body = document.getElementById("matriz"[0])

    // var matriz = document.createElement("table");
    // var matrizBody = document.createElement("tbody")


    // for (var i = 0; i < y; i++) {
    //     var columna = document.createElement("tr")

    //     for (var j = 0; j < x; j++) {
    //         var celda = createElement("td")
    //         columna.appendChild(celda)
    //     }

    //     matrizBody.appendChild(columna)
    // }

    // console.log(matrizBody)

    // matriz.appendChild(matrizBody)

    // body.appendChild(matriz)

    // matriz.setAttribute("border", 2)

    // var intervalo = tiempo * 1000;

    // setInterval(pintar(cantidad), intervalo)
}

function pintar(cantidad) {

}