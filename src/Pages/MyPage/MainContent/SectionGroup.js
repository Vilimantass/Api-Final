import React from 'react'
import { NavLink } from 'react-router-dom';

const SectionGroup = ({ title, pharagraph, linkTo, image, alt }) => {


  if (!title) {
    return;
  }


  return (

    <div className="section-group">
      <div className="text-section">
        <div className="section-title">
          <h2>{title}</h2>
        </div>
        <div className="section-about">
          <p>{pharagraph}</p>
        </div>
      </div>
      <div className="section-tab">
        <NavLink className="img-section" to={linkTo}><img src={image} alt={alt} /></NavLink>
      </div>

    </div>

  )
}

export default SectionGroup