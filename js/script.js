
// Jeu du PFC

var Afficheur = function(element) {
        var display = element; 
   
        function setText(message) { 
            display.innerHTML = message; 
        }
        return {sendMessage : setText};
    }
  
    var scortO = 0;
    var scortU = 0;
   
    function comparer(_choixOrdi, _choixUtilisateur) {
   
        if(_choixUtilisateur == _choixOrdi) {
            afficheur.sendMessage("Il y a égalité.</br>L'ordinateur a choisi " + _choixOrdi);
        }
        else if((_choixUtilisateur == "pierre" && _choixOrdi == "ciseaux") || (_choixUtilisateur == "feuille" && _choixOrdi == "pierre") || (_choixUtilisateur == "ciseaux" && _choixOrdi == "feuille")) {
            afficheur.sendMessage("Vous avez gagné.</br>L'ordinateur a choisi " + _choixOrdi);
            scortU++;
        }
        else if((_choixUtilisateur == "feuille" && _choixOrdi == "ciseaux") || (_choixUtilisateur == "pierre" && _choixOrdi == "feuille") || (_choixUtilisateur == "ciseaux" && _choixOrdi == "pierre")) {
            afficheur.sendMessage("Vous avez perdu.</br>L'ordinateur a choisi " + _choixOrdi);
            scortO++;
        }
   
    }
   
    var afficheur = new Afficheur(document.querySelector("#statut-jeu")); 
   
    function FchoixOrdi() {
        var choixOrdi = Math.floor(Math.random() * 51);
   
            if (choixOrdi < 20) {
                choixOrdi = "pierre";
            }
            else if(choixOrdi > 20 && choixOrdi < 40) {
                choixOrdi = "feuille";
            }
            else if(choixOrdi > 40) {
                choixOrdi = "ciseaux";
            }
            return choixOrdi;
    }
   
    function FchoixUtilisateur(_choixUtilisateur) {
   
            if(_choixUtilisateur == "pierre") {
                _choixUtilisateur = "pierre";
            }
            else if(_choixUtilisateur == "feuille") {
                _choixUtilisateur = "feuille";
            }
            else if(_choixUtilisateur == "ciseaux") {
                _choixUtilisateur = "ciseaux";
            }
            return _choixUtilisateur;
    }
 
    function nouvellePartie(){
        scortO = 0;
        scortU = 0;
        $('#block-jeu button').css('display', 'block');
        afficheur.sendMessage("Choisissez un objet");
    }
   
    function main() {
   
        
        var tabchoixUtilisateur = document.querySelectorAll("#block-jeu button"); 
   
        for(var i = 0, taille = tabchoixUtilisateur.length; i < taille; i++){
 
            var finJeu = 0;
   
            afficheur.sendMessage("Choisissez un objet"); 
   
            tabchoixUtilisateur[i].addEventListener("click", function(){
   
                choixUtilisateur = this.id;
   
                var choixU = FchoixUtilisateur(choixUtilisateur);
                var choixO = FchoixOrdi();
                comparer(choixO, choixU);
  
                finJeu++;
  
                    if(finJeu >= 4){
                        $('#block-jeu button').css('display', 'none');
                        afficheur.sendMessage("Le jeu est fini</br>Ordi : " + scortO + "</br>Joueur : " + scortU + "<button onclick='nouvellePartie()'>Rejouer ?</button>"); 
                        finJeu = 0;
                    }
            });
        }
    }
   
    main();