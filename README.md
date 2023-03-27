# Exercice 08 - Consommer une api avec Axios

En vous inspirant de l'affichage présenté sur le site [https://randomuser.me/](https://randomuser.me/), créez une application React qui affichera certaines informations d'un utilisateur obtenu grâce à un appel à l'api du même site.

## Instructions

- Créez un nouveau projet avec **Create React App** que vous nommerez ex08_nom_prenom et faite le nécessaire le relier à un dépôt Github sur votre compte personnelle.
- À l'affichage et au rafraichissement de la page, votre application doit faire un appel à l'api de **RandomUser** et afficher les informations obtenues dans un composant "carte".
- Je vous laisse "découper" la carte en composant comme bon vous semble mais ça vous prends minimalement les composants suivants : 
  - `Card` : Le composant "maitre" qui va englober les autres.
  - `Avatar` : Il s'occupe d'afficher uniquement la photo.
  - `Information` : La zone du bas où sont affiché les informations de l'usager
- Le composant doit être autonome, c'est-à-dire que si je l'inclus 2 fois dans la page, deux appels différent à l'api seront fait.
- Consulter la documentation du site [https://randomuser.me/api/](https://randomuser.me/api/) pour connaître l'url à utiliser et connaitre le format de la réponse.
- Dans la section information, quand on clique sur un des icones, l'information affichée sous la photo doit être modifié en conséquence. Référez-vous à l'affichage fait sur [https://randomuser.me/](https://randomuser.me/).
- Une fois l'exercice terminé, poussez votre projet sur GitHub et retournez le devoir Teams associé avec l'url de votre dépôt.