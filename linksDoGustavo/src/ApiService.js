import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Buscar o contador atual ao carregar a página
    axios.get("http://localhost:5000/api/contador")
      .then(response => setContador(response.data.ContadorAtual))
      .catch(error => console.error("Erro ao buscar contador:", error));
  }, []);

  const incrementarContador = () => {
    // Incrementar o contador
    axios.post("http://localhost:5000/api/contador")
      .then(response => setContador(response.data.ContadorAtual))
      .catch(error => console.error("Erro ao incrementar contador:", error));
  };

  return (
    <div>
      <h1>Contador de Acessos</h1>
      <p>Contador Atual: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

export default App;