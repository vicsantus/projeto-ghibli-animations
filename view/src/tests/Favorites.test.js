import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './helper/renderWith';
import mockCards from './mocks/cards.mock';

describe("Testes para a pagina Favorites", () => {
  jest.setTimeout(60000);

  afterEach(() => {
    jest.restoreAllMocks();
  });
  
  test('Testa se existem elementos favoritos na tela e se ao clicar sai um', async () => {
    jest.spyOn(window, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockCards),
    });
    
    renderWithRouter(<App />, { initialEntries: ['/'] });

    await waitFor(async () => {
      botao1 = await screen.getByTestId('button 1');
      botao2 = await screen.getByTestId('button 2');
      userEvent.click(botao1);
      userEvent.click(botao2);
    }, { timeout: 1000 });
    
    await waitFor(async () => {
      favLink = await screen.getByTestId('fav-testid');
      userEvent.click(favLink);
    }, {timeout: 1000})
    
    await waitFor(async () => {
      botaoClicado = await screen.getAllByText('Disfavor');
    }, { timeout: 1000 });
    
    expect(botaoClicado).toBeDefined();
    expect(botaoClicado.length).toEqual(2);

    await waitFor(async () => {
      userEvent.click(botaoClicado[0]);
      botaoClicado = await screen.getAllByText('Disfavor');
      screen.logTestingPlaygroundURL();
    }, { timeout: 1000 });
    
    expect(botaoClicado.length).toEqual(1);
  })
})