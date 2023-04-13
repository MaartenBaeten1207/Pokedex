import React from 'react'
import { nanoid } from 'nanoid'
import FsLightbox from "fslightbox-react";

import '../App.css'

import PokemonListCard from '../components/PokemonListCard'
import PokemonInfo from '../components/PokemonInfo'

export default function Home() {
	const [pokeList,setPokeList] = React.useState([{}])

	const [currentPokemonID,setCurrentPokemonID] = React.useState('1')
	const [currentPokemon,setCurrentPokemon] = React.useState({})

	const [filteredData, setFilteredData] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");

  React.useEffect(() => {
    fetch("https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon")
      .then((response) => response.json())
			.then((data) => setPokeList(data));
  }, []);

	React.useEffect(() => {
    fetch("https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon")
      .then((response) => response.json())
			.then((data) => setFilteredData(data));
  }, []);

	React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/"+ currentPokemonID)
      .then((response) => response.json())
			.then((data) => setCurrentPokemon(data))
  }, [currentPokemonID]);

  const handleChange = (event) => {
    const searchWord = event.target.value;
    setSearchInput(searchWord);
    const newFilter = pokeList.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData(pokeList);
    } else {
      setFilteredData(newFilter);
    }
  };

	function handleClick(id){
		setCurrentPokemonID(id)
	}

	// console.log('current',currentPokemon)
	// console.log('results',filteredData)
	// sprites":{"front_defaul
	// console.log('li',Object.keys(pokeList).length)
	const pokeCardElements = Object.keys(filteredData).length > 0 && filteredData.map(pokemon => {
		return<PokemonListCard 
			types={pokemon.types}
			img={pokemon.sprites.front_default}
			id={pokemon.id}
			name={pokemon.name}
			handleClick={handleClick}
			key={nanoid()}
		/> 
	})
	

	// console.log('pokelist', pokeList)
	// console.log('pokelist results', pokeListResults)
  return (
    <div className="flex flex-nowrap">
			<div className='defBackground flex-initial px-4'>
				<h1 className='ml-4 mt-10 text-[#1F2029] font-sans font-bold text-4xl select-none'>Pokedex</h1>
				<form className='mt-6'>   
					<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
							</div>
							<input 
								name='name'
								onChange={handleChange}
   							value={searchInput}
								type="search" 
								id="default-search" 
								className="block w-full p-4 pl-10 text-sm text-gray-900  rounded-full bg-[#EFF0F1] focus:ring-[#65CB9A] focus:border-[#15D0DC] dark:bg-[#EFF0F1] dark:border-[#15D0DC] dark:placeholder-gray-400 dark:text-black dark:focus:ring-[#15D0DC] dark:focus:border-[#65CB9A]" 
								placeholder="Search Pokemon" required 
							/>
					</div>
				</form>

				<div className="flex flex-wrap mt-4 gap-4 select-none">
					<div className='flex card grad1 br10 pl-5 select-none'>
						<h2 className='mt-10 mr-5'>My Team</h2>
						<h3 className='absolute mt-14'>12 pokemons</h3>

						<svg  width="75" height="89" viewBox="0 0 75 89" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M43.9932 56.8C37.9716 56.8 32.9378 52.6159 31.6089 47H0C1.51596 69.9839 20.6261 88.16 43.9932 88.16C67.3603 88.16 86.4703 69.9839 87.9864 47H56.3814C55.0491 52.6159 50.0152 56.8 43.9932 56.8Z" fill="white" fillOpacity="0.2"/>
							<path d="M43.9932 31.36C50.0148 31.36 55.0486 35.5441 56.3814 41.16H87.9903C86.4705 18.1761 67.3642 0 43.9932 0C20.6261 0 1.51606 18.1761 0 41.16H31.605C32.9372 35.5441 37.9712 31.36 43.9932 31.36Z" fill="white" fillOpacity="0.2"/>
							<path d="M50.8532 44.1C50.8532 47.8899 47.783 50.96 43.9932 50.96C40.2033 50.96 37.1332 47.8899 37.1332 44.1C37.1332 40.3101 40.2033 37.24 43.9932 37.24C47.783 37.24 50.8532 40.3101 50.8532 44.1Z" fill="white" fillOpacity="0.2"/>
						</svg> 
					</div>

					<div className='flex card grad2 br10 pl-5 select-none'>
						<h2 className='mt-10 mr-5'>Favorites</h2>
						<h3 className='absolute mt-14'>12 pokemons</h3>

						<svg  width="75" height="89" viewBox="0 0 75 89" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M43.9932 56.8C37.9716 56.8 32.9378 52.6159 31.6089 47H0C1.51596 69.9839 20.6261 88.16 43.9932 88.16C67.3603 88.16 86.4703 69.9839 87.9864 47H56.3814C55.0491 52.6159 50.0152 56.8 43.9932 56.8Z" fill="white" fillOpacity="0.2"/>
							<path d="M43.9932 31.36C50.0148 31.36 55.0486 35.5441 56.3814 41.16H87.9903C86.4705 18.1761 67.3642 0 43.9932 0C20.6261 0 1.51606 18.1761 0 41.16H31.605C32.9372 35.5441 37.9712 31.36 43.9932 31.36Z" fill="white" fillOpacity="0.2"/>
							<path d="M50.8532 44.1C50.8532 47.8899 47.783 50.96 43.9932 50.96C40.2033 50.96 37.1332 47.8899 37.1332 44.1C37.1332 40.3101 40.2033 37.24 43.9932 37.24C47.783 37.24 50.8532 40.3101 50.8532 44.1Z" fill="white" fillOpacity="0.2"/>
						</svg> 
					</div>
				</div>

				<div className='scroll mt-5 my-5'>
					{pokeCardElements}
				</div>
			</div>

			<div className= 'bg-gray-500 flex-auto'>
				{Object.keys(currentPokemon).length >1 &&
				<PokemonInfo 
					currentPokemon={currentPokemon}
				/>
				}
			</div>
    </div>
  )
}

