import React, { useState } from 'react';
import axios from 'axios';

function CreateQuizPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [questions, setQuestions] = useState([
    { questionText: '', options: ['', '', '', ''], correctAnswer: '' }
  ]);

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    if (field === 'options') {
      newQuestions[index].options = value;
    } else {
      newQuestions[index][field] = value;
    }
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedQuestions = questions.map(q => ({
      questionText: q.questionText,
      options: q.options,
      correctAnswer: q.correctAnswer
    }));

    try {
      await axios.post('http://localhost:5000/api/quizzes', {
        title,
        description,
        createdBy,
        questions: formattedQuestions
      });
      alert('Quiz créé avec succès !');
      setTitle('');
      setDescription('');
      setCreatedBy('');
      setQuestions([{ questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la création du quiz");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Créer un nouveau quizz</h1>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Titre :</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description :</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Créé par :</label>
          <input
            type="text"
            className="form-control"
            value={createdBy}
            onChange={(e) => setCreatedBy(e.target.value)}
            required
          />
        </div>

        <h3 className="mt-4">Questions :</h3>
        {questions.map((q, index) => (
          <div key={index} className="border rounded p-3 mb-4">
            <div className="mb-3">
              <label className="form-label">Question :</label>
              <input
                type="text"
                className="form-control"
                value={q.questionText}
                onChange={(e) => handleQuestionChange(index, 'questionText', e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Options :</label>
              <div className="row g-2">
                {q.options.map((opt, i) => (
                  <div key={i} className="col-6 col-md-3">
                    <input
                      type="text"
                      className="form-control"
                      value={opt}
                      onChange={(e) => handleOptionChange(index, i, e.target.value)}
                      placeholder={`Option ${i + 1}`}
                      required
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Bonne réponse :</label>
              <input
                type="text"
                className="form-control"
                value={q.correctAnswer}
                onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
                required
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary mb-3"
          onClick={addQuestion}
        >
          Ajouter une question
        </button>

        <br />

        <button type="submit" className="btn btn-primary">
          Créer le quizz
        </button>
      </form>
    </div>
  );
}

export default CreateQuizPage;
