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
            question: "Qui est connu comme le père de l'informatique moderne ?",
            options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Ada Lovelace"],
            answer: "Alan Turing",
            explanation: "Alan Turing est souvent considéré comme le père de l'informatique moderne pour ses contributions théoriques et pratiques fondamentales dans le domaine."
          },

          {
            question: "En quelle année le premier ordinateur programmable a-t-il été inventé ?",
            options: ["1943", "1936", "1951", "1975"],
            answer: "1936",
            explanation: "Le Z1, considéré comme le premier ordinateur programmable, a été inventé par Konrad Zuse en 1936."
          },
          {
            question: "Qui a inventé le langage de programmation C ?",
            options: ["Dennis Ritchie", "Ken Thompson", "Bjarne Stroustrup", "James Gosling"],
            answer: "Dennis Ritchie",
            explanation: "Dennis Ritchie a inventé le langage de programmation C au début des années 1970 au sein des laboratoires Bell."
          },
          {
            question: "Quel était le but principal du projet ARPANET, ancêtre d'Internet ?",
            options: ["Partager des ressources informatiques", "Créer un réseau social", "Jouer en ligne", "Faire du commerce électronique"],
            answer: "Partager des ressources informatiques",
            explanation: "Le projet ARPANET, lancé par l'ARPA, visait principalement à partager des ressources informatiques entre plusieurs sites universitaires et de recherche aux États-Unis."
          },
          {
            question: "Qui est considérée comme la première programmeuse informatique au monde ?",
            options: ["Ada Lovelace", "Grace Hopper", "Hedy Lamarr", "Jean E. Sammet"],
            answer: "Ada Lovelace",
            explanation: "Ada Lovelace est considérée comme la première programmeuse informatique pour avoir écrit des instructions pour le moteur analytique de Charles Babbage au XIXe siècle."
          },
          {
            question: "Quelle innovation est attribuée à Grace Hopper dans le domaine de l'informatique ?",
            options: ["Le premier compilateur", "L'invention du microprocesseur", "La création du premier jeu vidéo", "Le développement de l'intelligence artificielle"],
            answer: "Le premier compilateur",
            explanation: "Grace Hopper est créditée de la création du premier compilateur, un programme qui traduit le code écrit dans des langages de haut niveau en langage machine."
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







