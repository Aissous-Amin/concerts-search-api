# Wemaintain API Backend Test
**Welcome To Concerts API service**

## Installation

This is an ExpressJs application service, before installing, download and install the Node.js and docker.

1. Install [Node.js] (https://nodejs.org) (LTS version)

2. Install docker [Docker-Compose] (https://docs.docker.com/compose/install/)

### Project launch :

1. The project should be imported from the [GitHub](https://github.com/Aissous-Amin/wemaintain-backend-test/tree/develop)
     - You can also get it with the following command : 
          - `git clone https://github.com/Aissous-Amin/wemaintain-backend-test.git`

2. To start the project:

     - With docker-compose : `docker-compose up -d`
             
     - With npm command : `npm run start`
              
3. Generation of JsDoc documentation:
     - `npm run doc`
     
**Note** 
- you can ping the service with this command : 
    - `curl localhost:3000/api/welcome`

## Architecture

**Les différentes couches de l’architecture**

****Couche Application**** 
- Orchestrer les objets du domaine pour exécuter les tâches requises par les utilisateurs finaux.

****Couche Domaine**** 
- Comprend toute la logique métier, les entités, les événements et tout autre type d'objet qui contenant la logique métier.

****Couche Infrastructure**** 
- fonctionnalités techniques qui prennent en charge les couches ci-dessus, comme la couche réseau par exemple.

****Couche Persistance**** 
- Permet de gérer la partie Persistance du service.

 
****DataBanding****
- La communication entre les couches peut seulement se faire de manière descendante, autrement dit une couche ne peut jamais communiquer directement avec une couche située au-dessus d'elle.
