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
        {
            "question": "Quel rôle un Data Engineer joue-t-il principalement dans une équipe de développement ?",
            "options": ["Développement d'interfaces utilisateur", "Gestion de bases de données et pipelines de données", "Test de logiciels", "Gestion de projet"],
            "answer": "Gestion de bases de données et pipelines de données",
            "explanation": "Un Data Engineer est responsable de la construction et de la gestion des systèmes de données et des pipelines, permettant le traitement et l'analyse efficaces des données."
          },
       
          {
            "question": "Quel est le principal objectif d'un Ingénieur QA (Quality Assurance) ?",
            "options": ["Création de sites Web", "Assurer la qualité et la fiabilité d'un logiciel", "Déploiement d'applications sur le serveur", "Design graphique"],
            "answer": "Assurer la qualité et la fiabilité d'un logiciel",
            "explanation": "L'objectif principal d'un Ingénieur QA est d'assurer que le logiciel ou l'application répond aux standards de qualité et est exempt de défauts."
          },
          {
            "question": "Quelle est la principale responsabilité d'un DevOps Engineer ?",
            "options": ["Créer des illustrations graphiques", "Gérer l'infrastructure IT et automatiser les processus de déploiement", "Développer des jeux vidéo", "Écrire des articles de blog sur la technologie"],
            "answer": "Gérer l'infrastructure IT et automatiser les processus de déploiement",
            "explanation": "Un DevOps Engineer se concentre sur l'automatisation et l'optimisation des processus entre les équipes de développement logiciel et les équipes opérationnelles IT."
          },
        
      
          {
            "question": "Qu'est-ce qui distingue un Data Scientist d'un Data Analyst ?",
            "options": ["Le Data Scientist crée des présentations PowerPoint", "Le Data Scientist se concentre davantage sur la collecte de données", "Le Data Scientist utilise des techniques avancées pour modéliser et prédire à partir de données", "Le Data Scientist travaille exclusivement avec des données textuelles"],
            "answer": "Le Data Scientist utilise des techniques avancées pour modéliser et prédire à partir de données",
            "explanation": "Tandis que les Data Analysts peuvent se concentrer sur l'analyse de données existantes pour obtenir des insights, les Data Scientists utilisent des modèles prédictifs et prescriptifs."
          },
          {
            "question": "Quel rôle joue un Architecte Logiciel dans une équipe de développement ?",
            "options": ["Design de mode", "Conception et supervision de la structure technique d'une application", "Gestion d'événements corporatifs", "Production musicale"],
            "answer": "Conception et supervision de la structure technique d'une application",
            "explanation": "L'Architecte Logiciel est responsable de la conception de l'architecture globale d'une application, en s'assurant qu'elle soit scalable, performante et maintenable."
          },
         
          
          
          {
            question: "Qu'est-ce qu'une 'Merge request' dans le contexte du développement logiciel ?",
            options: [
              "Une demande pour fusionner plusieurs branches de code dans un référentiel Git",
              "Une requête pour fusionner des données de différentes sources dans une base de données",
              "Une demande pour fusionner des fichiers de configuration dans un projet",
              "Une demande pour fusionner des éléments de conception dans une application web"
            ],
            answer: "Une demande pour fusionner plusieurs branches de code dans un référentiel Git",
            explanation: "Une 'Merge Request' permet aux développeurs de soumettre le code qu'ils ont travaillé dans une branche séparée au sein du même dépôt pour qu'il soit examiné et éventuellement fusionné avec la branche principale ou une autre branche cible."
          },
          
          {
            question: "Qu'est-ce que Svelte dans le domaine du développement web ?",
            options: [
              "Un langage de programmation orienté objet",
              "Une bibliothèque JavaScript pour la création d'interfaces utilisateur",
              "Un système de gestion de bases de données relationnelles",
              "Un framework CSS pour la conception de sites web"
            ],
            answer: "Une bibliothèque JavaScript pour la création d'interfaces utilisateur",
            explanation: "Svelte est un outil innovant pour construire des interfaces utilisateur. Contrairement à d'autres frameworks et bibliothèques qui opèrent principalement dans le navigateur, Svelte déplace une grande partie du travail de traitement dans une étape de compilation qui se produit lorsque vous construisez votre application."
          },
          
          {
            question: "Lequel de ces frameworks Vue a été développé par des français ?",
            options: [
              "Nuxt",
              "Flask",
              "Angular",
              ".NET"
            ],
            answer: "Nuxt",
            explanation: "Nuxt est un framework basé sur Vue.js qui facilite le développement d'applications universelles ou à rendu côté serveur, améliorant ainsi significativement les performances et l'expérience utilisateur en préchargeant la structure de la page côté serveur avant qu'elle n'atteigne le client."
          },
          
          {
            question: "Qu'est-ce que GitHub et quel est son rôle dans le développement logiciel ?",
            options: [
              "Un système de gestion de base de données distribuées",
              "Une plateforme de développement collaboratif utilisant Git",
              "Un langage de programmation pour les applications web",
              "Un framework pour le développement d'applications mobiles"
            ],
            answer: "Une plateforme de développement collaboratif utilisant Git",
            explanation: "GitHub est une plateforme de développement logiciel qui facilite la collaboration et le partage de code entre les développeurs. Utilisant le système de contrôle de version Git, elle permet aux équipes de collaborer sur des projets de toute taille avec une gestion efficace du code source et des modifications."
          },
          
          {
            question: "Qu'est-ce qu'Ansible et comment est-il utilisé dans l'automatisation des tâches informatiques ?",
            options: [
              "Un système de gestion de versions pour les projets de développement logiciel",
              "Un outil d'orchestration pour la configuration et le déploiement d'applications sur des serveurs",
              "Une bibliothèque JavaScript pour l'analyse de données",
              "Une plateforme de collaboration en ligne pour les équipes de développement"
            ],
            answer: "Un outil d'orchestration pour la configuration et le déploiement d'applications sur des serveurs",
            explanation: "Ansible est un outil puissant d'automatisation IT qui permet de gérer facilement et de manière centralisée la configuration des serveurs, le déploiement d'applications et l'orchestration de tâches complexes à travers des environnements informatiques divers."
          },

          {
            question: "Quel est le rôle principal de Kubernetes dans le déploiement d'applications en conteneurs ?",
            options: [
              "Gestion des bases de données relationnelles",
              "Orchestration et gestion des conteneurs",
              "Gestion des instances virtuelles dans le cloud",
              "Surveillance des performances du réseau"
            ],
            answer: "Orchestration et gestion des conteneurs",
            explanation: "Kubernetes est un système d'orchestration de conteneurs open source qui automatise le déploiement, la mise à l'échelle et la gestion des applications conteneurisées. Il aide à gérer des clusters de conteneurs à grande échelle."
          },
          
          {
            question: "Quel est l'objectif principal de DevOps dans le développement logiciel ?",
            options: [
              "Automatiser les opérations de développement uniquement",
              "Optimiser les coûts de développement",
              "Améliorer la collaboration entre les équipes de développement et d'exploitation",
              "Accélérer la rédaction de la documentation du code"
            ],
            answer: "Améliorer la collaboration entre les équipes de développement et d'exploitation",
            explanation: "DevOps est une approche qui vise à améliorer la collaboration entre les équipes de développement (Dev) et d'exploitation (Ops) afin d'accélérer le cycle de vie du développement logiciel, depuis la conception jusqu'à la livraison et le déploiement."
          },
          
          {
            question: "Quel est le rôle de Terraform dans le provisionnement et la gestion d'infrastructures ?",
            options: [
              "Un langage de programmation pour le développement d'applications web",
              "Une plateforme de surveillance des performances des serveurs",
              "Un outil pour l'automatisation de la création et de la gestion d'infrastructures cloud",
              "Une base de données NoSQL pour le stockage de données non structurées"
            ],
            answer: "Un outil pour l'automatisation de la création et de la gestion d'infrastructures cloud",
            explanation: "Terraform est un outil d'Infrastructure as Code (IaC) qui permet de définir et de provisionner l'infrastructure cloud à l'aide d'un langage de configuration de haut niveau. Il facilite la gestion des ressources cloud de manière reproductible et prévisible."
          },
          
          {
            question: "Qu'est-ce que Docker et comment est-il utilisé dans le développement logiciel ?",
            options: [
              "Un langage de programmation pour le développement d'applications mobiles",
              "Un système de gestion de bases de données relationnelles",
              "Une plateforme de déploiement d'applications en conteneurs",
              "Un framework CSS pour la conception d'interfaces utilisateur"
            ],
            answer: "Une plateforme de déploiement d'applications en conteneurs",
            explanation: "Docker est une plateforme de conteneurisation qui permet de développer, déployer et exécuter des applications dans des conteneurs légers et portables. Ces conteneurs encapsulent une application avec tous ses environnements et dépendances, facilitant ainsi le déploiement et la scalabilité."
          },
          
          {
            question: "Qu'est-ce que le serverless computing et comment diffère-t-il des méthodes traditionnelles de déploiement d'applications ?",
            options: [
              "Un modèle de déploiement d'applications qui élimine totalement l'utilisation de serveurs",
              "Une méthode pour réduire la taille des fichiers de code source",
              "Un framework pour la création de serveurs web",
              "Une approche de développement qui nécessite des serveurs dédiés pour chaque application"
            ],
            answer: "Un modèle de déploiement d'applications qui élimine totalement l'utilisation de serveurs",
            explanation: "Le serverless computing est un modèle de cloud computing où le fournisseur de cloud gère dynamiquement l'allocation des ressources serveur. Les développeurs n'ont pas besoin de se préoccuper de la gestion des serveurs, ce qui permet de se concentrer davantage sur le développement de l'application elle-même."
          },

          {
            question: "Qu'est-ce qu'un ORM et à quoi sert-il en développement logiciel ?",
            options: [
              "Un outil de déploiement automatique des applications",
              "Un framework de tests unitaires",
              "Un modèle de conception pour l'interface utilisateur",
              "Un outil qui facilite la manipulation et l'accès aux données en utilisant des objets"
            ],
            answer: "Un outil qui facilite la manipulation et l'accès aux données en utilisant des objets",
            explanation: "ORM (Object-Relational Mapping) est une technique de programmation qui permet de convertir les données entre les systèmes de base de données incompatibles et les objets programmés en langage de haut niveau."
          },
          
          {
            question: "Quelles sont les principales plates-formes de cloud computing ?",
            options: [
              "Azure, AWS, GCP",
              "Oracle Cloud, IBM Cloud, Alibaba Cloud",
              "Google Play Console, Microsoft Store, Apple App Store",
              "Adobe Creative Cloud, Salesforce, SAP Cloud Platform"
            ],
            answer: "Azure, AWS, GCP",
            explanation: "Azure (Microsoft), AWS (Amazon Web Services) et GCP (Google Cloud Platform) sont les trois principales plates-formes de cloud computing, offrant une large gamme de services d'infrastructure et de plate-forme à la demande."
          },
          
          {
            question: "Qu'est-ce que jQuery et quel est son rôle dans le développement web ?",
            options: [
              "Une bibliothèque JavaScript pour simplifier la manipulation du DOM et les interactions AJAX",
              "Un langage de programmation pour le développement d'applications mobiles",
              "Un framework CSS pour la conception de sites web",
              "Un outil de conception graphique pour les interfaces utilisateur"
            ],
            answer: "Une bibliothèque JavaScript pour simplifier la manipulation du DOM et les interactions AJAX",
            explanation: "jQuery est une bibliothèque JavaScript rapide et concise qui simplifie la traversée et la manipulation de documents HTML, la gestion des événements, l'animation et les interactions Ajax pour un développement web rapide."
          },
          
          {
            question: "Qu'est-ce qu'Elasticsearch et comment est-il utilisé en développement logiciel ?",
            options: [
              "Un moteur de recherche et d'analyse de données en temps réel",
              "Une plateforme de déploiement d'applications web",
              "Un système de gestion de contenu pour les sites web",
              "Un outil de gestion des bases de données relationnelles"
            ],
            answer: "Un moteur de recherche et d'analyse de données en temps réel",
            explanation: "Elasticsearch est un moteur de recherche et d'analyse distribué, capable de résoudre un nombre croissant de cas d'utilisation. En tant que cœur de la Suite Elastic, il centralise les données de votre organisation pour une recherche rapide, des analyses et des visualisations à grande échelle."
          },
          
          {
            question: "Pourquoi utiliser JSON dans le développement web ?",
            options: [
              "Pour créer des animations interactives sur les pages web",
              "Pour stocker et transporter des données entre un serveur et un client web",
              "Pour styliser les pages web",
              "Pour accélérer la vitesse de chargement des pages web"
            ],
            answer: "Pour stocker et transporter des données entre un serveur et un client web",
            explanation: "JSON (JavaScript Object Notation) est un format léger d'échange de données, facile à lire et à écrire pour les humains, et facile à analyser et à générer pour les machines. Il est utilisé principalement pour transmettre des données entre un serveur et un client web comme alternative à XML."
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







