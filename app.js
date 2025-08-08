// Creamos la lista de amigos vacía para almacenar el nombre de los participantes
let amigos = [];

// Para agregar a los amigos en la lista
function agregarAmigo(){
    //Se obtiene el valor input
    let input = document.getElementById("amigo");
    let nombre = input.value;

    //Eliminamos espacios al principio y al final
    nombre = nombre.trim();

    //Verificamos que nuesta casilla no se encuentre vacía
    if (nombre === "") {
        alert("Por favor indica un nombre");
        return; //
    }
    //Verificamos que no se repita ningún nombre
    if (amigos.includes(nombre)){
            alert("Ya existe un participante con este nombre");
            return;
        }
    //Luego de las debidas verificaciones se procede a agregar nombre a la lista
    amigos.push(nombre);

    //Vaciamos el input
    input.value ="";

    //LLamamos a la funcion de renovar lista para que nos permita actualizar esta
    renovarLista();
}

function renovarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Esto lo usamos para limpiar la lista

    //Se hace el recorrido por los nombres y se muestra
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
