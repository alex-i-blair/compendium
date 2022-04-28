import Pokemon from './Pokemon';
import styles from '../App.css';

export default function PokemonList({ pokemons }) {
  return (
    <div className={styles.pokemons}>
      {pokemons.map((poke, i) => (
        <Pokemon key={poke.name + i} poke={poke} />
      ))}
    </div>
  );
}
