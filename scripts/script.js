// Partie 01
const POUCESVERSCM = 2.5;
const CMVERSPOUCES = 1 / 2.5;

function poucesVersCm(valeur) {
    document.getElementById("resultat").innerHTML = "pouces => " + (valeur * POUCESVERSCM).toFixed(1) + " cm";
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
function afficherPartie2(nomPrenom, taille) {
    if (!(taille >= 1 && taille <= 6))
        document.getElementById("resultat2").innerHTML = "<span class='incorrect'>Erreur le niveau doit être entre 1 et 6</span>";
    else
        document.getElementById("resultat2").innerHTML = "<p><h" + taille + " class='correct'>Bonjour " + nomPrenom + " Niveau= " + taille + "</h" + taille + " ></p> ";
}

// Partie 03
var monMenu = {
    "Escargot": { cat: "Entree", image: "escargot.jpg", prix: 5.50 },
    "Salade verte": { cat: "Entree", image: "salade2.jpg", prix: 5.95 },
    "Salade César": { cat: "Entree", image: "salade.jpg", prix: 6.95 },
    "Spaghetti": { cat: "Principal", image: "spaghetti.jpg", prix: 15.95 },
    "Steak": { cat: "Principal", image: "steak.jpg", prix: 25.95 },
    "Pizza": { cat: "Principal", image: "pizza.jpg", prix: 17.95 },
    "Crème glacée": { cat: "Dessert", image: "cremeglacee.jpg", prix: 4.25 },
    "Gateau": { cat: "Dessert", image: "gateau.jpg", prix: 4.95 },
    "Pouding": { cat: "Dessert", image: "pouding.jpg", prix: 3.95 },
    "Café / Thé": { cat: "Boisson", image: "cafe.jpg", prix: 2.50 },
    "Boisson gazeuse": { cat: "Boisson", image: "boisson.jpg", prix: 2.95 }
};

$(document).ready(function () {

    //Affichage de la liste niveau 1 et 2
    $('li').on('click', function (e) {
        if ($(this).hasClass('elementSelec'))
            return;
        let selelement = $(this).parent();
        selelement.find('li').removeClass('elementSelec').find('ul').hide();
        $(this).addClass('elementSelec').children('ul').slideToggle(500);
    });

    $('li li').on('click', function (e) {
        let choixSelec = $(this).html();
        let objChoix = monMenu[choixSelec];
        let parent = $(this).parent().html();
        console.log(parent);


        if (objChoix.cat == "Entree") {
            $("#prixEntree").html(objChoix.prix)
            $("#imgEntree").attr('src', "./images/" + objChoix.image);
        }
        if (objChoix.cat == "Principal") {
            $("#prixPrincipal").html(objChoix.prix);
            $("#imgPrincipal").attr('src', "./images/" + objChoix.image);
        }
        if (objChoix.cat == "Deserts") {
            $("#prixDessert").html(objChoix.prix);
            $("#imgDessert").attr('src', "./images/" + objChoix.image);
        }
        if (objChoix.cat == "Boissons") {
            $("#prixBoissons").html(objChoix.prix);
            $("#imgBoissons").attr('src', "./images/" + objChoix.image);
        }
    });
});