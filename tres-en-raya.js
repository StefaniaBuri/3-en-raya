// Activamos el boton sortear
import random from "./functionRandom.js";
import ocultarModal from "./ocultarModal.js";

var player1;
var nuevoJuego = false;

const sortearPartida = document.querySelector("#ranGame");
const comenzar = document.querySelector('#start');

sortearPartida.onclick = () => {
    player1 = random(nuevoJuego);
}

comenzar.onclick = () => {
    ocultarModal();
}

window.addEventListener("click",
function (e){
    // console.log(e.target);
    let modal = document.querySelectorAll(".modal")[0];
    let modal_container = document.querySelectorAll(".modal-container")[0];

    if(e.target === modal_container){
        modal.classList.toggle("modal-close");
        setTimeout(
            function () {
                modal_container.style.opacity = "0";
                modal_container.style.visibility = "hidden";
            },
            1000)
    }
}
)






let cuadro_result = document.querySelectorAll(".cuadro");
let info = document.getElementById("juego-info");
const juego_btn = document.getElementById("nextGame")
let i = 0;
let n_boton;
const jBtn_e =  "pointer-events:initial;opacity:initial;"
const jBtn_d =  "pointer-events:none;opacity:40%;"

juego_btn.onclick = function(){

    for(n_boton = 0; n_boton < cuadro_result.length; n_boton++){    
        cuadro_result[n_boton].style.cssText = "pointer-events:initial;"; 
        cuadro_result[n_boton].innerHTML = "";  
    }
    nEmpieza();
 }

cuadro_result.forEach(boton => {  
    
 boton.onclick = function(){
           
    info.innerHTML = ""; 
     
     if(i %= 2){    
        boton.innerHTML = "X";
        comprobar();
    } else {
        boton.innerHTML = "O"; 
        comprobar();
    }  
    boton.style.setProperty("pointer-events","none"); 
    i++;   
  }

});


function comprobar(){
    
    juego_btn.style.cssText = jBtn_d;
        
   if ((cuadro_result[0].innerHTML == "X" && cuadro_result[1].innerHTML == "X" && cuadro_result[2].innerHTML == "X") ||   
       (cuadro_result[3].innerHTML == "X" && cuadro_result[4].innerHTML == "X" && cuadro_result[5].innerHTML == "X") ||
       (cuadro_result[6].innerHTML == "X" && cuadro_result[7].innerHTML == "X" && cuadro_result[8].innerHTML == "X") ||

       (cuadro_result[0].innerHTML == "X" && cuadro_result[3].innerHTML == "X" && cuadro_result[6].innerHTML == "X") ||
       (cuadro_result[1].innerHTML == "X" && cuadro_result[4].innerHTML == "X" && cuadro_result[7].innerHTML == "X") ||
       (cuadro_result[2].innerHTML == "X" && cuadro_result[5].innerHTML == "X" && cuadro_result[8].innerHTML == "X") ||

       (cuadro_result[0].innerHTML == "X" && cuadro_result[4].innerHTML == "X" && cuadro_result[8].innerHTML == "X") ||
       (cuadro_result[6].innerHTML == "X" && cuadro_result[4].innerHTML == "X" && cuadro_result[2].innerHTML == "X"))  
       {
       
            info.innerHTML = '"Jugador 1" Gana';
            
            deshabilitarCasillas();
       
        } else if ((cuadro_result[0].innerHTML == "O" && cuadro_result[1].innerHTML == "O" && cuadro_result[2].innerHTML == "O") ||
        (cuadro_result[3].innerHTML == "O" && cuadro_result[4].innerHTML == "O" && cuadro_result[5].innerHTML == "O") ||
        (cuadro_result[6].innerHTML == "O" && cuadro_result[7].innerHTML == "O" && cuadro_result[8].innerHTML == "O") ||

        (cuadro_result[0].innerHTML == "O" && cuadro_result[3].innerHTML == "O" && cuadro_result[6].innerHTML == "O") ||
        (cuadro_result[1].innerHTML == "O" && cuadro_result[4].innerHTML == "O" && cuadro_result[7].innerHTML == "O") ||
        (cuadro_result[2].innerHTML == "O" && cuadro_result[5].innerHTML == "O" && cuadro_result[8].innerHTML == "O") ||

        (cuadro_result[0].innerHTML == "O" && cuadro_result[4].innerHTML == "O" && cuadro_result[8].innerHTML == "O") ||
        (cuadro_result[6].innerHTML == "O" && cuadro_result[4].innerHTML == "O" && cuadro_result[2].innerHTML == "O"))  
        
        {
        
            info.innerHTML = '"Jugador 2" Gana' ;
        
            deshabilitarCasillas();
 
         } 
         
         else{  
             if (cuadro_result[0].innerHTML != "" && cuadro_result[1].innerHTML != "" && cuadro_result[2].innerHTML != "" &&
            cuadro_result[3].innerHTML != "" && cuadro_result[4].innerHTML != "" && cuadro_result[5].innerHTML != "" &&
            cuadro_result[6].innerHTML != "" && cuadro_result[7].innerHTML != "" && cuadro_result[8].innerHTML != "" &&

            cuadro_result[0].innerHTML != "" && cuadro_result[3].innerHTML != "" && cuadro_result[6].innerHTML != "" &&
            cuadro_result[1].innerHTML != "" && cuadro_result[4].innerHTML != "" && cuadro_result[7].innerHTML != "" &&
            cuadro_result[2].innerHTML != "" && cuadro_result[5].innerHTML != "" && cuadro_result[8].innerHTML != "" &&

            cuadro_result[0].innerHTML != "" && cuadro_result[4].innerHTML != "" && cuadro_result[8].innerHTML != "" &&
            cuadro_result[6].innerHTML != "" && cuadro_result[4].innerHTML != "" && cuadro_result[2].innerHTML != "")  
            {
         
                info.innerHTML = "Empate";  
                deshabilitarCasillas(false);
            } 
            }   
 }

function  deshabilitarCasillas(y){
  
  if (y == false){
    i = Math.floor(Math.random() * (3 - 1)) + 1;
    }
 console.log(i);

    for(n_boton = 0; n_boton < cuadro_result.length; n_boton++){    
    cuadro_result[n_boton].style.setProperty("pointer-events","none"); 
    }
    
    juego_btn.style.cssText = jBtn_e;
}





function nEmpieza(){

    juego_btn.style.cssText = jBtn_d;

    // const texto_info = "Presiona cualquier cuadro para jugar: "
    const texto_info = "Presiona cualquier cuadro para empezar. "

    const c2 = "Empieza."
    let c1;

    if(i %= 2 ){
        // c1= '"X" ' ; 
        c1= '"Jugador 1" ' ; 
    }else{
        // c1= '"O" ';  
        c1= '"Jugador 2" ';  
    }
    
    let p = texto_info.split(/\n/g);
    let html = "";
  
    for (let x = 0; x < p.length; x++) {
        html += p[x] + c1 + c2 + "<br>";
    }

    info.innerHTML = html;
    
    }

nEmpieza();
