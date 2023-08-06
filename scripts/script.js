
/* fichier contenant toutes les fonction de notre jeu  */
let option_source = document.querySelectorAll(".option_source input");

// c'est la fonction principale
function lancer_jeu() 
{
      let score = 0;
      let i = 0;

      let bouton_valider = document.getElementById('bouton_valider_ecrit');
      let zone_saisie = document.getElementById('entre_ecriture');

      affiche_proposition(liste_mots[i]); 
      bouton_valider.addEventListener("click",()=>{

      if(liste_mots[i].localeCompare(zone_saisie.value) == 0)
             {
                      score++;
                }
                  i++;
            affiche_resultat(score,i);
            zone_saisie.value= "";   
            if(liste_mots[i] === undefined )
            {
                  let fin ="le jeux est fini";
                  affiche_proposition(fin);
                  bouton_valider.disabled = true;//desactivation du bouton 
            }
            else
            {
                  affiche_proposition(liste_mots[i]);
            }
      });
      
      affiche_resultat(score,i);
      

} 

function affiche_proposition(proposition)
{
      let zone_proposition = document.querySelector(".zone_proposition");
      zone_proposition.innerText = proposition;
}

// fonction affichant le nombre de reponce juste trouver
function affiche_resultat(score,nbr_tt_proposer)
{
      //console.log("votre score est de : "+score+" sur "+nbr_tt_proposer);
      let zone_score = document.querySelector(".zone_score span");
      let affiche_score = `${score} / ${nbr_tt_proposer}`;
      zone_score.innerText = affiche_score;
}



