import React from 'react'
import { nanoid } from 'nanoid'

import Type from './Type'

export default function PokemonListCard(props) {


  const typeElements = props.types.map(type => {
		return<Type 
			name={type.type.name}
			key={nanoid()}
		/> 
	})

  return (
    <div 
      className='flex pokemonListCard mt-5 mx-5 select-none' 
      onClick={()=>props.handleClick(props.id)}
    >
      <img className='' src={props.img} alt=''></img>
      <h1 className='pokemonListName mt-6 '>{props.name}</h1>
      <h2 className= 'pokemonListNr '>Nr. {props.id}</h2>
      {typeElements}
    </div>
  )
}

