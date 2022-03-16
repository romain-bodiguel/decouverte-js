const questions = [
    'Combien de joueurs jouent sur un terrain de football (en Ligue 1 par exemple) ?',
    'Combien font 6 x 12 ?',
    'L\'eau est composée de combien d\'atomes ?'
];

const responses = [
    22,
    72,
    3
];


// cette fonction fait tout d'un coup
// function questionPosee(indexQuestion) {
//     let reponseUtilisateur = window.prompt(questions[indexQuestion]);
//     if (reponseUtilisateur == responses[indexQuestion]) {
//         // je sélectionne le bloc de réponses vert
//         let goodAnswer = document.getElementById('right');

//         // je place la question posée dans le bloc sélectionné au-dessus
//         goodAnswer.append(questions[indexQuestion]);

//         console.log('CORRECT');
//     } else {
//         // je sélectionne le bloc de réponses rouge
//         let wrongAnswer = document.getElementById('wrong');

//         // je place la question posée dans le bloc sélectionné au-dessus
//         wrongAnswer.append(questions[indexQuestion]);

//         console.log('FAUX');
//     }
// }

// function playQuiz() {
//     for (let index = 0; index < questions.length; index++) {
//         questionPosee(index);        
//     }
// }

// playQuiz();

// on peut la décomposer
function askQuestion(indexQuestion) {
    let reponseUtilisateur = window.prompt(questions[indexQuestion]);
    return reponseUtilisateur;
}

function checkResponse(indexQuestion, reponseUtilisateur) {
    if (reponseUtilisateur == responses[indexQuestion]) {     
        return true;
    } else {
        return false;
    }
}

function addResponseToDom(indexReponse, isCorrect) {
    let container = '';
    
    if (isCorrect === true) {
        // Si la réponse de l'utilisateur est correcte, on sélectionne le container de bonnes réponses
        container = document.querySelector('#right .responses');
    } else {
        //Sinon, on sélectionne le container de mauvaises réponses
        container = document.querySelector('#wrong .responses');
    }

    // On crée un nouvel li qu'on va insérer dans la page 
    const newLiElement = document.createElement('li');
    
    // On attribue un contenu à notre LI
    newLiElement.textContent = questions[indexReponse];
    
    // On ajoute ce nouvel LI dans le container qu'on a ciblé plus tot
    container.append(newLiElement);
}

// je crée une fonction qui fait jouer toutes les questions et les place dans les bons carrés

function playQuiz2() {
    for (let index = 0; index < questions.length; index++) {
        // Pose la question et récupère la réponse de l'utilisateur
        let response = askQuestion(index);
        
        // Vérifie que la réponse donnée est bien la bonne
        let isCorrect = checkResponse(index, response);
        
        // Modifie le DOM (#right ou #wrong si c'est une bonne ou mauvaise réponse)
        addResponseToDom(index, isCorrect);       
    }
}

playQuiz2();