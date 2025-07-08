import { useEffect, useState } from 'react';
import axios from 'axios';

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/');
        setQuizzes(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Erreur lors du chargement des quiz!');
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  if (loading) return <p className="load">Chargement en cours...</p>;
  if (error) return <p className="danger">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="title1">Liste des quiz disponibles :</h1>
      {quizzes.length === 0 ? (
        <p>Aucun quiz trouvé.</p>
      ) : (
        <ul className="space-y-4">
          {quizzes.map((quiz) => (
            <li key={quiz._id} className="border rounded p-4 shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold">{quiz.title}</h2>
              <p className="text-gray-600">{quiz.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                ✍️ Créé par : <span className="title2">{quiz.createdBy}</span>
              </p>
              <p className="text-sm text-gray-500">
                📋 {quiz.questions.length} question(s)
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
