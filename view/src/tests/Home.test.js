import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import renderWithRouter from './helper/renderWith';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import mockCards from './mocks/cards.mock';

describe("Testes para a pagina Home", () => {
  jest.setTimeout(60000);

  afterEach(() => {
    jest.restoreAllMocks();
  });
  
  test('Testa se existe o botão de favoritar na tela', async () => {
    jest.spyOn(window, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockCards),
    });
    
    renderWithRouter(<App />, { initialEntries: ['/'] });

    await waitFor(async () => {
      botao = await screen.getByTestId('button 1');
    }, { timeout: 1000 });
  
    expect(botao).toBeDefined();
  })

  // test('Testa se existe o botão de favoritar na tela', async () => {
  //   jest.spyOn(window, 'fetch');
  //   global.fetch.mockResolvedValue({
  //     json: jest.fn().mockResolvedValue(mockCards),
  //   });
    
  //   renderWithRouter(<App />, { initialEntries: ['/'] });

  //   await waitFor(async () => {
  //     botao = await screen.getByTestId('button 1');
  //   }, { timeout: 1000 });
  
  //   expect(botao).toBeDefined();
  // })
})