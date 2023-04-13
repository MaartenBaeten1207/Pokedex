import React from 'react'
import { nanoid } from 'nanoid'

import LightboxComponent from './LightboxComponent'
import Type from './Type'

function PokemonInfo(props) {
  //console.log(props.currentPokemon)

  const typeElements = props.currentPokemon.types.map(type => {
		return<Type 
			name={type.type.name}
			key={nanoid()}
		/> 
	})

  return (
    <div className='flex flex-nowrap grad2 '>

      <h1>{props.currentPokemon.forms[0].name}</h1>
      <img src={props.currentPokemon.sprites.front_default}></img>
      <LightboxComponent />
      

      <div className='section'>
        <h1>Info</h1>
        <div className='field flex flex-wrap'>
          <h2>Type {typeElements}</h2>
          <h2>Nr. {props.currentPokemon.id}</h2>
          <h2>Weight</h2>
          <h2>Height</h2>
          <h2>Category</h2>
          <h2>Gender</h2>
          <h2>Skills</h2>
        </div>
      </div>

      <div className='section'>
        <h1>Stats</h1>
        <div className='field'>

        </div>
      </div>

      <div className='section'>
        <h1>Moveset</h1>
        <div  className='field'>

        </div>
      </div>

      <div className='section'>
        <h1>Evolutions</h1>
        <div  className='field'>

        </div>
      </div>
      
    </div>
  )
}

export default PokemonInfo