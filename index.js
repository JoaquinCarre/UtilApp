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

//función imprimir lista cargada de localStorage
const imprimirLista = () => {
    let listaDeTareas = JSON.parse(localStorage.getItem("listaDeTareas")) || [];
    listaItems.innerHTML = "";
    for (const tareaLista of listaDeTareas) {
        listaItems.innerHTML +=`<p class="itemDeLista"><button class="botonItem" id="botonCumplido">✔️</button><span class="textoItem">${tareaLista}</span><button class="botonItem" id="botonEliminar">❌</button></p>`;    
    }};

//funcion para agregar la tarea al clickear el boton + o apretar ENTER
function agregarTarea() {
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

//Funcion click a tarjetas secciones
tareas.addEventListener("click", ()=>{
    apps.className = "apps none";
    seccionTareas.className = "seccionTareas";
    inputNT.value = "";
    imprimirLista();
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