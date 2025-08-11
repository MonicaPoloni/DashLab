import React, { useState } from 'react';
import StudentPage from './pages/StudentPage';
import ProfessorPage from './pages/ProfessorPage';

const styles = `
  /* global.css */
  :root {
    --color-primary-dark: #0A192F;
    --color-primary-medium: #172A45;
    --color-primary-light: #2C425A;
    --color-accent: #64FFDA;
    --color-text: #F0F0F0;
    --color-text-secondary: #8892B0;
    --color-background-dark: #071321;
    --color-border: #3A4A66;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: var(--color-background-dark);
    color: var(--color-text);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  /* pages.css */
  .page-container {
    display: flex;
    min-height: 100vh;
    padding: 2rem;
  }
  
  .center-container {
    justify-content: center;
    align-items: center;
  }
  
  .login-container {
    justify-content: center;
    align-items: center;
  }
  
  .box {
    background-color: var(--color-primary-medium);
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .login-box {
    width: 450px;
    position: relative;
    padding-bottom: 2rem;
  }

  .register-box, .survey-box {
    width: 500px;
  }
  
  .title {
    font-size: 2rem;
    color: var(--color-accent);
    margin-top: 2rem;
    font-weight: bold;
  }
  
  .subtitle {
    color: var(--color-text-secondary);
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .input {
    background-color: var(--color-primary-dark);
    border: 1px solid var(--color-border);
    color: var(--color-text);
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  
  .input:focus {
    outline: none;
    border-color: var(--color-accent);
  }
  
  .button {
    background-color: var(--color-accent);
    color: var(--color-primary-dark);
    padding: 1rem;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    margin-top: 1rem;
  }
  
  .button:hover {
    background-color: #52e3c0;
    transform: scale(1.02);
  }
  
  .link-text {
    color: var(--color-text-secondary);
    margin-top: 1.5rem;
    font-size: 0.9rem;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .link-text:hover {
    color: var(--color-accent);
  }

  .about-us-link {
    cursor: pointer;
    color: var(--color-text-secondary);
    text-decoration: underline;
    font-size: 0.9rem;
  }

  .registration-links {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  .registration-links-group {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .registration-links a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    text-align: center;
  }

  .registration-links a:hover {
    color: var(--color-accent);
    text-decoration: underline;
  }
  
  .button-group {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: 100%;
    justify-content: center;
  }
  
  .button-group .button {
    flex: 1;
  }
  
  .survey-box .input {
    margin-bottom: 2rem;
  }
  
  .questions-list {
    width: 100%;
    text-align: left;
  }
  
  .question-item {
    margin-bottom: 1.5rem;
  }
  
  .question-item p {
    margin-bottom: 0.5rem;
  }
  
  .radio-group {
    display: flex;
    gap: 1.5rem;
  }
  
  .radio-group label {
    cursor: pointer;
    color: var(--color-text-secondary);
    transition: color 0.2s ease;
  }
  
  .radio-group label:hover {
    color: var(--color-accent);
  }
  
  .radio-group input {
    margin-right: 0.5rem;
  }
  
  .results-list {
    width: 100%;
    text-align: left;
  }
  
  .result-item {
    background-color: var(--color-primary-dark);
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    border: 1px solid var(--color-border);
  }
  
  .result-question {
    color: var(--color-text);
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .results-details {
    list-style-type: none;
    padding-left: 0;
    color: var(--color-text-secondary);
  }
  
  .results-details li {
    margin-bottom: 0.2rem;
  }

  /* Estilos do Modal Aprimorados */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background-color: var(--color-primary-medium);
    padding: 2.5rem;
    border-radius: 16px;
    width: 90%;
    max-width: 600px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    position: relative;
    text-align: left;
    transform: scale(1);
    animation: fadeIn 0.3s ease-out;
  }

  .modal-close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: var(--color-text-secondary);
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .modal-close-button:hover {
    color: var(--color-accent);
  }

  .modal-header {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .modal-header h3 {
    color: var(--color-accent);
    font-size: 2rem;
    font-weight: bold;
  }

  .modal-body p {
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  /* Animação para o modal */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Media Queries para responsividade */
  @media (max-width: 1024px) {
    .login-container {
      flex-direction: column;
      padding: 1rem;
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    .login-box, .about-us-box, .register-box, .survey-box {
      width: 100%;
      padding: 2rem;
    }
    .button-group {
      flex-direction: column;
    }
    .modal-content {
      padding: 1.5rem;
    }
    .modal-header h3 {
      font-size: 1.5rem;
    }
    .modal-close-button {
      font-size: 1.5rem;
      top: 0.5rem;
      right: 0.5rem;
    }
  }
`;


const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

const Logo = () => {
  return (
    <svg 
      width="200" 
      height="60" 
      viewBox="0 0 200 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {`
          .dash-text {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: bold;
            font-size: 36px;
            fill: #64FFDA;
          }
          .lab-text {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: 300;
            font-size: 36px;
            fill: #F0F0F0;
          }
        `}
      </style>
      <text x="0" y="40" className="dash-text">Dash</text>
      <text x="85" y="40" className="lab-text">Lab</text>
    </svg>
  );
};

// --- Páginas do Aplicativo ---

const LoginPage = ({ setPage }) => {

  const [showAboutUs, setShowAboutUs] = useState(false);

  return (
    <div className="page-container login-container">
      <div className="box login-box">
        <Logo />
        <p className="subtitle">Acesse sua conta para continuar</p>
        <div className="form">
          <input type="email" placeholder="E-mail" className="input" />
          <input type="password" placeholder="Senha" className="input" />
          <div className="button-group">
            <button className="button" onClick={() => setPage('studentPage')}>
              Entrar como Aluno
            </button>
            <button className="button" onClick={() => setPage('professorPage')}>
              Entrar como Professor
            </button>
          </div>
        </div>
        <div className="registration-links">
          <a href="#" onClick={() => setPage('registerInstitution')}>Cadastrar nova instituição</a>
          <div className="registration-links-group">
            <a href="#" onClick={() => setPage('registerStudent')}>Cadastrar aluno</a>
            <a href="#" onClick={() => setPage('registerProfessor')}>Cadastrar professor</a>
          </div>
        </div>
        <a className="about-us-link" onClick={() => setShowAboutUs(true)}>Sobre Nós</a>
      </div>

      {}
      {showAboutUs && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-button" onClick={() => setShowAboutUs(false)}>&times;</button>
            <div className="modal-header">
              <h3>Sobre Nós</h3>
            </div>
            <div className="modal-body">
              <p>Este projeto foi desenvolvido por estudantes do curso de <strong>Análise e Desenvolvimento de Sistemas</strong> com o objetivo de aplicar conhecimentos práticos na disciplina de <strong>Tecnologia Aplicada à Inclusão Digital</strong>. Nossa iniciativa visa criar uma plataforma que promova a acessibilidade e facilite a interação, contribuindo para a construção de um ambiente digital mais inclusivo e equitativo para todos.</p>
              <p>É um trabalho dedicado a explorar soluções tecnológicas que possam impactar positivamente a sociedade, focando na usabilidade e na experiência do usuário.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


const RegisterInstitutionPage = ({ setPage }) => (
  <div className="page-container center-container">
    <div className="box register-box">
      <Logo />
      <h2 className="title">Cadastrar Instituição</h2>
      <p className="subtitle">Preencha os dados para cadastrar uma nova instituição.</p>
      <form className="form">
        <input type="text" placeholder="Nome da Instituição" className="input" />
        <input type="text" placeholder="CNPJ" className="input" />
        <input type="text" placeholder="Endereço Completo" className="input" />
        <input type="text" placeholder="Telefone" className="input" />
        <input type="email" placeholder="E-mail de Contato" className="input" />
        <button type="submit" className="button">Cadastrar</button>
      </form>
      <a href="#" className="link-text" onClick={() => setPage('login')}>Voltar para o Login</a>
    </div>
  </div>
);

const InstitutionPage = ({ setPage }) => (
  <div className="page-container center-container">
    <div className="box register-box">
      <Logo />
      <h2 className="title">Página da Instituição</h2>
      <p className="subtitle">Escolha uma opção para continuar o cadastro.</p>
    </div>
  </div>
);

// Página para o cadastro de Alunos.
const RegisterStudentPage = ({ setPage }) => (
  <div className="page-container center-container">
    <div className="box register-box">
      <Logo />
      <h2 className="title">Cadastrar Aluno</h2>
      <p className="subtitle">Preencha os dados do novo aluno.</p>
      <form className="form">
        <input type="email" placeholder="E-mail" className="input" />
        <input type="password" placeholder="Senha" className="input" />
        <input type="text" placeholder="CPF" className="input" />
        <input type="text" placeholder="Instituição" className="input" />
        <input type="text" placeholder="Telefone" className="input" />
        <input type="text" placeholder="Estado" className="input" />
        <input type="text" placeholder="Cidade" className="input" />
        <button type="submit" className="button">Cadastrar</button>
      </form>
      <a href="#" className="link-text" onClick={() => setPage('login')}>Voltar para o Login</a>
    </div>
  </div>
);

// Página para o cadastro de Professores.
const RegisterProfessorPage = ({ setPage }) => (
  <div className="page-container center-container">
    <div className="box register-box">
      <Logo />
      <h2 className="title">Cadastrar Professor</h2>
      <p className="subtitle">Preencha os dados do novo professor.</p>
      <form className="form">
        <input type="email" placeholder="E-mail" className="input" />
        <input type="password" placeholder="Senha" className="input" />
        <input type="text" placeholder="CPF" className="input" />
        <input type="text" placeholder="Instituição" className="input" />
        <input type="text" placeholder="Telefone" className="input" />
        <input type="text" placeholder="Estado" className="input" />
        <input type="text" placeholder="Cidade" className="input" />
        <button type="submit" className="button">Cadastrar</button>
      </form>
      <a href="#" className="link-text" onClick={() => setPage('login')}>Voltar para o Login</a>
    </div>
  </div>
);

function AppTeste() {

  const [page, setPage] = useState('login');

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <LoginPage setPage={setPage} />;
      case 'registerInstitution':
        return <RegisterInstitutionPage setPage={setPage} />;
      case 'institutionPage':
        return <InstitutionPage setPage={setPage} />;
      case 'registerStudent':
        return <RegisterStudentPage setPage={setPage} />;
      case 'registerProfessor':
        return <RegisterProfessorPage setPage={setPage} />;
      case 'studentPage':
        return <StudentPage setPage={setPage} />;
      case 'professorPage':
        return <ProfessorPage setPage={setPage} />;
      default:
        return <LoginPage setPage={setPage} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default AppTeste;
