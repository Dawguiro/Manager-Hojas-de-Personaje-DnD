import React from 'react'
import "./ImagenOpcional.css"

const ImagenOpcional = ({imagen, className, alt, baseUrl = "http://127.0.0.1:8000" }) => {
  if (imagen){
    return(
    <img className={className} src={baseUrl + imagen} alt={alt} />
    )
  } else {
    return(
      <img className={className} src="https://placehold.co/600x400/png" alt="placeholder" />
    )
  }
}

export default ImagenOpcional