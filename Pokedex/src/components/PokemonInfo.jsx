import React from 'react'
import { nanoid } from 'nanoid'
import Switch from "react-switch";

import LightboxComponent from './LightboxComponent'
import Type from './Type'
import RadarChart from './RadarChart'
import MoveCard from './MoveCard'
import CarouselComponent from './CarouselComponent';
import PokemonListCard from './PokemonListCard';

import teamIcon from '../assets/team.svg'
import checkedIcon from '../assets/checked.svg'

function PokemonInfo(props) {
  // const [speciesData,setSpeciesData]=React.useState('');           
  // const [evolutionChain,setEvolutionChain]=React.useState('');
  // const [evolutionPokemons,setEvolutionPokemons]=React.useState([]);

  React.useEffect(() => {
    setStatData(prevState =>{
      return{
        ...prevState,
        datasets: [
          {
            data: props.currentPokemon.stats.map((stat) => stat.base_stat),
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          },
        ],
      }
    })
  }, [props.currentPokemon]);

  // React.useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon-species/"+ props.currentPokemonId)
  //     .then((response) => response.json())
	// 		.then((data) => setSpeciesData(data.evolution_chain.url))
  // }, [props.currentPokemon]);

  // React.useEffect(() => {
  //   if(speciesData.length > 0){
  //     fetch(speciesData)
  //     .then((response) => response.json())
	// 		.then((data) => setEvolutionChain(data))
  //   }
  // }, [speciesData]);


  console.log(evolutionChain)
  
  const [statData, setStatData] = React.useState({
    labels: ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
    datasets: [
      {
        label: "Value",
        data: props.currentPokemon.stats.map((stat) => stat.base_stat),
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }
    ],
  });

  const options = {
    responsive:true,
    maintainAspectRatio: false,
    innerWidth:100,
    scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 100,
            pointLabels:{
              color:'#ACB2C1',
              font: {
                size: 15
              }
            },
        }
    },
    plugins:{
      legend:{
         display:false
      }
    },
  };

  const getWeight = ()=>{
    let weightInt = props.currentPokemon.weight;
    let weightStr = weightInt.toString();
    let len = weightStr.length;
    let weight =  weightStr.slice(-len,-1) +'.' + weightStr.slice(-1);
    return weight ;
  }

  const getHeight = ()=>{
    let heightInt = props.currentPokemon.height;
    let heightStr = heightInt.toString();
    let len = heightStr.length;
    if(heightInt<10){
      let height =  '0'+ heightStr.slice(-len,-1) +'.' + heightStr.slice(-1);
      return height ;
    }else{
      let height =  heightStr.slice(-len,-1) +'.' + heightStr.slice(-1);
      return height ;
    }
  }

  const typeElements = props.currentPokemon.types.map(type => {
		return<Type 
			name={type.type.name}
			key={nanoid()}
		/> 
	})

  const moveCardElements = props.currentPokemon.moves.map(move => {
		return<MoveCard 
			name={move.move.name}
      details={move.version_group_details}
			key={nanoid()}
		/> 
  })

  // const evolutionElements = evolutionPokemons.map(pokemon => {
	// 	return<PokemonListCard 
	// 		types={pokemon.types}
	// 		img={pokemon.sprites.front_default}
	// 		id={pokemon.id}
	// 		name={pokemon.name}
	// 		handleClick={handleClick}
	// 		key={nanoid()}
	// 	/> 
	// })

  return (
    <div className='flex flex-wrap ml-4'>
      <div className=' flex flex-col ml-4'>
        <h1 className=' pokeInfoTitle'>{props.currentPokemon.forms[0].name.charAt(0).toUpperCase() + props.currentPokemon.forms[0].name.slice(1)}</h1>
        <div className='flex flex-wrap justify-end  mb-4'>
          {props.favPokeIds.includes(props.currentPokemon.id) 
            ?
            <button className='flex justify-end' onClick={()=>props.handleToggleFavorite()}>
              <svg width="23" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5.881C12.981 4.729 14.484 4 16.05 4C18.822 4 21 6.178 21 8.95C21 12.3492 17.945 15.1195 13.3164 19.3167L13.305 19.327L12 20.515L10.695 19.336L10.6595 19.3037C6.04437 15.1098 3 12.3433 3 8.95C3 6.178 5.178 4 7.95 4C9.516 4 11.019 4.729 12 5.881Z" fill="#000000"/>
              </svg>
            </button>
            :
            <button className='flex justify-end' onClick={()=>props.handleToggleFavorite()}>
              <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1097 2.72438L12.1095 2.7246C11.9482 2.88865 11.795 3.06211 11.6489 3.24884C10.3353 1.57909 8.19637 0.731114 6.08129 1.11724C4.29146 1.44222 2.88271 2.42695 1.90303 4.03746C0.52336 6.3028 0.404701 8.50223 1.57213 10.5609C2.18881 11.6502 2.98909 12.7103 4.01508 13.8024L4.01514 13.8025C5.89369 15.7986 8.11415 17.6919 11.0047 19.7572L11.0048 19.7572C11.2044 19.8996 11.4219 19.975 11.6508 19.975C11.9993 19.975 12.2365 19.7988 12.3452 19.7181L12.3466 19.717C12.3469 19.7168 12.3471 19.7166 12.3474 19.7165C14.9545 17.854 17.0057 16.1364 18.7981 14.3083C19.7989 13.2881 20.9397 12.0301 21.7755 10.454C22.1323 9.78236 22.5477 8.86532 22.5229 7.81206V7.81201C22.4692 5.57639 21.5794 3.72752 19.8812 2.32408C18.8716 1.48795 17.5735 1.0289 16.2305 1.0289C14.6801 1.0289 13.1764 1.64627 12.1097 2.72438ZM20.2417 9.64081L20.2416 9.64087C19.5114 11.017 18.4775 12.1539 17.5583 13.0923C15.9218 14.7605 14.0527 16.34 11.6475 18.0814C9.02753 16.1825 6.99734 14.4368 5.28051 12.6102L5.2805 12.6102C4.34824 11.6187 3.62895 10.6693 3.08275 9.7027L3.08267 9.70255C2.65412 8.94707 2.46596 8.19438 2.51519 7.41472C2.5645 6.63387 2.8524 5.81861 3.38789 4.93991L3.38794 4.93982C4.10161 3.7661 5.11224 3.05645 6.39492 2.82411L6.39537 2.82402C6.63973 2.7786 6.88902 2.75663 7.13368 2.75663C8.6486 2.75663 9.99255 3.59279 10.7541 5.05297L10.7544 5.05349L10.8861 5.30248L10.8862 5.30266C11.0407 5.59335 11.3563 5.75319 11.6623 5.76208L11.6623 5.76219L11.6669 5.76211C11.9936 5.75666 12.2879 5.56958 12.4313 5.27555C12.7005 4.72603 12.9918 4.30337 13.3459 3.94456C14.0878 3.19483 15.1397 2.76463 16.2321 2.76463C17.1736 2.76463 18.0761 3.08318 18.7754 3.66212L18.7755 3.6622C20.0891 4.74684 20.7447 6.11525 20.7874 7.85241C20.8011 8.49111 20.5252 9.10731 20.2417 9.64081Z" fill="white" stroke="white" strokeWidth="0.2"/>
              </svg>
            </button>
          }
          {props.teamPokeIds.includes(props.currentPokemon.id) 
            ?
            <button className='flex justify-end ml-4' onClick={()=>props.handleToggleTeam()}>
              <img src={checkedIcon} width="23" height="21"></img>
            </button>
            :
            <button className='flex justify-end ml-4' onClick={()=>props.handleToggleTeam()}>
              <img src={teamIcon} width="23" height="21"></img>
            </button>
          }
        </div>
        {/* <LightboxComponent 
          frontDefault = {props.currentPokemon.sprites.other['official-artwork'].front_default}
          frontShiny = {props.currentPokemon.sprites.other['official-artwork'].front_shiny}
        /> */}
        <div className='select-none object-contain w-96'>
          <CarouselComponent
            frontDefault = {props.currentPokemon.sprites.other['official-artwork'].front_default}
            frontShiny = {props.currentPokemon.sprites.other['official-artwork'].front_shiny}
          />
        </div>

        <div className='section ml-4 mb-9 w-96'>
          <h1 className='mb-2'>INFO</h1>
          <div className='field pt-2'>
            <div className='grid grid-cols-3 gap-2 field'>
              <h2 className='ml-4 mt-2'>Type</h2>       
              <div className='mt-2 justify-start flex flex-wrap gap-2 col-span-2'>
                {typeElements}
              </div>

              <h2 className='ml-4 mt-2'>Nr.</h2>
              {props.currentPokemon.id < 10 &&
                <h3 className= 'mt-2 col-span-2'>00{props.currentPokemon.id}</h3>
              }
              {props.currentPokemon.id < 100 && props.currentPokemon.id > 9 &&
                <h3 className= 'mt-2 col-span-2'>0{props.currentPokemon.id}</h3>
              }

              <h2 className='ml-4 mt-2'>Weight</h2>
              <h3 className='mt-2 col-span-2'>{getWeight()} kg</h3>



              <h2 className='ml-4 mt-2'>Height</h2>
              <h3 className='mt-2 col-span-2'>{getHeight()}m</h3>

              <h2 className='ml-4 mt-2'>Category</h2>
              <h3 className='mt-2 col-span-2'>Category</h3>

              <h2 className='ml-4 mt-2'>Gender</h2>
              <h3 className='mt-2 col-span-2'>Gender</h3>

              <h2 className='ml-4 mt-2 mb-4'>Skills</h2>
              <h3 className='mt-2 mb-4 col-span-2'>Skills</h3>
            </div>
          </div>
        </div>
      </div>
      

      <div className=' flex flex-col justify-center ml-8 w-96'>
        <div className='section mb-10 '>
          <h1  className='mb-2'>STATS</h1>
          <div className='field p-4 flex justify-center max-h-80 h-60 '>
              <RadarChart 
                data={statData}
                options={options}
              />
          </div>
        </div>

        <div className='section mb-4'>
          <h1 className='mb-2'>MOVESET</h1>
          <div className='field p-2 '>
            <div className='scroll max-h-80 grid grid-cols-2 '>
					    {moveCardElements}
				    </div>
          </div>
        </div>

        {/* <div className='section'>
          <h1>Evolutions</h1>
          <div className='field'>
              {evolutionElements}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default PokemonInfo