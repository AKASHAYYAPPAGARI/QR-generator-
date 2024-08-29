let div2 = document.getElementById("div2");
let imgtag = document.getElementById("img");
let qrtext= document.getElementById("qrtext");


function generaro() {
    imgtag.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
}
function reset(){
    imgtag.src="";
}