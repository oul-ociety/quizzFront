import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizList from './pages/QuizListPage';
import CreateQuizPage from './pages/CreateQuizPage';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            QuizApp
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/quizzes">
                  Voir les quiz
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create">
                  Créer un quiz
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/create" element={<CreateQuizPage />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
