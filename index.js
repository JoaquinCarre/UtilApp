//Secciones
let apps = document.getElementById("apps");
let seccionTareas = document.getElementById("seccionTareas");
let seccionCalc = document.getElementById("seccionCalc");
let seccionReloj = document.getElementById("seccionReloj");
let seccionPintar = document.getElementById("seccionPintar");
//Tarjetas secciones
let tareas = document.getElementById("tareas");
let calc = document.getElementById("calc");
let reloj = document.getElementById("reloj");
let pintar = document.getElementById("pintar");
//Otros añadidos
let btnVolverTareas = document.getElementById("menuPrincipalTareas");
let btnVolverCalc = document.getElementById("menuPrincipalCalc");
let btnVolverReloj = document.getElementById("menuPrincipalReloj");
let btnVolverPintar = document.getElementById("menuPrincipalPintar");

//Inicializar lista de tareas desde localStorage
let listaDeTareas = JSON.parse(localStorage.getItem("listaDeTareas")) || [];

//Inicializar nueva tarea y agregarla
let inputNT = document.getElementById("inputAgregar");
let botonAgregar = document.getElementById("botonAgregar");
let listaItems = document.getElementById("itemsLista");

//Reemplazo de caracteres para que no me estorben en el codigo HTML al inyectarnos con el innerHTML
function escaparHTML(texto) {
    return texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}   
//función imprimir lista cargada de localStorage
const imprimirLista = () => {
    listaDeTareas = JSON.parse(localStorage.getItem("listaDeTareas")) || [];
    listaItems.innerHTML = "";
    for (const tareaLista of listaDeTareas) {
        listaItems.innerHTML +=`<p class="itemDeLista" id="itemN${listaDeTareas.indexOf(tareaLista)}"><button class="botonItem" id="botonCumplidoN${listaDeTareas.indexOf(tareaLista)}">✔️</button><span class="textoItem">${tareaLista.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")}</span><button class="botonItem" id="botonEliminarN${listaDeTareas.indexOf(tareaLista)}">❌</button></p>`;    
    }};

//funcion para agregar la tarea al clickear el boton + o apretar ENTER
function agregarTarea() {
    listaDeTareas = JSON.parse(localStorage.getItem("listaDeTareas")) || [];
    const texto = inputNT.value.trim();
    if (texto) {
        listaDeTareas.unshift(texto); // agrego nueva tarea al array global      
        localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
        imprimirLista(); // refresco la lista en pantalla
    }
    inputNT.value = ""; // refresco el input
};

botonAgregar.addEventListener("click", agregarTarea); //agregar tarea al clickear el boton

inputNT.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        agregarTarea()
    };
}); //agregar tarea al apretar enter

/* FALTA AGREGAR FUNCION A BOTONES CUMPLIR O ELIMINAR TAREA Y QUE PASEN AL HISTORIAL COMO CUMPLIDA O ELIMINADA */
//Inicializar historial de tareas desde localStorage
let historialTareas = JSON.parse(localStorage.getItem("historialTareas")) || [];

//Contenedor para todas las tareas del historial
let listaHistorial = document.getElementById("itemsHistorial");

// Función imprimir historial cargado desde localStorage
const imprimirHistorial = () => {
    historialTareas = JSON.parse(localStorage.getItem("historialTareas")) || [];
    listaHistorial.innerHTML = "";
    historialTareas.forEach(item => {
        listaHistorial.innerHTML += `<p class="historialItem"><span>(${item.estado})</span> ${item.texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")}</p>`;
    });
};

// Evento para eliminar o cumplir una tarea según el botón que apriete y haga la acción sobre esa tarea en específico
listaItems.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        let id = e.target.id;
        let index = parseInt(id.replace(/\D/g, "")); // obtengo el numero del index de la tarea eliminada/cumplida siendo \D → “cualquier carácter que NO sea un dígito” y g → el flag global, que busca todas las coincidencias, no solo la primera. Con ello reemplaza todos los caracteres que no sean números por "".
        let estado = id.includes("Cumplido") ? "cumplida" : "eliminada";
        let texto = listaDeTareas[index];

        // Borro del array principal
        listaDeTareas.splice(index, 1);
        localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
        imprimirLista();

        // Agrego al historial
        historialTareas.unshift({ texto, estado });
        if (historialTareas.length > 8) historialTareas.pop();
        localStorage.setItem("historialTareas", JSON.stringify(historialTareas));
        imprimirHistorial();
    }
});

//Ejecutar ambas funciones de historial y lista activa
imprimirLista();
imprimirHistorial();

//Boton para eliminar todo el localStorage
let botonEliminarTodo = document.getElementById("botonEliminarTodo");

botonEliminarTodo.addEventListener("click", ()=>{
    localStorage.clear();
    listaItems.innerHTML = "";
    listaHistorial.innerHTML = "";
})

//Para responsive max-width: 700px
let botonDesplegar = document.getElementById("botonDesplegar");
let botonRetraer = document.getElementById("botonRetraer");
let itemsHistorial = document.getElementById("itemsHistorial");

botonDesplegar.addEventListener("click", ()=>{
    itemsHistorial.className = "itemsHistorial";
    botonDesplegar.className = "botonDesplegar none";
    botonRetraer.className = "botonRetraer";
})

botonRetraer.addEventListener("click", ()=>{
    itemsHistorial.className = "itemsHistorial none";
    botonDesplegar.className = "botonDesplegar block";
    botonRetraer.className = "botonRetraer none";
})

//Funcion click a tarjetas secciones
tareas.addEventListener("click", ()=>{
    apps.className = "apps none";
    seccionTareas.className = "seccionTareas";
    inputNT.value = "";
    imprimirLista();
    imprimirHistorial();
});

calc.addEventListener("click", ()=>{
    apps.className = "apps none";
    seccionCalc.className = "seccionCalc";
});

reloj.addEventListener("click", ()=>{
    apps.className = "apps none";
    seccionReloj.className = "seccionReloj";
});

pintar.addEventListener("click", ()=>{
    apps.className = "apps none";
    seccionPintar.className = "seccionPintar";
});

//boton regreso a menu principal de cada seccion
btnVolverTareas.addEventListener("click", ()=>{
    apps.className = "apps";
    seccionTareas.className = "seccionTareas none";
});

btnVolverCalc.addEventListener("click", ()=>{
    apps.className = "apps";
    seccionCalc.className = "seccionCalc none";
});

btnVolverReloj.addEventListener("click", ()=>{
    apps.className = "apps";
    seccionReloj.className = "seccionReloj none";
});

btnVolverPintar.addEventListener("click", ()=>{
    apps.className = "apps";
    seccionPintar.className = "seccionPintar none";
});