import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function CarouselComponent(props) {
  return (
		<>
			<Carousel >
				<div>
						<img src={props.frontDefault} />

				</div>
				<div>
						<img src={props.frontShiny} />
				</div>
			</Carousel>
		</>
  )
}

export default CarouselComponent