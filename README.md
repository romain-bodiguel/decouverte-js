# Quiz

On va monter un petit jeu de quiz en Javascript :heart_eyes:

## Code fourni

- `index.html` le fichier HTML contenant le Quiz qui inclut :
    - `css/style.css` le fichier des styles CSS à agrémenter au besoin
    - `js/questions.js` le fichier contenant toutes les questions (et leur réponse) de notre Quiz
    - `js/app.js` le fichier principal de notre code Javascript

## Challenge

Au cours des étapes, seulement si vous êtes bloqués, vous pouvez regarder ce qui est écrit dans _Aide / Guide_ :eyes:  
Sinon, faites avec les connaissances acquises et n'oubliez pas, votre première idée est très souvent la bonne :muscle:

### Etape 1 - Première question

Avec les notions apprises, au lancement de la page, poser la première question du fichier `js/questions.js`.

<details><summary>Aide / Indices</summary>

- le premier index n'est pas `1`, mais  `0` :wink:
- la variable `questions` créée dans ce fichier est disponible dans tout le code JavaScript
- on va donc utiliser cette variable pour accéder à la première question du tableau

</details>

### Etape 2 - Récupérer la réponse de l'utilisateur

Au moment de poser la question, dans le code, récupérer la réponse de l'utilisateur et l'afficher dans la console.

<details><summary>Aide / Indices</summary>

- https://developer.mozilla.org/fr/docs/Web/API/Window/prompt
- la réponse de l'utilisateur est retournée par la fonction `prompt` :wink:

</details>

### Etape 3 - Vérifier la réponse

En se basant sur les données du fichier `js/questions.js`, vérifier que la réponse est bien celle attendue.  
Si c'est la bonne réponse, afficher "CORRECT" dans la console, "faux" sinon.

<details><summary>Aide / Indices</summary>

- récupérer la réponse attendue pour la question posée
  - la variable `responses` créée dans `js/questions.js` est disponible dans tout le code JavaScript
  - les index/clés de ce tableau sont les mêmes que pour le tableau `questions`
  - autrement dit, la réponse à question ayant l'index/clé 2, se trouve dans le tableau `responses`, à l'index/clé 2
- comparer la réponse attendue avec la réponse effectuée
- si la réponse est correcte
  - afficher dans la console "CORRECT"
- sinon
  - afficher dans la console "faux"

</details>

### Etape 4 - Modifier le DOM

Si la réponse est correcte, ajouter **la question** correspondante dans la liste verte, sinon, dans la liste rouge

<details><summary>Aide / Indices</summary>

- analyse bien le code HTML fourni
- un `id` permet de faciliter le ciblage de la liste verte ou rouge

</details>

### Etape 5 - On crée des fonctions :nerd_face:

On va mieux structurer notre code.  
Mais une fonction n'est pas suffisante. En effet, une fonction doit avoir un but simple, précis et "atomique" (le plus petit possible). Cela signifie qu'il vaut mieux 3 fonctions qu'une seule qui fait tout. Chaque fonction pouvant alors être réutilisée dans un autre contexte.

Bien entendu, le but de nos fonctions ne sera pas, par exemple, de _Poser la première question_. Ce sera plutôt de _Poser la question dont l'index est fourni en paramètre_. Le but doit être plus "générique" pour être utilisable et réutilisable.  

<details><summary>Aide / Indices</summary>

Voici le code qui utiliserait ces 3 fameuses fonctions :

```js
// Pose la premère question et récupère la réponse de l'utilisateur
let response = askQuestion(0);

// Vérifie que la réponse donnée est bien la bonne
let isCorrect = checkResponse(0, response);

// Modifie le DOM (#right ou #wrong si c'est une bonne ou mauvaise réponse)
addResponseToDom(0, isCorrect);
```

</details>

### Etape 6 - On boucle ! :muscle:

Maintenant qu'on a réussi un "cycle complet" du jeu pour une question, tout en utilisant des fonctions, on peut passer à l'étape suivante : **poser toutes les questions** du tableau.

Et comme on aime structurer correctement notre code, le jeu (la boucle) va être placée dans une fonction :tada:

<details><summary>Rappel: parcourir un tableau en JS</summary>

```js
// Un tableau contenant 3 éléments
let monTableau = [
    'Riri',
    'Fifi',
    'Loulou',
];
// #1 - Boucle "for" permettant de parcourir ce tableau 1 à 1
for (let index=0; index < monTableau.length; index++) {
    // Je récupère la valeur pour l'élément "courant" dans une variable
    let currentValue = monTableau[index];

    // J'affiche la valeur dans la console
    console.log('index='+ index +' & valeur='+currentValue);
}
// #2 - Boucle "for in" permettant de parcourir ce tableau 1 à 1
for (let index in monTableau) {
    // Je récupère la valeur pour l'élément "courant" dans une variable
    let currentValue = monTableau[index];

    // J'affiche la valeur dans la console
    console.log('index='+ index +' & valeur='+currentValue);
}
```

</details>

<details><summary>Aide / Indices</summary>

- on ne va plus se contenter de la première question !
- créer une fonction `playQuiz()`
- cette fonction boucle sur le tableau de questions
- puis pour chaque question :
    - on demande une réponse à l'internaute et on la récupère
    - on vérifie si la réponse est correcte
    - on ajoute la question dans la liste verte ou rouge si ok ou ko

</details>

## Bonus :rainbow:

- on compte les bonnes réponses et les mauvaises réponses
- on affiche le nombre de bonnes et mauvaises réponses à la fin des balises `<h2>`
- on ajoute d'autres questions :nerd_face:

## Bonus :boom:

- on utilise désormais `createElement` pour créer un élément : https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
- puis on ajoute cet élément dans le DOM avec `append` : https://developer.mozilla.org/fr/docs/orphaned/Web/API/ParentNode/append
