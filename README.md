# Hackatweet-front

    # Login page

1 - création de la structure de la page (HTML/JSX) pour la page principale
2 - dans cette page principale, création de boutons qui déclencheront l'affichage de la modale (utilisation de useState ?)
3 - Au clic sur sign up/ sign in ouverture d'un formulaire pr les champs de saisies + une fonctionnalité pour fermer la modale. Création d'une route pour envoyer ces informations au back.
Redirection vers le Home pour un sign in, pr un sign up => enregistrement dans une BDD. (Utilisation d'un token et hacher le mot de passe)
4 - Validation des formulaires ?
Utilisation des 3 composants : login.js, SignUp.js, SignIn.js

    # Home page

1 - Structure de la page en 3 sections (useState?):

- S1 : A gauche, Logo et infos utilisateur + Bouton de déconnexion
- S2 : Au milieu, Zone d'écriture de tweet + affichage des tweets
- S3 : Liste des Trends, hashtags populaires

2 - Fonctionnalité de limite de caractères :
Penser à définir la propriété maxLength={280} sur la textarea dans la section "ajouter un tweet"
Ajouter une validation des données avant l'envoi du tweet dans le fil des tweets + une alerte pour informer l'utilisateur si tweet trop long.

3 - Interactions avec l'utilisateur :

- clic sur logo => redirige l'utilisateur vers la home page
- clic sur le bouton "logout" => déconnecte
- soumettre un tweet => bouton tweet déclenche l'ajout d'un tweet à l'état local et mis à jour des trends

4 - Un ID utlisateur connecté pour savoir si le tweet appartient à l'utilisagteur ou non.
5- Création de composant pour liker ou supprimer les tweets
Cette étape utilise quatre composants : "Home.js", "LastTweets.js", "Tweet.js" et "Trends.js".

    #Hashtag Page

1 - Utilisation de REACT router pour dynamiser les pages en fonction du hashtag cliqué dans la section Trends.(penser à installer REACT router)
