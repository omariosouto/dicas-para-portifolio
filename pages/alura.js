import React, { useState, useEffect } from 'react';

// https://www.alura.com.br/formacao-front-end
function AluraPage() {
  const [formacao, setFormacao] = useState({});

  useEffect(() => {
    fetch('https://www.alura.com.br/api/formacao-front-end')
      .then(async (response) => {
        if(response.ok) {
          const repositoriesFromServer = await response.json();
          setFormacao({
            ...repositoriesFromServer
          })
        }
      });
  }, []);

  console.log(formacao)

  return (
    <div>

      <main>
        <h1>{formacao.title}</h1>
        <h2>{formacao.subtitle}</h2>

        <ul>
          {
            formacao.steps && formacao.steps.map((step) => (
              <li key={step.id}>
                {step.title}
              </li>
            ))
          }
        </ul>
      </main>
    </div>
  );
}

export default AluraPage;