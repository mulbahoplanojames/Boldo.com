import React from 'react'
import '/src/Components/OurStory/OurStory.css'

const ImageCard = (props) => {
  return (
    <>
        <div className="image_card">{props.image}</div>
    </>
  )
}

export default ImageCard