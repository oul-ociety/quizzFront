import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/HomePage';
import CreateQuiz from './pages/CreateQuizPage';
import QuizList from './pages/QuizListPage';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/quizzes">Voir les quiz</Link> |{" "}
        <Link to="/create">Créer un quiz</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/create" element={<CreateQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
