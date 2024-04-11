document.addEventListener('DOMContentLoaded', function() {
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const startPage = document.getElementById('start-page');
    const quizContainer = document.getElementById('quiz-container');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next');
    const logo = document.getElementById('quiz-logo');
    const tear = document.getElementById('tear');

    let currentQuestionIndex = 0;
    let correctAnswersCount = 0;
    const questions = [
        // Les 5 questions précédentes
        {
            question: "Quel est le principe fondamental du Test-Driven Development (TDD) ?",
            options: ["Écrire des tests après le développement", "Ne pas écrire de tests", "Écrire des tests avant le développement", "Ignorer les tests d'intégration"],
            answer: "Écrire des tests avant le développement",
            explanation: "Le Test-Driven Development (TDD) est une pratique de développement logiciel qui encourage à écrire d'abord les tests pour chaque nouvelle fonctionnalité avant d'écrire le code de cette fonctionnalité."
          },
          {
            question: "Que signifie DDD dans le contexte du développement logiciel ?",
            options: ["Data-Driven Design", "Domain-Driven Design", "Distributed Database Design", "Dynamic Data Design"],
            answer: "Domain-Driven Design",
            explanation: "Domain-Driven Design (DDD) est une approche de développement logiciel axée sur la modélisation du domaine métier complexe pour faciliter la création de logiciels."
          },
          {
            question: "Quel est le but du Behavior-Driven Development (BDD) ?",
            options: ["Augmenter la vitesse de développement", "Améliorer la communication entre les développeurs", "Inciter à la collaboration des différentes parties prenantes au projet logicielle", "Améliorer l'efficacité des tests unitaires"],
            answer: "Inciter à la collaboration des différentes parties prenantes au projet logicielle",
            explanation: "Le Behavior-Driven Development (BDD) est une approche de développement de logiciels qui encourage la collaboration entre les développeurs, les testeurs QA et les parties prenantes non techniques pour améliorer la compréhension des exigences du logiciel."
          },
          {
            question: "CQRS est un acronyme pour ?",
            options: ["Command Query Responsibility Segregation", "Common Query Response System", "Command Query Reactive System", "Common Query Responsibility Segregation"],
            answer: "Command Query Responsibility Segregation",
            explanation: "CQRS (Command Query Responsibility Segregation) est un pattern de conception qui sépare la modification d'un état système (commande) de la lecture de cet état (query), facilitant ainsi la montée en charge et la complexité des systèmes."
          },
          {
            question: "Pourquoi les tests unitaires sont-ils importants dans le développement logiciel ?",
            options: ["Ils garantissent que le code fonctionne sur tous les navigateurs", "Ils permettent de détecter les bugs tôt dans le cycle de développement", "Ils remplacent les tests d'intégration", "Ils augmentent la performance de l'application"],
            answer: "Ils permettent de détecter les bugs tôt dans le cycle de développement",
            explanation: "Les tests unitaires sont cruciaux car ils aident à détecter les bugs dès les premières étapes du développement, facilitant ainsi les corrections avant que le code ne devienne trop complexe."
          },
          {
            question: "Quel est l'objectif principal de l'utilisation de l'intégration continue dans un projet logiciel ?",
            options: ["Minimiser le coût du projet", "Augmenter la fréquence des réunions de projet", "Détecter et corriger rapidement les bugs", "Réduire le nombre de tests à effectuer"],
            answer: "Détecter et corriger rapidement les bugs",
            explanation: "L'intégration continue vise à intégrer et à tester le code fréquemment, permettant ainsi de détecter et de corriger rapidement les bugs, et d'améliorer la qualité du logiciel."
          },
          {
            question: "En quoi consiste le principe YAGNI dans le développement logiciel ?",
            options: ["You Aren't Gonna Need It", "You Always Generate New Ideas", "Your Application's Gonna Need It", "Your Architecture Goes Nuts Immediately"],
            answer: "You Aren't Gonna Need It",
            explanation: "YAGNI (You Aren't Gonna Need It) est un principe de développement logiciel qui encourage à ne pas ajouter de fonctionnalités avant qu'elles ne soient réellement nécessaires, afin d'éviter la complexité inutile."
          },
          {
            question: "Quelle est la principale différence entre l'Agile et le Waterfall en tant que méthodologies de développement ?",
            options: ["Agile est moins structuré que Waterfall", "Agile permet des changements fréquents, contrairement à Waterfall", "Waterfall encourage la rétroaction continue, contrairement à Agile", "Agile est uniquement pour le développement logiciel, Waterfall peut être utilisé dans d'autres industries"],
            answer: "Agile permet des changements fréquents, contrairement à Waterfall",
            explanation: "La différence fondamentale entre Agile et Waterfall réside dans leur approche de la gestion de projet : Agile encourage l'adaptabilité et les changements fréquents, tandis que Waterfall suit un processus linéaire et séquentiel."
          },
          {
            question: "Qu'est-ce que le refactoring du code implique ?",
            options: ["Changer le code externe sans modifier le comportement interne", "Modifier le comportement interne sans changer le code externe", "Améliorer la structure interne du code sans en changer le comportement externe", "Augmenter la vitesse d'exécution du code sans changer sa fonctionnalité"],
            answer: "Améliorer la structure interne du code sans en changer le comportement externe",
            explanation: "Le refactoring est une technique de modification de la structure interne du code pour le rendre plus compréhensible et plus facile à maintenir, sans en changer le comportement externe."
          },
          {
            question: "Qu'est-ce que le principe SOLID en développement logiciel ?",
            options: ["Un ensemble de pratiques pour écrire du mauvais code", "Une base de données performante", "Un ensemble de principes de conception orientée objet", "Une méthodologie de gestion de projet"],
            answer: "Un ensemble de principes de conception orientée objet",
            explanation: "SOLID est un acronyme pour cinq principes de conception orientée objet qui visent à rendre le code plus modulaire, flexible et adaptable : Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, et Dependency Inversion."
          }, 

          {
            question: "A quoi sert l'outil Jira ?",
            options: ["Gestion de versions", "Surveillance de réseau", "Gestion de projets et suivi des bugs", "Automatisation de tests"],
            answer: "Gestion de projets et suivi des bugs",
            explanation: "Jira est un outil développé par Atlassian qui sert principalement à la gestion de projets informatiques et au suivi des bugs, facilitant la collaboration et la planification."
          },
          {
            question: "Quelle est la bonne définition du Clean Code ?",
            options: ["Un code qui ne contient pas de bugs", "Un code bien documenté", "Un code facile à lire, comprendre et modifier", "Un code rapide et performant"],
            answer: "Un code facile à lire, comprendre et modifier",
            explanation: "Le Clean Code désigne un code bien structuré et écrit de manière claire, le rendant facile à lire, comprendre et modifier pour les développeurs."
          },
          {
            question: "A quel besoin répond le framework Jest ?",
            options: ["Développement front-end", "Tests unitaires et d'intégration", "Automatisation des déploiements", "Création d'API REST"],
            answer: "Tests unitaires et d'intégration",
            explanation: "Jest est un framework de tests JavaScript populaire qui permet d'écrire des tests unitaires et d'intégration de manière simple et intuitive."
          },
          {
            question: "Quelle est la bonne description de CircleCI ?",
            options: ["Un jeu vidéo", "Un éditeur de texte pour développeurs", "Une plateforme d'intégration et de livraison continue", "Un gestionnaire de base de données"],
            answer: "Une plateforme d'intégration et de livraison continue",
            explanation: "CircleCI est une plateforme d'intégration continue (CI) et de livraison continue (CD) qui permet d'automatiser le processus de test et de déploiement des applications."
          },
          {
            question: "Un pipeline CI/CD, qu'est-ce que c'est ?",
            options: ["Un type de pipeline de données", "Un processus d'intégration continue et de livraison continue", "Un modèle de développement logiciel", "Une architecture système"],
            answer: "Un processus d'intégration continue et de livraison continue",
            explanation: "Un pipeline CI/CD désigne le processus automatisé qui guide le logiciel à travers les étapes de l'intégration continue (CI) et de la livraison continue (CD), de la construction à la livraison."
          },
          {
            question: "Qu'est-ce qu'un Design pattern ?",
            options: ["Une tendance de design web", "Un modèle de conception logicielle réutilisable", "Une librairie graphique", "Un outil de développement frontend"],
            answer: "Un modèle de conception logicielle réutilisable",
            explanation: "Un Design pattern est un modèle de conception logicielle réutilisable qui vise à résoudre des problèmes communs de conception de logiciels."
          },
          {
            question: "Quel est le principe de l'architecture MVVM ?",
            options: ["Model-View-ViewModel", "Model-ViewController", "Module-View-Controller", "Model-View-Variable"],
            answer: "Model-View-ViewModel",
            explanation: "MVVM (Model-View-ViewModel) est un motif d'architecture logicielle qui facilite la séparation du développement de l'interface utilisateur (la vue) de la logique métier (le modèle) par le biais d'un intermédiaire (le modèle de vue)."
          },
          {
            question: "Comment fonctionnent les tests End-To-End ?",
            options: ["En testant chaque fonction individuellement", "En simulant des interactions utilisateur sur une application", "En vérifiant la performance du réseau", "En mesurant le temps de réponse du serveur"],
            answer: "En simulant des interactions utilisateur sur une application",
            explanation: "Les tests End-To-End simulent des scénarios d'utilisation réels en automatisant les interactions avec l'interface de l'application pour vérifier que tous les composants fonctionnent ensemble correctement."
          },
          {
            question: "Quel est l'intérêt de l'outil Cucumber ?",
            options: ["Génération automatique de rapports de bugs", "Développement de jeux", "Écriture de tests automatisés en langage naturel", "Surveillance des performances des applications"],
            answer: "Écriture de tests automatisés en langage naturel",
            explanation: "Cucumber est un outil qui permet d'écrire des spécifications de tests automatisés en langage naturel, facilitant la collaboration entre les développeurs, les testeurs et les parties prenantes non techniques."
          },
          {
            question: "Comment définir le développement Lean ?",
            options: ["Un processus de développement rapide", "Une méthode de gestion de projet axée sur la réduction des gaspillages", "Un style de codage minimaliste", "Une technique de programmation fonctionnelle"],
            answer: "Une méthode de gestion de projet axée sur la réduction des gaspillages",
            explanation: "Le développement Lean est une approche de gestion de projet qui vise à maximiser la valeur pour le client tout en minimisant le gaspillage de ressources, en s'inspirant des principes de la production allégée (Lean Manufacturing)."
          }
          
          
        
  ];
  
    
  function displayQuestion(question) {
    const questionNumberElement = document.getElementById('question-number');
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`; // +1 parce que l'index commence à 0

    questionElement.textContent = question.question;
    optionsElement.innerHTML = ''; // Efface les options précédentes
    question.options.forEach(function(option) {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', function() {
            const isCorrect = option === question.answer;
            showExplanation(question.explanation); // Ajoutez cette ligne
            if (isCorrect) {
                correctAnswersCount++;
                li.classList.add('correct-answer');
                logo.classList.add('bounce'); // Ajoute la classe pour déclencher l'animation
                setTimeout(() => {
                  logo.classList.remove('bounce'); // Supprime la classe après l'animation
                }, 500); // La durée de l'animation en millisecondes
               } 
            else {
                li.classList.add('wrong-answer');
                tear.style.display = 'block'; // Affiche la larme

            }
            disableOptions();
            if (currentQuestionIndex === questions.length - 1) {
                setTimeout(displayScore, 1000); // Donne du temps pour voir la réponse
            } else {
                nextButton.style.display = 'block';
        setTimeout(() => {
            tear.style.display = 'none'; // Cache la larme après l'animation
        }, 2000); // La durée doit correspondre à celle de l'animation CSS
            }
        });
        optionsElement.appendChild(li);
    });
    nextButton.style.display = 'none'; // Cache le bouton suivant par défaut
}

function disableOptions() {
    Array.from(optionsElement.children).forEach(child => {
        child.style.pointerEvents = 'none';
    });
}

function displayScore() {
  // Masquez la larme et l'explication avant d'afficher le score
    tear.style.display = 'none'; // Assurez-vous que cette ligne utilise l'ID correct de votre élément larme
    hideExplanation(); // Masque l'explication de la dernière question
    const questionNumberElement = document.getElementById('question-number');
  questionNumberElement.style.display = 'none'; // Cette ligne cache l'élément
    const score = Math.round((correctAnswersCount / questions.length) * 100);
    quizContainer.innerHTML = `<h2>Votre score : ${score}%</h2><p>Vous avez répondu correctement à ${correctAnswersCount} sur ${questions.length} questions.</p><button id="restart-quiz-btn">Recommencer le quiz</button>`;
    document.getElementById('restart-quiz-btn').addEventListener('click', restartQuiz);

}

startQuizBtn.addEventListener('click', function() {
    startPage.style.display = 'none';
    quizContainer.style.display = 'block';
    displayQuestion(questions[currentQuestionIndex]);
});

nextButton.addEventListener('click', function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
        hideExplanation();
    }
});

function showExplanation(explanation) {
  const explanationElement = document.getElementById('explanation');
  explanationElement.textContent = explanation;
  explanationElement.style.display = 'block';
}

function hideExplanation() {
  const explanationElement = document.getElementById('explanation');
  explanationElement.style.display = 'none';
  explanationElement.textContent = ''; // Optionnel, pour effacer le texte
}

function restartQuiz() {
  window.location.reload();
}

});







