function listClases() {
    let listadoclasess = document.createElement('div');
    listadoclasess.className = "CuadrosClases";

    let secciones = [
        { nombre: "Nursery🧸", clase: "seccion-nursery" },
        { nombre: "Primaria Menor ◀︎", clase: "seccion-primaria-menor" },
        { nombre: "Primaria Mayor ◀︎", clase: "seccion-primaria-mayor" },
        { nombre: "Básicos ◀︎", clase: "seccion-basicos" },
        { nombre: "✯ Diversificado ✯", clase: "seccion-diversificado" }
    ];

    // Crear elementos de texto
    secciones.forEach(seccion => {
        let texto = document.createElement('div');
        texto.innerText = seccion.nombre;
        texto.className = seccion.clase;
        listadoclasess.appendChild(texto);
    });

    let nombresClases = [
        "Nursery", "Pre-kinder", "Kinder", "Prepa", "Primero", "Segundo", "Tercero", "Cuarto", "Quinto", "Sexto",
        "1Basico", "2Basico", "3Basico", "4Computación", "4Diseño", "4Biologia", "4Perito",
        "5Computación", "5Diseño", "5Biologia", "5Perito", "6Perito"
    ];

    nombresClases.forEach(nombre => {
        let bttn = document.createElement('button');
        bttn.innerText = nombre;
        
        let className = /^[0-9]/.test(nombre) ? `clase-${nombre}` : nombre;
        
        bttn.className = `${className.replace(/[^a-zA-Z0-9-]/g, '')}-btn`; 
        
        // Agregar el event listener para cada botón
        bttn.addEventListener('click', () => {
            // Cambiar el contenido del DOM a ItemDatos
            mostrarItemDatos();
        });

        listadoclasess.appendChild(bttn);
    });

    return listadoclasess;
}

export { listClases };
