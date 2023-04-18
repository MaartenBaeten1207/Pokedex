import React from 'react'

function Type(props) {
  const getBackGroundColor = ()=>{
    let color = 'red';
    if (props.name == 'grass'){
      color = '#7AC74C'
    }else if (props.name == 'poison'){
      color = '#A33EA1'
    }else if (props.name == 'water'){
      color='#6390F0'
    }else if (props.name == 'normal'){
      color = '#A8A77A'
    }else if (props.name == 'fire'){
      color = '#EE8130'
    }else if (props.name == 'lightning'){
      color = '#4592C3'
    }else if (props.name == 'ground'){
      color = '#E2BF65'
    }else if (props.name == 'flying'){
      color = '#A98FF3'
    }else if (props.name == 'bug'){
      color = '#A6B91A'
    }else if (props.name == 'psychic'){
      color = '#F95587'
    }else if (props.name == 'electric'){
      color = '#F7D02C'
    }else if (props.name == 'ice'){
      color = '#96D9D6'
    }else if (props.name == 'rock'){
      color = '#B6A136'
    }else if (props.name == 'ghost'){
      color = '#735797'
    }else if (props.name == 'dragon'){
      color = '#6F35FC'
    }else if (props.name == 'dark'){
      color = '#705746'
    }else if (props.name == 'steel'){
      color = '#B7B7CE'
    }else if (props.name == 'fairy'){
      color = '#D685AD'
    }
    return color ;
  }

  

  return (
    <div 
      className='flex justify-center type border rounded-full w-16 h-12' 
      style={{ backgroundColor: getBackGroundColor()}}
      >
      <h2>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h2>
    </div>
  )
}

export default Type