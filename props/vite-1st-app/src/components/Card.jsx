import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9FFytV2ZW7_2FD8iLNI8tgM0JHKduMyg43ZC8kDRkYRIP6Jp-FYDSIVQMVg&s" alt="" width={270}
      style={{border: "2px solid green"}} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
