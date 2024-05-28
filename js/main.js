function limpiar(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("etiqueta1").innerText = "";
    document.getElementById("etiqueta2").innerText = "";
    document.getElementById("etiqueta3").innerText = "";
    document.getElementById("etiqueta4").innerText = "";
    document.getElementById("input1").style.border = "1px solid black";
    document.getElementById("input2").style.border = "1px solid black";
}

function enviar(){
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    if(input1 == "" && input2 == ""){
        alert("ambos input están vacíos")
        document.getElementById("input1").style.border = "1px solid red";
        document.getElementById("input2").style.border = "1px solid red";
    }
    else if(input2 == "" && input1 != ""){
        alert("el segundo input está vacío")
        document.getElementById("input1").style.border = "1px solid black";
        document.getElementById("input2").style.border = "1px solid red";
    }
    else if(input1 == "" && input2 != ""){
        alert("el primer input está vacío")
        document.getElementById("input1").style.border = "1px solid red";
        document.getElementById("input2").style.border = "1px solid black";
    }
    else if(isNaN(input1) && isNaN(input2)){
        document.getElementById("etiqueta1").innerText = input1;
        document.getElementById("etiqueta2").innerText = input2;
        document.getElementById("input1").style.border = "1px solid black";
        document.getElementById("input2").style.border = "1px solid black";
        var texto = input1.toUpperCase() + "" + input2.toUpperCase();
        document.getElementById("etiqueta3").innerText = texto;
        swal.fire(texto);
        var total = input1.length + input2.length;
        var arraymult = [];
        for(let i = 0; i<20;i++){
            arrayMult.push(total*i);
        }
        document.getElementById("etiqueta4").value = arraymult;
    }else{
        alert("Hay numeros en los input, invalidado")

    }

}

