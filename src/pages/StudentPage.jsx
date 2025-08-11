import React, { useState } from 'react';

// Questoes para a pesquisa de avaliação do professor
const studentQuestions = [
  "1. O professor explica de maneira objetiva o conteúdo?",
  "2. As explicações do professor te ajudam a entender melhor o conteúdo?",
  "3. O professor consegue tirar suas dúvidas?",
  "4. As atividades passadas em aula correspondem ao que é ensinado?",
  "5. Como você avalia as aulas?",
  "6. As aulas contribuem para seu crescimento acadêmico?",
  "7. As aulas são dinâmicas e interessantes?",
  "8. Você se sente motivado para realizar as atividades propostas em aula?",
  "9. Você sente que consegue absorver o conteúdo abordado em aula?"
];

// pagina do aluno
const StudentPage = ({ setPage }) => {
  const [professorName, setProfessorName] = useState('');

  return (
    <div className="page-container center-container">
      <div className="box survey-box">
        <h2 className="title">Avaliação do Professor</h2>
        <p className="subtitle">Por favor, digite o nome completo do professor e responda às perguntas abaixo.</p>
        <div className="form">
          <input 
            type="text" 
            placeholder="Nome completo do professor" 
            className="input" 
            value={professorName}
            onChange={(e) => setProfessorName(e.target.value)}
          />
          <div className="questions-list">
            {studentQuestions.map((q, index) => (
              <div key={index} className="question-item">
                <p>{q}</p>
                <div className="radio-group">
                  <label><input type="radio" name={`q-${index}`} value="bom" /> Bom</label>
                  <label><input type="radio" name={`q-${index}`} value="mediano" /> Mediano</label>
                  <label><input type="radio" name={`q-${index}`} value="ruim" /> Ruim</label>
                </div>
              </div>
            ))}
          </div>
          <button className="button" onClick={() => setPage('login')}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
