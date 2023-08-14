
/* fichier contenant toutes les fonction de notre jeu  */
// c'est la fonction principale
function lancer_jeu() 
{
     
      liste_proposition = liste_mots;
      let score = 0;
      let i = 0;

      let bouton_valider = document.getElementById('bouton_valider_ecrit');
      let zone_saisie = document.getElementById('entre_ecriture');

      affiche_proposition(liste_proposition[i]); 
      bouton_valider.addEventListener("click",()=>{

      if(liste_proposition[i].localeCompare(zone_saisie.value) == 0)
             {
                      score++;
                }
                  i++;
            affiche_resultat(score,i);
            zone_saisie.value= "";   
            if(liste_proposition[i] === undefined )
            {
                  let fin ="le jeux est fini";
                  affiche_proposition(fin);
                  bouton_valider.disabled = true;//desactivation du bouton 
            }
            else
            {
                  affiche_proposition(liste_proposition[i]);
            }
      });
      

      let zone_option_source = document.querySelectorAll("input[name='option_source']");
      for(j = 0 ;j < zone_option_source.length; j++)
      {
            let choix = zone_option_source[j];
            choix.addEventListener("change",(event)=>{
                  let valeur = event.target.value; // permet de recupérer la valeur du bouton radion selectionner
                  if(valeur == "1")
                  {
                        liste_proposition = liste_mots;
                  }
                  else{
                        liste_proposition = liste_phrases;
                  }
                  affiche_proposition(liste_proposition[i]);
            })
      }

      /* bouton partage */
      let b_zone_partage = document.getElementById('partage');
      b_zone_partage.addEventListener("click",()=>{
            let main = document.querySelector("main");
            let zone_partage = document.querySelector('#info_partage_background');
            console.log(main)
            main.classList.add("invisible");
            zone_partage.setAttribute("class","visible");
            console.log(zone_partage)
      })

      // fonction de validation
      let bali_nom = document.getElementById("nom")
      bali_nom.addEventListener("change",(event)=>{
            est_vide(event.target);
            valide_nom(event.target);
      });
let bali_email = document.getElementById("email");
      bali_email.addEventListener("input",()=>{
            est_vide(bali_email)
            validate_email(bali_email);
      });
let bali_sujet = document.getElementById('message');
      bali_sujet.addEventListener("input",()=>{
            validate_petit_mot(bali_sujet);
      });

      /*partage */
      let bouton_submit =document.querySelector("form");
      bouton_submit.addEventListener("submit",(event)=>{

            event.preventDefault();

            let bali_nom = document.getElementById("nom");
            let nom = bali_nom.value;
            let bali_email = document.getElementById("email");
            let email = bali_email.value;
            let bali_sujet = document.getElementById('message');
            let sujet = bali_sujet.value;
            sujet +=" sur:` http://maliel8.github.io/WriteFastOpc/";
            let score_p = score+"/"+i;
             
            let parent = document.getElementById("sms");
           if(if_class_exist(bali_nom)&&if_class_exist(bali_email)&&if_class_exist(bali_sujet))
           {
                  parent.value="";
                  affiche_email(nom,email,sujet,score_p);
           }else
           {
            let div = `
            <span> veuillez  remplir tout les champs svp !! </span>
            `
            parent.innerHTML = div;
           }
            
           
      });

       
      
      affiche_resultat(score,i);
}
/*fonctions de verifications  */
function valide_nom(nom)
{
      let reg = new RegExp("([a-z0-9._-]{3})");
      let test = reg.test(nom.value);// test de la value de nom avec notre regexp
      teste(nom,test);
}
function validate_email(email)
{
      let reg = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9.-_]+$");
      let test = reg.test(email.value);
      teste(email,test);
     
}
function validate_petit_mot(mot) {
      let reg = new RegExp("[a-z0-9.-_]{5}");
      let test = reg.test(mot.value);
      teste(mot,test);
}

// on verifie si les balise contienne la classe success
function if_class_exist(champ)
{
      if(champ.classList.contains('success'))
      {
            return true;
      }
}
function teste (vari,test)
{
      if (test === true) {
            vari.classList.add("success");
            vari.classList.remove("failure");
      } else {
           vari.classList.add("failure");
           vari.classList.remove("success");
      }
}
function est_vide(champ)
{
      let test = champ.value.trim();
      teste(champ,test);
}
/*fonction affiche email par opc */

      function affiche_email(nom,email,sujet,score)
      {
            let mailto = `mailto:${email}?subject=partage du score 
             write_fast_opc&body=salut,je suis ${nom} et je viens de realiser le score: ${score}
             sur write_fast_opc << ${sujet} >>`;
             location.href=mailto;
      }
/*fin */

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



