import React from 'react'
import { Link } from 'react-router-dom'
export default function Drink({ image, name, id, info, glass }) {
  return (
    <article className='drink'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='drink-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/drink/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}
