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
            question: "Quel célèbre langage de programmation a été développé par un Français ?",
            options: ["Python", "Java", "C++", "OCaml"],
            answer: "OCaml",
            explanation: "OCaml est un langage de programmation développé en France au sein de l'Institut National de Recherche en Informatique et en Automatique (INRIA)."
          },
    
         
          {
            question: "En quelle année la France a-t-elle inauguré le Minitel, précurseur d'Internet ?",
            options: ["1978", "1982", "1989", "1993"],
            answer: "1982",
            explanation: "Le Minitel, considéré comme un précurseur d'Internet, a été inauguré en France en 1982, offrant des services en ligne avant l'avènement du Web mondial."
          },
          {
            question: "Quel chercheur français a joué un rôle clé dans le développement de la théorie des langages de programmation ?",
            options: ["Alain Colmerauer", "Gérard Berry", "Jean Ichbiah", "Serge Abiteboul"],
            answer: "Alain Colmerauer",
            explanation: "Alain Colmerauer, informaticien français, a joué un rôle déterminant dans le développement de la logique de programmation et la création du langage Prolog."
          },
       
          {
            question: "Quelle est l'invention de René Carmille considérée comme un précurseur du traitement de données ?",
            options: ["La machine à calculer", "La carte perforée", "L'ordinateur personnel", "Le réseau local"],
            answer: "La carte perforée",
            explanation: "René Carmille est considéré comme un pionnier du traitement de données pour avoir utilisé des machines à cartes perforées pour le recensement et la gestion administrative en France."
          },
    
          {
            question: "Qui est le père de l'intelligence artificielle en France, reconnu pour ses recherches sur les algorithmes génétiques ?",
            options: ["Yann LeCun", "Jean-Louis Laurière", "Luc Julia", "Jacques Pitrat"],
            answer: "Jacques Pitrat",
            explanation: "Jacques Pitrat est considéré comme le père de l'intelligence artificielle en France, notamment pour ses travaux pionniers sur les algorithmes génétiques et la métaprogrammation."
          },
          {
            question: "Quelle initiative française vise à promouvoir le logiciel libre et open source ?",
            options: ["La French Tech", "INRIA", "April", "Cap Digital"],
            answer: "April",
            explanation: "April est une initiative française qui promeut le logiciel libre et open source, représentant la communauté et défendant ses valeurs au niveau national et international."
          },

       
          {
            question: "Quelle société française offre des solutions de cloud computing reconnues mondialement ?",
            options: ["OVHcloud", "Capgemini", "Orange", "Altran"],
            answer: "OVHcloud",
            explanation: "OVHcloud est une entreprise française de renommée internationale spécialisée dans le cloud computing, offrant des services d'hébergement web, de serveurs dédiés et de cloud public et privé."
          },
          {
            question: "Quel géant du logiciel français est spécialisé dans les solutions de gestion et de simulation 3D ?",
            options: ["Ubisoft", "Dassault Systèmes", "Sopra Steria", "L'Oréal Tech"],
            answer: "Dassault Systèmes",
            explanation: "Dassault Systèmes est mondialement reconnue pour ses logiciels de conception 3D, de maquettes numériques 3D et de gestion du cycle de vie des produits, contribuant à l'innovation dans diverses industries."
          },
      
       
       
          {
            question: "Quelle entreprise française est reconnue pour ses contributions significatives dans le secteur de la cyber-sécurité ?",
            options: ["Gemalto", "Sophos", "Kaspersky Lab France", "Orange Cyberdefense"],
            answer: "Orange Cyberdefense",
            explanation: "Orange Cyberdefense, branche d'Orange dédiée à la sécurité, est reconnue pour ses contributions significatives dans le secteur de la cyber-sécurité, protégeant les entreprises contre les cybermenaces."
          },
          {
            question: "Quelle entreprise française de jeux vidéo est connue pour la série 'Assassin's Creed' ?",
            options: ["Atari", "Ubisoft", "Gameloft", "Dontnod Entertainment"],
            answer: "Ubisoft",
            explanation: "Ubisoft, entreprise française de jeux vidéo, est mondialement connue pour la série 'Assassin's Creed', parmi d'autres franchises à succès."
          },
          {
            question: "Quelle société française est spécialisée dans les paiements en ligne et les services financiers numériques ?",
            options: ["BNP Paribas", "PayPal France", "Worldline", "Lemon Way"],
            answer: "Worldline",
            explanation: "Worldline est une entreprise française spécialisée dans les paiements en ligne et les services financiers numériques, jouant un rôle clé dans la transformation digitale des paiements."
          },
          {
            question: "Quelle entreprise technologique française est à l'avant-garde de la connectivité IoT (Internet des Objets) ?",
            options: ["Sigfox", "Orange", "Free Mobile", "SFR"],
            answer: "Sigfox",
            explanation: "Sigfox est une entreprise française pionnière dans le domaine de l'IoT, offrant une connectivité globale pour les appareils connectés, facilitant ainsi le développement de solutions IoT innovantes."
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







