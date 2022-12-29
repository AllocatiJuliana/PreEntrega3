//Insertar elementos en HTML mediante DOM

function cardAHtml(array) {
    const contenedor = document.querySelector(".container")

    for (let i = 0; i < array.length; i++) {

        const objetos = document.createElement("div")
        objetos.className = "objetos"
        objetos.innerHTML = `
        <div class="container-img">
            <img src=${array[i].img} alt=${array[i].producto} >
            </div>
            <h2>
            ${array[i].producto}
            <h2>
        `
        contenedor.appendChild(objetos)
    }
}

cardAHtml(productos)

//Mediante un button pasar de modo claro a modo oscuro

const cambiarModo = document.querySelector(".cambiarModo")
const body = document.querySelector(".modoClaro")

cambiarModo.onclick = () => {
    body.classList.toggle("modoOscuro")
    if (body.className === "modoClaro modoOscuro") {
        cambiarModo.textContent = "Modo Claro"
    } else {
        cambiarModo.textContent = "Modo Oscuro"
    }
}