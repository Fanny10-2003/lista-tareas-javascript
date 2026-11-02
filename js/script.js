function agregarTarea(){

    //Obtenemos el valor del campo de la tarea
    let nuevaTareaTexto=document.getElementById("nuevaTarea").value;
    
    //Validar que no se ingresen valores vacios
    if(nuevaTareaTexto===""){
        alert("Por favor, escribe una tarea.");
        return;
    }

    //Crear elemento en la lista
    let nuevaTarea=document.createElement("li");

    nuevaTarea.textContent=nuevaTareaTexto + " ";

    //Crear boton de eliminar
    let botonEliminar=document.createElement("button");
    botonEliminar.textContent="Eliminar"
    botonEliminar.onclick=function(){nuevaTarea.remove();}

    //Agregar boton de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar el elemento de la lista al ul
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Limpiar el campo de entrada
    document.getElementById("nuevaTarea").value="";

}