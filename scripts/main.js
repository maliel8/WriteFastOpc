/* fichier principal : point d'entrer de notre jeu */
let zone_saisie = document.getElementById('entre_ecriture');
let bouton_valider = document.getElementById('bouton_valider_ecrit');
let zone_proposition = document.querySelector(".zone_proposition");
let zone_score = document.querySelector(".zone_score span");
let option_source = document.querySelectorAll(".option_source input");

lancer_jeu();

