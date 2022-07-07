import './App.css';
import MyComponent from './components/MyComponent';

import {useState} from 'react'

function App() {
  const n = 15
  const [name] = useState("Talliny")
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de Componente */}
      <MyComponent />
      <p>Este é o parágrafo do App.js</p>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        Este elemento foi estilizado de forma inline!
      </p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 
        style={
          name === "Talliny" 
          ? { color: "green", backgroundColor: "#000" } 
          : null
        }
      >
        CSS dinâmico
      </h2>
    </div>
  );
}

export default App;
