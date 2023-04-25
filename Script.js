
var button   = document.getElementById("encryptbutton");
var textarea = document.getElementById("textout");
var button2  = document.getElementById("decryptbutton");
var button3  = document.getElementById("CopyTex");
var p = document.querySelector("p");

button.onclick = encryptR;
button2.onclick = decrypt;
button3.onclick = copy;

var encrypt="";
var result="";

//Esta función se encarga de encriptar el texto con la llave proporcionada por el Challenge
function encryptR () {

    let text= document.getElementById("textIn").value;
    let patron = /^[a-z\s]+$/; //Aquí se declara el patrón que necesitaremos unas lineas mas abajo

    if (text.match(patron)){ //Aquí se encripta el mensaje sustituyendo los valores ingresador con los correspondientes a la Tabla ONE
        let encriptado= text.replace(/e/ig,"enter");
        encriptado= encriptado.replace(/i/ig,"imes");
        encriptado = encriptado.replace(/a/ig,"ai");
        encriptado = encriptado.replace(/o/ig,"ober");
        encriptado = encriptado.replace(/u/ig,"ufat");
        console.log(encriptado);
        document.getElementById("fg").style.display = "none";
        encrypt = encriptado;   
        textarea.value = encrypt;
        p.textContent = "Encriptado ---→"
    }

        //En esta sección con ayuda del patrón declarado, se detecta que en el texto ingresado solo haya letras minúsculas--
        //-- y espacios que separen las palabras, de lo contrario elimina el Texto y cambia el PlaceHolder del TextArea.
    else{                    
        textIn.value ="";
        textIn.placeholder= "¡Sólo letras minúsculas!";
    }

}
//Esta función se encarga de decodificar el texto ingresado, cambiando los segmentos llave por carácteres predefinidos.
function decrypt() {

    let text = document.getElementById("textIn").value;
    let patronU = /^[a-z\s]+$/;

    if (text.match(patronU)){
        let uncrpyt = text.replace(/enter/g,"e");
        uncrpyt = uncrpyt.replace(/imes/g,"i");
        uncrpyt = uncrpyt.replace(/ai/g,"a")
        uncrpyt = uncrpyt.replace(/ober/g,"o");
        uncrpyt = uncrpyt.replace(/ufat/g,"u")
        console.log(uncrpyt);
        document.getElementById("fg").style.display = "none";
        result = uncrpyt;
        textarea.value=result;
        p.textContent = "Texto desencriptado -→"
    }

        //En esta sección con ayuda del patrón declarado, se detecta que en el texto ingresado solo haya letras minúsculas--
        //-- y espacios que separen las palabras, de lo contrario elimina el Texto y cambia el PlaceHolder del TextArea.
    else{
        textIn.value ="";
        textIn.placeholder= "¡Sólo letras minúsculas!";
       }
}  

//Esta última parte del codigo se encarga de agregar el texto del "área de encriptado" al portapapeles como ultimo elemento añadido
//cumpliendo la función de "Copy".
async function copy() {
    let data= document.getElementById("textout").value;
    console.log (data);
    await navigator.clipboard.writeText(data);
    document.getElementById("fg").style.display = "block";
    textarea.value = "";
    p.textContent = "No se ha detectado texto a encriptar-→"
}

