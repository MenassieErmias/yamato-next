import React from 'react'
import Image from 'next/image';
import homeStyles from '../home.modules.css';


const SpecCard = ({ content, heading, imageURL }) => {
  return (
    <div className='card-container'>
      <Image className="card-image" src={imageURL} alt={heading} height={100} width={100} />
      <h3 className="card-heading">
        {heading}
      </h3>
      <p className='card-content'>
        {content}
      </p>
    </div>
  )
}

export default SpecCard