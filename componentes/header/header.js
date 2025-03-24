function h_Header(){
    let headd = document.createElement('div');
    headd.className = "header";
   

    let tittu = document.createElement('div');
    tittu.className = "TituloH";
    tittu.innerText = "Preciona Tu Grado Para Marcar Asistencia";

    headd.appendChild(tittu);
    return headd;

}

export {h_Header}