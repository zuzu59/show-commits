# show-commits
Permet d'afficher les détails des *commits* d'un dépôt dans une page WEB afin de se créer un mini *cahier de laboratoire* pour son projet

zf200820.1610

<!-- TOC titleSize:2 tabSpaces:2 depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 skip:1 title:1 charForUnorderedList:* -->
## Table of Contents
* [Buts](#buts)
* [Moyens](#moyens)
* [Utilisation](#utilisation)
<!-- /TOC -->


## Buts
Quand on fait des *commits* on n'est pas obligé de se contenter de mettre juste quelques mots (*messages*) pour décrire le *commit*, on peut mettre une description de la problématique que l'on a résolue et comment on la résolue. On peut même mettre le travail qu'il reste encore  faire.

Du coup, on a un mini cahier de laboratoire de son projet dans les *commits* !

Mais Github ne présente que la première ligne des *messages* des commits, pour avoir les détails, donc l'histoire du projet, il faut cliquer un après un sur les petits points.

Ce projet, va donc simplement, au moyen de l'API de Github, afficher sur une page WEB tous les *détails* du commit.



## Moyens
Pour le faire très facilement et ne pas à avoir à maintenir une infra de serveurs, on va utiliser les Github Pages:

https://pages.github.com/

La moulinette qui va se connecter sur l'API des *commits* de Github pour en faire la mise en forme sera un petit script JS.


## Utilisation
Il faut simplement 

* dupliquer le fichier .js et le modifier en conséquence afin qu'il affiche les *détails* des commits du dépôt en question

* modifier la *TOC*, qui est le fichier *index.html*, pour ajouter le mini cahier de laboratoire

Et simplement, au bout de 30 secondes environ, on peut regarder le résultat sur:

https://zuzu59.github.io/show-commits/

Dans la documentation de son projet on peut alors glisser directement l'url du mini *cahier de laboratoire*:

https://zuzu59.github.io/show-commits/NodeMCU_Lua.html

Et ainsi on pourra suivre toute l'évolution du projet date après date.


