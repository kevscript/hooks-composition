import React from 'react'
import { useFetch } from '../hooks/use-fetch'

const PokeData = () => {
  const { loading, error, data } = useFetch('https://pokeapi.co/api/v2/pokemon/ditto')

  if (loading) return <h3>Pokemon data loading...</h3>
  if (error) return <h3>An error occured: {error.message}</h3>

  return (
    <div>
      <h3>Pokemon Data</h3>
      <p>name: {data.name}</p>
      <img src={data.sprites.front_default} alt="pokemon avatar"/>
    </div>
  )
}

export default PokeData