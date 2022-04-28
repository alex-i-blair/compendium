import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
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
    await waitForElementToBeRemoved(screen.getByText(/loading.../i));
    const search = screen.getByPlaceholderText('Search Pokemon');

    userEvent.type(search, 'jigglypuff');

    await screen.findByText(/jigglypuff/i);
  });
});
