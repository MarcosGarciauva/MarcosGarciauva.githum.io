// Seleccionamos los elementos (¡Asegúrate de que estos IDs coincidan con tu HTML!)
const productos = document.querySelectorAll('.producto');
const detalle = document.getElementById('detalleProducto');
const volver = document.getElementById('volver');
const imgProducto = document.getElementById('imgProducto');
const nombreProducto = document.getElementById('nombreProducto');
const descripcionProducto = document.getElementById('descripcionProducto');
const precioProducto = document.getElementById('precioProducto'); 
const secciones = document.querySelectorAll('main > section.productos');
const tamañoProducto = document.getElementById('tamañoProducto');

// Mostrar detalle del producto
productos.forEach(prod => {
    prod.addEventListener('click', () => {
        // Llenamos el detalle con los datos
        imgProducto.src = prod.dataset.imagen;
        imgProducto.alt = prod.dataset.nombre;
        nombreProducto.textContent = prod.dataset.nombre;
        descripcionProducto.textContent = prod.dataset.descripcion;
        
        // Formato del precio mejorado
        precioProducto.textContent = `Precio: ${prod.dataset.precio}`; 
        tamañoProducto.textContent = `Tamaño: ${prod.dataset.tamaño}`;

        // Ocultamos las secciones de productos y mostramos el detalle
        secciones.forEach(s => s.style.display = 'none');
        detalle.style.display = 'block'; 

        // Subimos la página al inicio (mejor experiencia de usuario)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Botón para volver al listado
volver.addEventListener('click', () => {
    // Ocultamos el detalle y mostramos el listado
    detalle.style.display = 'none';
    secciones.forEach(s => s.style.display = 'block');

    // Subimos al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
});