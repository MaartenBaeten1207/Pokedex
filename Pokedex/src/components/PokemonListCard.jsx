import React from 'react'
import { nanoid } from 'nanoid'

import Type from './Type'
import arrowIcon from '../assets/arrow.png'
export default function PokemonListCard(props) {
  const typeElements = props.types.map(type => {
		return<Type 
			name={type.type.name}
			key={nanoid()}
		/> 
	})

  return (
    <div 
      className='flex flex-auto pokemonListCard mt-5 mx-5 select-none' 
      onClick={()=>props.handleClick(props.id)}
    >
      <div className='shrink-0'>
        <img  src={props.img} alt=''></img>
      </div>
      <div className='mt-6' >
        <h1 className='pokemonListName  '>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h1>
        {props.id < 10 &&
          <h2 className= 'pokemonListNr'>Nr. 00{props.id}</h2>
        }
        { props.id < 100 && props.id > 9 &&
          <h2 className= 'pokemonListNr'>Nr. 0{props.id}</h2>
        }
        { props.id > 99 && 
          <h2 className= 'pokemonListNr'>Nr. {props.id}</h2>
        }
      </div>

      <div className='grow justify-end flex flex-wrap gap-2 mt-6'>
        {typeElements}
      </div>

      <div className='flex mt-6 ml-2'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.5 16.9998C10.244 16.9998 9.98801 16.9018 9.79301 16.7068C9.40201 16.3158 9.40201 15.6838 9.79301 15.2928L13.098 11.9878L9.91801 8.69476C9.53501 8.29676 9.54601 7.66376 9.94301 7.28076C10.341 6.89776 10.974 6.90876 11.357 7.30476L15.219 11.3048C15.598 11.6978 15.593 12.3208 15.207 12.7068L11.207 16.7068C11.012 16.9018 10.756 16.9998 10.5 16.9998" fill="#231F20"/>
          <mask id="mask0_125_994"  maskUnits="userSpaceOnUse" x="9" y="7" width="7" height="10">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5 16.9998C10.244 16.9998 9.98801 16.9018 9.79301 16.7068C9.40201 16.3158 9.40201 15.6838 9.79301 15.2928L13.098 11.9878L9.91801 8.69476C9.53501 8.29676 9.54601 7.66376 9.94301 7.28076C10.341 6.89776 10.974 6.90876 11.357 7.30476L15.219 11.3048C15.598 11.6978 15.593 12.3208 15.207 12.7068L11.207 16.7068C11.012 16.9018 10.756 16.9998 10.5 16.9998" fill="white"/>
          </mask>
          <g mask="url(#mask0_125_994)">
            <rect width="24" height="24" fill="#BABEC2"/>
          </g>
        </svg>        
      </div>
    </div>
  )
}

