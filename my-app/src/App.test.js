import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { render, screen, waitFor, fireEvent, within} from '@testing-library/react';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import booksData from './books/fantasy.json';
import CommentArea from './components/CommentArea';
import App from './App';


test('il componente Welcome viene montato correttamente', () => {
  render(<Welcome />);

  
  const heading = screen.getByText(/Welcome to My React App!/i);
  expect(heading).toBeInTheDocument();

});

test('rende una card per ogni libro nel JSON', () => {
  const { container } = render(
    <BrowserRouter>
      <AllTheBooks books={booksData} searchQuery="" onBookSelect={() => {}} />
    </BrowserRouter>
  );

  const cards = container.querySelectorAll('.card');
  expect(cards.length).toBe(booksData.length);
});


test('il componente CommentArea viene renderizzato correttamente con i commenti', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        { _id: '1', comment: 'Great book!', rate: 5 },
        { _id: '2', comment: 'Not bad.', rate: 3 }
      ]),
    })
  );

  render(
    <BrowserRouter>
      <CommentArea bookId="12345" />
    </BrowserRouter>
  );

  await waitFor(() => screen.getByText('Great book!'));
  
  
  expect(screen.getByText('Great book!')).toBeInTheDocument();
  expect(screen.getByText('Not bad.')).toBeInTheDocument();
  
  
  expect(screen.getByText(/5\/5/)).toBeInTheDocument();
  expect(screen.getByText(/3\/5/)).toBeInTheDocument();
});


test('mostra "No comments yet." se non ci sono commenti', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );

  render(
    <BrowserRouter>
      <CommentArea bookId="12345" />
    </BrowserRouter>
  );

  await waitFor(() => screen.getByText('No comments yet.'));
  expect(screen.getByText('No comments yet.')).toBeInTheDocument();
});


test('filtra i libri in base alla ricerca nella navbar', () => {
  const { container } = render(<App />);

  
  const searchInput = screen.getByPlaceholderText('Search books...');
  fireEvent.change(searchInput, { target: { value: 'witcher' } });

  
  const filteredCards = container.querySelectorAll('.card');

  
  expect(filteredCards.length).toBeGreaterThan(0);

  
  filteredCards.forEach((card) => {
    expect(card.textContent.toLowerCase()).toContain('witcher');
  });
});


test('cliccando su un secondo libro, il primo perde il bordo rosso', () => {
  const { container } = render(<App />);

  const cards = container.querySelectorAll('.card');
  expect(cards.length).toBeGreaterThan(1); // Servono almeno 2 libri

  const firstCard = cards[0];
  const secondCard = cards[1];

  // Click sul primo libro
  fireEvent.click(firstCard);
  expect(firstCard).toHaveStyle('border: 2px solid red');
  expect(secondCard).not.toHaveStyle('border: 2px solid red');

  // Click sul secondo libro
  fireEvent.click(secondCard);

  // Ora solo il secondo deve avere il bordo rosso
  expect(secondCard).toHaveStyle('border: 2px solid red');
  expect(firstCard).not.toHaveStyle('border: 2px solid red');
});


test('nessuna istanza di SingleComment è presente all\'inizio', () => {
  render(<App />);

  // Cerca elementi che contengano "Comment:" (testo del componente SingleComment)
  const commentElements = screen.queryAllByText(/Comment:/i);
  expect(commentElements.length).toBe(0);
});

test("verifica che cliccando sul tasto dettagli, le recensioni vengano caricate correttamente", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        { _id: '1', comment: 'Great book!', rate: 5 },
        { _id: '2', comment: 'Not bad.', rate: 3 }
      ]), 
    })
  );

  render(<App />);

  // Trova la card del libro specifico "The Last Wish: Introducing the Witcher"
  const bookCard = screen.getByText(/The Last Wish: Introducing the Witcher/i).closest('.card');

  // Seleziona il pulsante Dettagli all'interno della card
  const detailsButton = within(bookCard).getByText(/Dettagli/i);
  fireEvent.click(detailsButton);

  // Aspetta che i commenti vengano caricati
  await waitFor(() => screen.getByText('Great book!'));

  // Verifica che i commenti siano visibili
  expect(screen.getByText('Great book!')).toBeInTheDocument();
});





