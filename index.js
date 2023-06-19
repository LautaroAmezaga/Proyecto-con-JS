let sum = 0;

function elegirProductos() {
  //Se le solicita al usuario que elija un producto de la lista
  alert('Productos disponibles: \n\n 1. Remera Seleccion Argentina 2022 \n 2. Remera del Arsenal \n 3. Remera de Boca jr. \n 4. Remera del Chelsea \n 5. Remera del Inter de milan \n 6. Remera del Juventus \n 7. Remera del Liverpool \n 8. Remera del Manchester city \n 9. Remera del Milan \n 10. Remera del Napoli \n 11. Remera del OL Lyon \n 12. Remera de Racing \n 13. Remera del Real Madrid \n 14. Remera del Barcelona \n 15. Remera de River Plate \n 16. Remera del Tottenham ');
  let seleccionaProducto = prompt('Elija un producto (ingrese el número correspondiente):');  

  let producto, precio;

  //Se asigna el producto seleccionado y el precio en funcion de la entrada del usuario
  if (seleccionaProducto === '1') {
    producto = 'Remera Seleccion Argentina 2022';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '2') {
    producto = 'Remera del Arsenal';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '3') {
    producto = 'Remera de Boca jr';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '4') {
    producto = 'Remera del Chelsea';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '5') {
    producto = 'Remera del Inter de Milan';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '6') {
    producto = 'Remera de La Juventus';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '7') {
    producto = 'Remera del Liverpool';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '8') {
    producto = 'Remera del Manchester City';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '9') {
    producto = 'Remera del Milan';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '10') {
    producto = 'Remera del Napoli';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '11') {
    producto = 'Remera del OL Lyon';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '12') {
    producto = 'Remera de Racing';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '13') {
    producto = 'Remera del Real Madrid';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '14') {
    producto = 'Remera del Barcelona';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '15') {
    producto = 'Remera de River Plate';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else if (seleccionaProducto === '16') {
    producto = 'Remera del Tottenham';
    precio = parseFloat(prompt('Ingrese el precio de Remera:'));
  } else {
    alert('Lo que seleccionaste es inválido');
    return elegirProductos(); // Llamamos al return para que el usuario vuelva a elegir el producto
  }
  // Se le solicita la usuario que ponga la cantidad que desea comprar 
  let cantidad = parseInt(prompt('Ingrese la cantidad de ' + producto + ' a comprar'));   
  // Calculamos el costo de los productos y dsp lo suma a la suma total
  let costo = precio * cantidad;  
  sum = sum + costo;
  // Mostramos el costo de los productos seleccionados
  console.log('Costo de ' + cantidad + ' ' + producto + '(s):' + costo);
}

while (true) {
  elegirProductos();
  
  // Le preguntamos al usuario si quiere continuar o terminar de seleccionar productos
  let seguirEligiendo = prompt('¿Desea seleccionar mas productos? (si/no)');
  if (seguirEligiendo !== 'si' && seguirEligiendo !== 'Si' && seguirEligiendo !== 'Si') {
    break;
  }
}

// Mostramos la suma total mediante un alert
alert('El total de todos los productos es: ' + sum)