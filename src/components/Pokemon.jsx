import React from 'react';
import styles from '../App.css';
import { toTitle } from '../utils/utils';
const Pokemon = ({ poke }) => {
  return (
    <div
      data-testid="pokemon-card"
      className={styles.pokemonCard}
      alt="pokemon"
    >
      <img src={poke.img} alt="pokemon-image" />
      <p aria-label="pokemon-name">{toTitle(poke.name)}</p>
      <p alt="pokemon-type">{toTitle(poke.type)} type</p>
    </div>
  );
};

export default Pokemon;
