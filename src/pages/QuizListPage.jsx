import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/quizzes')
      .then(response => {
        setQuizzes(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Erreur lors du chargement des quizzes');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-5">Chargement des quizzes...</p>;
  if (error) return <p className="text-danger text-center mt-5">{error}</p>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Liste des quizzes</h1>

      {quizzes.length === 0 ? (
        <p>Aucun quiz trouvé.</p>
      ) : (
        <div className="row">
          {quizzes.map(quiz => (
            <div key={quiz._id} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{quiz.title}</h5>
                  <p className="card-text">{quiz.description}</p>
                  <p className="card-text mb-1"><strong>Créé par :</strong> {quiz.createdBy}</p>
                  <p className="card-text"><strong>Nombre de questions :</strong> {quiz.questions.length}</p>
                  {/* Si tu veux ajouter un bouton pour voir plus, tu peux ici */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizList;
