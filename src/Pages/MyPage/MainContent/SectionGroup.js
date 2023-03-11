import React from 'react'

const SectionGroup = ({title, pharagraph, linkTo, image, alt}) => {


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
          <div className="section-tab"><a className="img-section" href={linkTo}><img src={image} alt={alt} /></a></div>

        </div>

  )
}

export default SectionGroup