import React from 'react'

function Type(props) {
  const [color,setColor] = React.useState('')

  React.useEffect(() => {
    if (props.name == 'grass'){
      setColor('#95C24D')
    }else if (props.name == 'poison'){
      setColor('#7B62A3')
    }else if (props.name == 'water'){
      setColor('#4592C3')
    }else if (props.name == 'normal'){
      setColor('#A3ACAE')
    }else if (props.name == 'fire'){
      setColor('#FD7D25')
    }else if (props.name == 'lightning'){
      setColor('#4592C3')
    }else if (props.name == 'ground'){
      setColor('#4592C3')
    }else if (props.name == 'flying'){
      setColor('##a2bcea')
    }else if (props.name == 'bug'){
      setColor('##a2bcea')
    }
  }, []);



  return (
    <div className='border flex flex-wrap  rounded-full p-2' style={{ backgroundColor: color}}>
      {props.name}
    </div>
  )
}

export default Type