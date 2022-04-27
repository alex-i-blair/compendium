import { useState, useEffect } from 'react';

export default function Compendium() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const PER_PAGE = 20;
  return (
    <>
      <h1>Hello, world!</h1>
      <section className="header-container">
        <h2>Current Page</h2>
        <div className="page-buttons">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </button>
          <button
            onClick={() => setPage(page + 1)}
            // disabled={pokemons.length < PER_PAGE}
          >
            Next
          </button>
        </div>
      </section>
      <div className="list-container">
        {/* <PokemonList pokemons={pokemons} />  */}
      </div>
    </>
  );
}
