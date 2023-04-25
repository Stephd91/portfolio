import logo from './logo.svg';
import rocket from './img/rocket.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rocket} className="App-logo" alt="logo" />
        <p>
          Mon portfolio
        </p>
        <a
          className="App-link"
          href="https://github.com/Stephd91/Prediction_flux_BackOffice"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projet n°1 : Prediction temporelle avec Prophet (sur Streamlit)
        </a>
        <br></br>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Projet n°2 : 
        </a>
      </header>
    </div>
  );
}

export default App;
