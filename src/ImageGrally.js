import React from 'react'
import './imageGrally.css'
const ImageGrally = ({ fetchext }) => {
  return (
    <div>
      <div className="images-wrapper">
        {fetchext.map((data) => (
          <div className='image' key={data.id}>
            <a href={data.pageURL} target='_blanck'>
            <img src={data.largeImageURL} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGrally