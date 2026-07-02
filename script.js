const enlace_flores = document.getElementById("enlace-envia-flores");

enlace_flores.addEventListener("mouseover", function(){
    this.innerText = "Envía Bouquets";
});

enlace_flores.addEventListener("mouseout", function(){
    this.innerText = "Envía Flores";
});

const btn_sesion = document.getElementById("btn-sesion");

btn_sesion.addEventListener("click", function(){
    alert("Bienvenido a la tienda de flores");
})

const lista_botones_comprar = document.querySelectorAll(".btn-comprar");

lista_botones_comprar.forEach(function(boton){
    boton.addEventListener("click",function(){
        this.remove();
    })
})