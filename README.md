# Projeto Ghibli Animations

#### Nesse projeto usei de meus conhecimentos para construção de uma aplicação web e construção de API para exibir os filmes do famoso estúdio de animação Ghibli. A pessoa usuária poderá favoritar os filmes que desejar, que poderão ser acessados em uma outra página.

## Tecnologias:

<ul>
  <li>Node</li>
  <li>TypeScript</li>
  <li>Express</li>
  <li>Sequelize</li>
  <li>MySQL</li>
  <li>Docker</li>
  <li>JavaScript</li>
  <li>React</li>
  <li>React Testing Library</li>
  <li>Mocha, Chai, Chai-http, Sinon</li>
</ul>

## Como executar: 

- `git clone git@github.com:vicsantus/projeto-ghibli-animations.git`
- `cd projeto-ghibli-animations`
- `docker compose up -d`
- `cd view && npm i (Caso o docker não monte o container do frontend)`
- `npm run test` para testes no backend `cd view && npm run test` para testes no frontend

## Funcionalidades: 

- Possível adicionar filmes a lista de favoritos.
- Possível observar breve descrição e titulo do filme ao passar o cursor em cima do card.
- Após subir os containers docker basta ir no navegador, colar `http://localhost:3000/` e dar enter