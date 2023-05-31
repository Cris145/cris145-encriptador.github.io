let entrada = document.getElementById("input");
let salida = document.querySelector(".outputZone");
let botonEncriptar = document.querySelector(".encriptar");
let botonDesencriptar = document.querySelector(".desencriptar");
let imagenesVacias = document.querySelector(".emptyInfo")
let zonaDeTexto = document.querySelector(".outpuText") 
let copy_btn = document.querySelector(".copy_btn")


const llaveDeEncriptacion = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"] ]

console.log(llaveDeEncriptacion[1])

const encriptar = (textoEncriptar) =>{
    let texto = ""
    for (let i = 0; i < textoEncriptar.length; i++) {
       if (textoEncriptar.includes(llaveDeEncriptacion[i][0])) {
            texto = textoEncriptar.replaceAll(llaveDeEncriptacion[i][0], llaveDeEncriptacion[i][1])
       }
        
    }
};

const desencriptar =(textoDesencriptar) =>{
    let texto = ""
    for (let i = 0; i < textoDesencriptar.length; i++) {
       if (textoDesencriptar.includes(llaveDeEncriptacion[i][1])) {
            texto = textoDesencriptar.replaceAll(llaveDeEncriptacion[i][1], llaveDeEncriptacion[i][0])
       }
        
    }
}





/*const E = "enter";
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
}*/

function salidaDeTextoEncriptado() {
    imagenesVacias.style.visibility = "hidden" 
    zonaDeTexto.style.visibility = "visible"
    copy_btn.style.visibility = "visible"
    zonaDeTexto.value = encriptar(entrada.value)
}


function salidaDeTextoDesencriptado() {
    imagenesVacias.style.visibility = "hidden" 
    zonaDeTexto.style.visibility = "visible"
    copy_btn.style.visibility = "visible"
    zonaDeTexto.value = desencriptar(entrada.value)
}
botonEncriptar.addEventListener("click", salidaDeTextoEncriptado);
botonDesencriptar.addEventListener("click",salidaDeTextoDesencriptado);
copy_btn.addEventListener("click",copiarEnPapelera);

function copiarEnPapelera() {
    zonaDeTexto.select()
    zonaDeTexto.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(zonaDeTexto.value);
    zonaDeTexto.value =""
}

