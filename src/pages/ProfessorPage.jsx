import React from 'react';

// Dados so para simular o backend
const surveyResults = {
  "O professor explica de maneira objetiva o conteúdo?": { bom: 15, mediano: 5, ruim: 2 },
  "As explicações do professor te ajudam a entender melhor o conteúdo?": { bom: 18, mediano: 3, ruim: 1 },
};

// Componente da página do professor
const ProfessorPage = ({ setPage }) => {
  return (
    <div className="page-container center-container">
      <div className="box survey-box">
        <h2 className="title">Página do Professor</h2>
        <p className="subtitle">Resultados das avaliações dos alunos.</p>
        <div className="results-list">
          {Object.entries(surveyResults).map(([question, results], index) => (
            <div key={index} className="result-item">
              <p className="result-question">{question}</p>
              <ul className="results-details">
                <li>Bom: {results.bom} alunos</li>
                <li>Mediano: {results.mediano} alunos</li>
                <li>Ruim: {results.ruim} alunos</li>
              </ul>
            </div>
          ))}
        </div>
        <button className="button" onClick={() => setPage('login')}>
          Sair
        </button>
      </div>
    </div>
  );
};

export default ProfessorPage;
