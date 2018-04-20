Projet twitter avec utilisation de Redis et du NoSQL :

Ce projet a &t& réalisé avec Angular 2 en front et Java an back. La liaison avec Redis est faite grâce à la librairie Jedis. Nous utilisons Java avec le framework Spring.

L'objectif était de réaliser un twitter-like en gérant :

	- L'ajout de tweets
	- Le principe de followers/Following
	- Pouvoir voir des tweets selon un #
	- Pouvoir voir le nombre de tweets, d'abonnés et d'abonnements d'une personne.
	- Lister les followers d'une personne
	- Lister les personne que follow une personne
	- Lister les derniers tweets des personnes que je follow

Avec ceci nous avons aussi gérer la connexion (mais pas la déconnexion)	

#twitter with nosql

git clone https://github.com/israelle/twitter.git

npm install
 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
