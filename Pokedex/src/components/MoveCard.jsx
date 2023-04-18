import React from 'react'

function MoveCard(props) {

	const getBackGroundColor = ()=>{
    let color = 'red';
    if (getLevel() <= 2){
      color = '#7AC74C'
    }else if (getLevel() >= 3 && getLevel() < 6){
      color = '#A33EA1'
    }else if (getLevel() >= 6 && getLevel() < 20){
      color='#6390F0'
    }else if (getLevel() >= 20 && getLevel() < 30){
      color='#FE2020'
    }else if (getLevel() > 30){
      color='#9300FF'
    }
    return color ;
  }

	const getLevel = ()=>{
		let level = 0;
		var arr = [];
		props.details.forEach(element => {
			arr.push(element.level_learned_at);
		});
		return level = Math.min(...arr)
	}

  return (
    <div className='flex p-2 ml-4'>
			<div 
				className='flex justify-center type border rounded-full w-16 h-12 mr-4' 
				style={{ backgroundColor: getBackGroundColor()}}
			>
				<h2 className=''>Level {getLevel()}</h2>
			</div>
      <h2 className='movesetName'>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h2>
    </div>
  )
}

export default MoveCard

