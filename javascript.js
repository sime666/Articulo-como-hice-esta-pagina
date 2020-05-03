var imagen;

function imagen(){
    imagen=document.getElementById("imagen");

    imagen.addEventListener("mouseover",crecer,false);
    imagen.addEventListener("mouseout",encoger,false);

}



function crecer(){
    imagen.width=668;
    imagen.height=777;
}

function encoger(){
    imagen.width=568;
    imagen.height=677;
}






window.onload=imagen;