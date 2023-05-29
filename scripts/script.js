let entrada = document.getElementById("input");
let salida = document.querySelector(".outputZone");
let botonEncriptar = document.querySelector(".encriptar");
let botonDesencriptar = document.querySelector(".desencriptar");
let imagenesVacias = document.querySelector(".emptyInfo")
let zonaDeTexto = document.querySelector(".outpuText") 

const E = "enter";
const I = "imes";
const A = "ai";
const O = "ober";
const U = "ufat";

const encriptar = texto =>{
    let textoFinal = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "e"){
            textoFinal += E
        }else if(texto[i] == "i"){
            textoFinal += I
        }else if(texto[i] == "a"){
            textoFinal += A
        }else if(texto[i] == "o"){
            textoFinal += O
        }else if(texto[i] == "u"){
            textoFinal += U
        }else{
            textoFinal += texto[i]
        }
 
    }
    return textoFinal;
}

const desencriptar = texto =>{
    let textoFinal = ""
    for (let i = 0; i < texto.length; i++) {
        textoFinal = texto.replaceAll("ai", "a");
        textoFinal = textoFinal.replaceAll("enter","e");
        textoFinal = textoFinal.replaceAll("imes", "i");
        textoFinal = textoFinal.replaceAll("ober", "o");
        textoFinal = textoFinal.replaceAll("ufat", "u");
    }
    return textoFinal
}

console.log(entrada.value)
function salidaDeTextoEncriptado() {
    imagenesVacias.style.visibility = "hidden" 
    zonaDeTexto.style.visibility = "visible"
    zonaDeTexto.innerHTML = encriptar(entrada.value)
}


function salidaDeTextoDesencriptado() {
    imagenesVacias.style.visibility = "hidden" 
    zonaDeTexto.style.visibility = "visible"
    zonaDeTexto.innerHTML = desencriptar(entrada.value)
}
botonEncriptar.addEventListener("click", salidaDeTextoEncriptado);
botonDesencriptar.addEventListener("click",salidaDeTextoDesencriptado);