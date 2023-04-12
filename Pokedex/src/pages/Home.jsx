import React from 'react'
import '../App.css'

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4">
			<div className='bg-red-200'>
				
				<h1 className='ml-4 mt-10 text-[#1F2029] font-sans font-bold text-4xl '>Pokedex</h1>

				<form className='mx-4 mt-6'>   
					<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
							</div>
							<input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900  rounded-full bg-[#EFF0F1] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Pokemon" required />
					</div>
				</form>

				<div className="grid grid-cols-2 gap-4 m-4">
					<div className='card grad1 p-5'>
							<h2 className='mt-6 '>My Team</h2>
							<h3>4 pokemons</h3>
					</div>

					<div className='card grad2 p-5 '>
						<h2 className='mt-6'>Favorites</h2>
						<h3>12 pokemons</h3>

						<svg  width="75" height="89" viewBox="0 0 75 89" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M43.9932 56.8C37.9716 56.8 32.9378 52.6159 31.6089 47H0C1.51596 69.9839 20.6261 88.16 43.9932 88.16C67.3603 88.16 86.4703 69.9839 87.9864 47H56.3814C55.0491 52.6159 50.0152 56.8 43.9932 56.8Z" fill="white" fill-opacity="0.2"/>
							<path d="M43.9932 31.36C50.0148 31.36 55.0486 35.5441 56.3814 41.16H87.9903C86.4705 18.1761 67.3642 0 43.9932 0C20.6261 0 1.51606 18.1761 0 41.16H31.605C32.9372 35.5441 37.9712 31.36 43.9932 31.36Z" fill="white" fill-opacity="0.2"/>
							<path d="M50.8532 44.1C50.8532 47.8899 47.783 50.96 43.9932 50.96C40.2033 50.96 37.1332 47.8899 37.1332 44.1C37.1332 40.3101 40.2033 37.24 43.9932 37.24C47.783 37.24 50.8532 40.3101 50.8532 44.1Z" fill="white" fill-opacity="0.2"/>
						</svg>

					</div>

				</div>
			</div>

			<div className='bg-gray-600 col-span-2'>

			</div>
    </div>
  )
}

