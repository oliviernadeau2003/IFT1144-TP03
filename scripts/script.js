// Partie 01
const POUCESVERSCM = 2.5;
const CMVERSPOUCES = 1 / 2.5;

function poucesVersCm(valeur) {
    document.getElementById("resultat").innerHTML = "Pouces => " + (valeur * POUCESVERSCM).toFixed(1) + " cm";
}

function cmVersPouces(valeur) {
    document.getElementById("resultat").innerHTML = "cm => " + (valeur * CMVERSPOUCES).toFixed(1) + " pouces";
}

function celciusVersFarenheit(valeur) {
    document.getElementById("resultat").innerHTML = "celcius => " + ((valeur * 9 / 5) + 32).toFixed(1) + " farenheit";
}

function farenheitVersCelcius(valeur) {
    document.getElementById("resultat").innerHTML = "farenheit => " + ((valeur - 32) * 5 / 9).toFixed(1) + " celcius";
}

// Partie 02

// Partie 03
