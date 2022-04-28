export async function getPokemon() {
  const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const { results } = await res.json();

  const data = results.map((pokemon) => ({
    img: pokemon.url_image,
    name: pokemon.pokemon,
    type: pokemon.type_1,
  }));
  return data;
}
