var aleatorio = Math.floor(Math.random() * 10) + 1;

var intentos = 0;

var acierto = false;

var dificultad = 0;

var select_dificultad = prompt("Selecciona la dificultad: Fácil = 1 - Intermedio = 2 - Difícil = 3");

if (select_dificultad == 1){
	dificultad = 1;
}

if (select_dificultad == 2){
	dificultad = 2;
}

if (select_dificultad == 3){
	dificultad = 3;
}

if(dificultad == 1){
	alert("Has seleccionado el modo fácil, no tienes límite de intentos.");
	
	while(acierto == false){
		var entrada = prompt("Introduce un número del 1 al 10.");
		intentos++;
		if (entrada == aleatorio){
			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
			acierto = true;
			document.write("El número era: " + aleatorio);
		}else
			{
				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
			}
	}
}

if(dificultad == 2){
	alert("Has seleccionado el modo intermedio, solo tienes 5 intentos.");
	
	while(acierto == false && intentos < 5){
		var entrada = prompt("Introduce un número del 1 al 10.");
		intentos++;
		if (entrada == aleatorio){
			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
			acierto = true;
			document.write("El número era: " + aleatorio);
		}else
			{
				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
			}
	if (intentos == 5){
		alert("Has fallado. Game over.");
		document.write("El número era: " + aleatorio);
	}
	}
}

if(dificultad == 3){
	alert("Has seleccionado el modo difícil, solo tienes 3 intentos.");
	
	while(acierto == false && intentos < 3){
		var entrada = prompt("Introduce un número del 1 al 10.");
		intentos++;
		if (entrada == aleatorio){
			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
			acierto = true;
			document.write("El número era: " + aleatorio);
		}else
			{
				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
			}
	if (intentos == 3){
		alert("Has fallado. Game over.");
		document.write("El número era: " + aleatorio);
	}
	}
}