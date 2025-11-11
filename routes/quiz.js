const express = require('express');
const router = express.Router();

// preguntas de ejemplo
const questions = [
  {
    id: 1,
    text: '¿Qué significa HTML?',
    options: {
      A: 'HyperText Markup Language',
      B: 'Home Tool Markup Language',
      C: 'Hyperlinks and Text Markup Language'
    },
    correct: 'A'
  },
  {
    id: 2,
    text: '¿Cuál es el puerto por defecto de HTTP?',
    options: {
      A: '21',
      B: '80',
      C: '443'
    },
    correct: 'B'
  },
  {
    id: 3,
    text: '¿Qué comando inicia un proyecto Node.js?',
    options: {
      A: 'npm init',
      B: 'node start',
      C: 'npm install express'
    },
    correct: 'A'
  },
  {
    id: 4,
    text: '¿Quien es el profe más bacán de PuenteMaipo?',
    options: {
      A: 'McLovin',
      B: 'Gustavin (El muñeco hecho de globos)',
      C: 'Ponsex',
      D: 'Parejassss'
    },
    correct: 'C'
  }
];

// mostrar el quiz
router.get('/', (req, res) => {
  res.render('quiz', { questions });
});

// procesar respuestas
router.post('/submit', (req, res) => {
  const userAnswers = req.body; // { '1': 'A', '2': 'B', ... }
  let score = 0;

  questions.forEach(q => {
    const userAnswer = userAnswers[q.id]; // viene como string
    if (userAnswer === q.correct) {
      score++;
    }
  });

  res.render('result', {
    total: questions.length,
    score,
    questions,
    userAnswers
  });
});

module.exports = router;
