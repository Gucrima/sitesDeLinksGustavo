import { useEffect, useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Enviar o POST para incrementar o contador
    fetch('http://localhost:5258/api/contador/incrementar', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => setContador(data)) // Atualiza o contador com o valor retornado
      .catch(error => {
        console.error('Erro ao incrementar o contador:', error);
      });

    // Agora, vamos pegar o contador atualizado após o POST
    fetch('http://localhost:5258/api/contador')
      .then(response => response.json())
      .then(data => setContador(data)) // Exibe o valor atual do contador
      .catch(error => {
        console.error('Erro ao buscar o contador:', error);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Contador de acessos:</h1>
      <p>{contador}</p>
    </div>
  );
}

export default Contador;
