import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function LightboxComponent(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        <img className='object-contain h-60 w-96' src={props.frontDefault}></img>
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: props.frontDefault },
          { src: props.frontShiny },
        ]}
      />
    </>
  );
}