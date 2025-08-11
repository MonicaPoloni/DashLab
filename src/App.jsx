import React, { useState } from 'react';

// Se precisarmos mudar alguma cor ou fonte eh só mexer aqui!
const styles = `
  /* global.css - Nossas cores e fontes principais! */
  :root {
    --color-primary-dark: #0A192F; /* Fundo mais escuro */
    --color-primary-medium: #172A45; /* Fundo das caixas (o card) */
    --color-primary-light: #2C425A; /* Um azul mais claro pra usar por aí */
    --color-accent: #64FFDA; /* Nossa cor de destaque, tipo dos botões */
    --color-text: #F0F0F0; /* Cor principal dos textos */
    --color-text-secondary: #8892B0; /* Cor para textos secundários */
    --color-background-dark: #071321; /* Fundo total da página */
    --color-border: #3A4A66; /* Cor da borda dos campos de input */
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
  
  /* pages.css - Estilos para as páginas */
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
    .login-box {
      width: 100%;
      padding: 2rem;
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

// --- (O desenho do nosso logo) ---
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

// --- Componente da page de Login ---
const LoginPage = () => {
  // Se "showAboutUs" for 'true'  a janelinha aparece Se for 'false' ela esconde.
  const [showAboutUs, setShowAboutUs] = useState(false);

  // Aqui eh onde vai ter que conectar a lógica de login.
  // Por enquanto ele só "avisa" que os dados estão prontos.
  const handleLogin = (e) => {
    e.preventDefault();
    // AQUI!!! O codigo para chamar o backend entra aqui.
    console.log('Dados do formulário de login prontos para serem enviados.');
  };

  return (
    <div className="page-container login-container">
      <div className="box login-box">
        <Logo />
        <p className="subtitle">Acesse sua conta para continuar</p>
        <form className="form" onSubmit={handleLogin}>
          <input type="email" placeholder="E-mail" className="input" />
          <input type="password" placeholder="Senha" className="input" />
          <button type="submit" className="button">
            Entrar
          </button>
        </form>
        <div className="registration-links">
          <a href="#">
            {/* TODO: AQUI É O LINK para a página de cadastro de instituição. */}
            Cadastrar nova instituição
          </a>
          <div className="registration-links-group">
            <a href="#">
              {/* TODO: AQUI É O LINK para a página de cadastro de aluno. */}
              Cadastrar aluno
            </a>
            <a href="#">
              {/* TODO: AQUI É O LINK para a página de cadastro de professor. */}
              Cadastrar professor
            </a>
          </div>
        </div>
        {/* Quando a gente clica aqui, o "showAboutUs" vira 'true' e a janela aparece. */}
        <a className="about-us-link" onClick={() => setShowAboutUs(true)}>Sobre Nós</a>
      </div>

      {/* Essa é a janela que aparece quando o "showAboutUs" é verdadeiro. */}
      {showAboutUs && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Esse botton aqui só fecha a janelinha quando a gente clica nele. */}
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

// --- Componente Principal da Aplicação ---
function App() {
  // aqui só chama a page de login
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
