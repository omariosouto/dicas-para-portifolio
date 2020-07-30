import React, { useState, useEffect } from 'react';

// https://github.com/omariosouto/
function GitHubPage() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/omariosouto/repos')
      .then(async (response) => {
        if(response.ok) {
          const repositoriesFromServer = await response.json();
          setRepositories([
            ...repositoriesFromServer
          ])
        }
      });
  }, []);

  console.log(repositories)

  return (
    <div>
      <main>
        <h1>GitHub API</h1>

        <ul>
          {repositories.map((repository) => (
            <li key={repository.id}>
              {repository.name}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default GitHubPage;