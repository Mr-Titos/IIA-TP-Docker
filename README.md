# IIA-TP-Docker

L'utilisation des images publiées depuis un Windows sur le Docker Hub, les images ne sont pas compatibles avec les Mac.

La solution la plus simple semble être de laisser le docker-compose rebuild ses propres images, d'ou l'option 'BUILDER' et 'NO BUILDER' qui respectivement compilent localement une image ou utilise les images publiées sur le Docker Hub.
