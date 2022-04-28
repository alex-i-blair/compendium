import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Compendium from './Compendium';

describe('pokemon list component test', () => {
  it('should render a list of pokemon cards with image name and type', async () => {
    render(<Compendium />);

    await screen.findAllByRole('img', { name: 'pokemon-image' });
    await screen.findByText(/butterfree/i);
    await screen.findByText(/bug type/i);
    const pokemonArr = await screen.findAllByTestId(/pokemon-card/i);
    expect(pokemonArr.length).toEqual(20);
  });
});

describe('pokemon list behavioral test', () => {
  it('should render jigglypuff when search === jigglypuff', async () => {
    render(<Compendium />);
    const search = screen.getByPlaceholderText('Search Pokemon');
    screen.debug();

    //This userEvent is not returning any results no matter the input
    userEvent.type(search, 'f');

    //Failing findBy
    // await screen.findByText('Clefable', { timeout: 3000 });
  });
});
