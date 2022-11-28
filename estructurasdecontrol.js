//APUNTES DE PRACTICA

/*function validadEdad(edad) {
  if (confirm("¿estas de acuerdo con seguir?")) {
    console.log("sigue bajo tu propio riesgo");
    if (edad >= 18 && edad <= 150) {
      console.log("Eres mayor de edad");
    } else if (edad > 150) {
      console.log("edad no real morro!");
    } else if (edad >= 0) {
      console.log("aun no alcanzas el timbre");
    } else {
      console.log("no eres real!");
    }
  } else {
    console.log("que miedoso...");
  }
}

function mandarMensajes(edad) {
  console.log(typeof edad);
  switch (edad) {
    case "13":
      console.log("estas en la secundaria seguramente");
      break;
    case "17":
      console.log("Amo su inocencia!");
      break;
    default:
      console.log("UwU");
  }
}

let edad = prompt("introduce tu edad");
if (edad && !isNaN(edad)) {
  validadEdad(edad);
  mandarMensajes(edad);
} else {
  alert("Debes introducir tu edad");
  location.reload();
}*/
//-------------------------------------
//while
boletosDisponibles = 100;
/*while (boletosDisponibles > 0) {
  console.log("Boleto comprado para el corona Capital");
  boletosDisponibles--;
  console.log("Quedan: " + boletosDisponibles);
  console.log("-------------------------------------------------------");
}*/

//Do while
/*do {
  console.log("Boleto comprado para el capital");
  boletosDisponibles--;
  console.log("qudan: " + boletosDisponibles);
} while (boletosDisponibles > 0);*/

// TRY CATCH
try {
  //CODIGO SUCEPTIBLE A FALLAR
  console.log(boletosDisponibles);
} catch (error) {
  console.info("Validar edad no existe");
} finally {
  //sin importar que pase, haya error o no haya, se ejecuta
  console.warn("tu crush no te quiere");
}
