
/* fichier contenant toutes les fonction de notre jeu  */

// c'est la fonction principale
function lancer_jeu() 
{
      let choix = choisir_phrases_ou_mots();
      let score = 0;
      let nbr_tt_proposer = 0;

      if(choix === "mots")
      {
            score = lancer_boucle_de_jeu(list_mots);
            nbr_tt_proposer = list_mots.length;
      }
      else 
      {
            score = lancer_boucle_de_jeu(liste_phrases);
            nbr_tt_proposer = liste_phrases.length;
      }

     affiche_resultat(score,nbr_tt_proposer);

} 

// fonction affichant le nombre de reponce juste trouver
function affiche_resultat(score,nbr_tt_proposer)
{
      console.log("votre score est de : "+score+" sur "+nbr_tt_proposer);
}

//fonction de choix du type de jeu (mots ou phrase)
function choisir_phrases_ou_mots()
{
      let choix = prompt(" avec quelle liste desirez vous jouer : 'mots' ou 'phrases'");
      while(choix !== "mots" && choix !== "phrases")
      {
            choix = prompt("avec quelle liste voulez vous jouer : 'mots' ou 'phrases' ");
      }
      return choix;
}

// fonction de test elle compare la proposition de l'utilisateur et celle proposer par le jeu
function lancer_boucle_de_jeu(liste)
{
      let score = 0;
      for(let i = 0 ; i < liste.length ; i++)
      {
            let proposition_utilisateur = prompt("entrez la valeur ==> " +liste[i]);
            if(proposition_utilisateur === liste[i])
            {
                  score ++;
            }
      }
      return score;
}
