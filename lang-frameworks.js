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
          question: "Quel framework est associé au langage de programmation Python ?",
          options: ["Laravel", "Django", "Vue.js", "Spring"],
          answer: "Django",
          explanation: "Django est un framework web de haut niveau qui encourage le développement rapide et propre, avec une conception pragmatique. Il est écrit en Python."
        },
        {
          question: "React est un framework pour quel langage de programmation ?",
          options: ["JavaScript", "TypeScript", "Python", "C#"],
          answer: "JavaScript",
          explanation: "React est une bibliothèque JavaScript open-source conçue pour créer des interfaces utilisateur avec un focus sur la réactivité et la réutilisation des composants."
        },
        {
          question: "Quel langage de programmation est utilisé par le framework Spring ?",
          options: ["Java", "JavaScript", "Python", "Ruby"],
          answer: "Java",
          explanation: "Spring est un framework de programmation et de configuration modèle pour Java."
        },
     
        {
          question: "Quel framework JavaScript est idéal pour développer des applications single-page ?",
          options: ["Angular", "React", "Vue.js", "Next.js"],
          answer: "Angular",
          explanation: "Angular est un framework de développement d'applications web et mobiles en JavaScript, TypeScript et HTML qui permet de créer des applications single-page efficaces."
        },
        {
          question: "Quel langage est principalement utilisé pour le développement d'applications iOS ?",
          options: ["Swift", "Kotlin", "Java", "Objective-C"],
          answer: "Swift",
          explanation: "Swift est un puissant langage de programmation imaginé par Apple pour le développement d'apps iOS, Mac, Apple TV et Apple Watch."
        },
        {
          question: "Quel est le principal avantage de TypeScript par rapport à JavaScript ?",
          options: ["Vitesse d'exécution", "Typage statique", "Compatibilité avec les anciens navigateurs", "Facilité d'apprentissage"],
          answer: "Typage statique",
          explanation: "TypeScript est un sur-ensemble de JavaScript qui ajoute des types statiques, ce qui peut aider à détecter les erreurs au moment de la compilation."
        },
        {
          question: "Lequel de ces frameworks est utilisé pour le développement d'applications mobiles cross-platform ?",
          options: ["React Native", "Angular", "Vue.js", "Django"],
          answer: "React Native",
          explanation: "React Native permet de développer des applications mobiles natives pour iOS et Android en utilisant React, un framework JavaScript."
        },
        {
          question: "Quel framework PHP est connu pour sa simplicité et son élégance ?",
          options: ["Symfony", "Laravel", "Zend Framework", "CodeIgniter"],
          answer: "Laravel",
          explanation: "Laravel est un framework PHP web gratuit et open-source, conçu pour le développement d'applications web suivant le modèle MVC (modèle-vue-contrôleur)."
        },

        {
          question: "Sur quelle bibliothèque s'appuie le framework Next.js ?",
          options: [
            "Vue.js",
            "Angular",
            "React",
            "Svelte"
          ],
          answer: "React",
          explanation: "Next.js est un framework de développement web côté serveur basé sur React, qui permet de créer des applications web et des sites statiques."
        },
        {
          question: "Quelle est la spécificité de Rust ?",
          options: [
            "Son système de types pour la sécurité mémoire sans garbage collector",
            "Son utilisation principale dans le développement web frontend",
            "Sa syntaxe similaire à Python",
            "Son exécution uniquement sur les systèmes Windows"
          ],
          answer: "Son système de types pour la sécurité mémoire sans garbage collector",
          explanation: "Rust est conçu pour offrir une sécurité mémoire sans avoir besoin d'un garbage collector, grâce à son système de propriété et d'emprunt."
        },
        {
          question: "Quelle entreprise a inventé le langage Go et qu'est-ce qui le différencie des autres ?",
          options: [
            "Microsoft, sa syntaxe simplifiée",
            "Google, sa performance et sa simplicité",
            "Facebook, son orientation objet",
            "Apple, son intégration native sur iOS"
          ],
          answer: "Google, avec sa performance et sa simplicité",
          explanation: "Go, aussi connu sous le nom de Golang, a été créé par Google pour combiner la facilité de programmation d'un langage script avec la performance et la sécurité d'un langage compilé."
        },
        {
          question: "Lequel de ces langages est connu pour être vieillissant ?",
          options: [
            "Python",
            "Rust",
            "Cobol",
            "Go"
          ],
          answer: "Cobol",
          explanation: "Cobol est un des plus anciens langages de programmation qui est encore utilisé aujourd'hui, principalement dans des systèmes hérités."
        },
        {
          question: "À quoi sert le langage Solidity ?",
          options: [
            "Développement d'applications de bureau",
            "Programmation de microcontrôleurs",
            "Création de contrats intelligents pour les blockchains comme Ethereum",
            "Développement de jeux vidéo"
          ],
          answer: "Création de contrats intelligents pour les blockchains comme Ethereum",
          explanation: "Solidity est un langage orienté contrat qui permet de développer des contrats intelligents, utilisés sur des plateformes de blockchain telles qu'Ethereum."
        },
        {
          question: "Lequel de ces langages est bas niveau et à quoi sert-il ?",
          options: [
            "CSS, pour le style des pages web",
            "Python, pour les scripts côté serveur",
            "C, pour le développement système et le contrôle matériel",
            "TypeScript, pour le développement d'applications web"
          ],
          answer: "C, pour le développement système et le contrôle matériel",
          explanation: "Les langages de bas niveau, tel que C, permettent une interaction plus directe et plus performante avec le matériel informatique."
        },
        {
          question: "Quel langage est considéré comme difficile à apprendre ?",
          options: [
            "Python",
            "JavaScript",
            "HTML",
            "C++"
          ],
          answer: "C++",
          explanation: "C++ est souvent considéré comme difficile à apprendre en raison de sa complexité, de sa syntaxe exigeante et de son modèle de mémoire manuel."
        },
        {
          question: "Quel est le point commun entre NestJS et Express ?",
          options: [
            "Ils sont tous deux des langages de programmation",
            "Ils sont utilisés pour le développement de jeux vidéo",
            "Ils sont des frameworks pour Node.js",
            "Ils sont principalement utilisés pour la programmation front-end"
          ],
          answer: "Ils sont des frameworks pour Node.js",
          explanation: "NestJS et Express sont deux frameworks populaires qui facilitent le développement d'applications web côté serveur avec Node.js."
        },
        {
          question: "Quelle est la particularité de Flutter ?",
          options: [
            "C'est un framework pour le développement d'applications desktop uniquement",
            "C'est un framework de Google pour le développement d'applications mobiles cross-platform",
            "C'est un outil pour créer des animations web complexes",
            "C'est un système d'exploitation pour appareils mobiles"
          ],
          answer: "C'est un framework de Google pour le développement d'applications mobiles cross-platform",
          explanation: "Flutter est un framework UI open-source créé par Google pour le développement d'applications mobiles, web et desktop à partir d'une seule base de code."
        }, 
        
        
        {
          question: "Quelle est la spécificité de Rails ?",
          options: [
            "C'est un langage de programmation fonctionnel",
            "C'est un système de gestion de base de données",
            "C'est un framework pour applications web écrit en Ruby",
            "C'est un outil de virtualisation"
          ],
          answer: "C'est un framework pour applications web écrit en Ruby",
          explanation: "Rails, ou Ruby on Rails, est un framework web côté serveur qui suit le motif de conception MVC (Modèle-Vue-Contrôleur), facilitant le développement d'applications web complexes."
        },
        {
          question: "Sur quel langage est basé le framework Flask ?",
          options: [
            "JavaScript",
            "Python",
            "PHP",
            "Java"
          ],
          answer: "Python",
          explanation: "Flask est un micro-framework web léger écrit en Python. Il est conçu pour rendre le démarrage rapide et facile, avec la capacité de s'étendre à des applications complexes."
        },

        {
          question: "Sur quel langage le framework .NET est-il basé et quelle en est sa spécificité ?",
          options: ["C#", "JavaScript", "Python", "Java"],
          answer: "C#",
          explanation: "Le framework .NET est principalement basé sur le langage de programmation C#. Sa spécificité réside dans sa capacité à permettre le développement d'une large gamme d'applications – de l'application web au développement de jeux – tout en offrant un environnement de développement intégré riche et des bibliothèques complètes."
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







