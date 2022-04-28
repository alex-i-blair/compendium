import { useState, useEffect } from 'react';
import PokemonList from '../../components/PokemonList';
import { getPokemon } from '../../services/fetch-utils';
import styles from '../../App.css';

export default function Compendium() {
  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const isSearching = !!search.length;
  const pokemonList = isSearching ? results : pokemons;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredPokemon = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(e.target.value.toLowerCase().trim())
    );
    setResults(filteredPokemon);
  };

  useEffect(() => {
    async function fetchIt() {
      const pokemonData = await getPokemon();

      setPokemons(pokemonData);
      setLoading(false);
    }
    fetchIt();
  }, []);
  return (
    <>
      <h2>Pokemon</h2>
      <div className={styles.searchBar}>
        <input
          placeholder="Search Pokemon"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="list-container">
          {!pokemonList[0] ? (
            <p>No Results</p>
          ) : (
            <PokemonList pokemons={pokemonList} />
          )}
        </div>
      )}
    </>
  );
}
