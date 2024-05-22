# Arcadia

# 1° Installer MAMP (si vous ne l'avez pas déjà)
https://www.mamp.info/en/downloads/
# vérifiez dans les préférences de MAMP que le serveur est bien coché sur Apache. 
# Vérifiez que les ports sont les suivants : 
# Apache Port: 8888
# Nginx Port : 7888
# MySQL Port : 8889
# Démarrez le serveur MAMP : (Start)

# 2° Ouvrez un terminal et vous placer à la racine de htdocs
# Sous Windows
cd C:\MAMP\htdocs

# 3° cloner le repo sur votre disque local 
# Commande cli : 
git clone https://github.com/GuillaumeJego/arcadia-CCF-JEGO.git
# (Bien vous assurer de copier le dossier et le coller C:\MAMP\htdocs\phpMyAdminDossier à la racine de htdocs)

# 4°  ouvrir le dossier tout juste cloné 
# Dans le terminal, tapez la ligne d ecommande suivante : 
cd .\arcadia-CCF-JEGO\

# 5° Tapez la commande suivante pour déplacer le dossier à la racine de htdoc
Move-Item -Path "C:\MAMP\htdocs\arcadia-CCF-JEGO\phpMyAdminDossier" -Destination "C:\MAMP\htdocs\phpMyAdminDossier"

# Vous devriez toujours vous situer ici : 
# C:\MAMP\htdocs\arcadia-CCF-JEGO>

# 6° Maintenant taper la ligne de commande dans votre terminal pour installer les dépendances d'Angular 
npm i 

# 7° Taper maintenant ng serve pour lancer le serveur local 
ng serve 

# 8° Le terminal vous affichera le lien pour accédez à l'application en simulation web.
# c'est généralement : 
Local:   http://localhost:4200/


# base de donnée : lien phpMyAdmin ; 
http://localhost:8888/phpMyAdminDossier/

# Nom utilisateur : 
user1

# mot de passe : 
zUWr/KrCIKsGxpy9

# retrouvez le fichier de ma maquette dans le'url de partage suivant 

https://www.figma.com/design/lt4wjKEfR3M07G6Poodrkh/Arcadia?node-id=0-1&t=ZParXOfaKTyQvTWr-0




Les éléments qui m'ont permis d'alimenter l'application se situe dans 
htdocs\arcadia-CCF-JEGO\src\assets\Images

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
