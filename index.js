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

//Funcion click a tarjetas secciones
tareas.addEventListener("click", ()=>{
    apps.className = "apps none";
    seccionTareas.className = "seccionTareas";
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
})

btnVolverCalc.addEventListener("click", ()=>{
    apps.className = "apps";
    seccionCalc.className = "seccionCalc none";
})

btnVolverReloj.addEventListener("click", ()=>{
    apps.className = "apps";
    seccionReloj.className = "seccionReloj none";
})

btnVolverPintar.addEventListener("click", ()=>{
    apps.className = "apps";
    seccionPintar.className = "seccionPintar none";
})

//Inicializar nueva tarea y agregarla
let inputNT = document.getElementById("inputAgregar");
let botonAgregar = document.getElementById("botonAgregar");
let listaItems = document.getElementById("itemsLista");

botonAgregar.addEventListener("click",()=>{
    //usar storage para cargar las tareas guardadas y añadirle la nueva y volver a guardar todo
    listaItems.innerHTML=`<p>${inputNT.value}</p>`;
})