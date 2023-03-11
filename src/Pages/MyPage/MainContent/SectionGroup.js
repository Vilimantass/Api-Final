import React from 'react'

const SectionGroup = ({title, pharagraph, image, altImage}) => {
  return (
    
    <div className="section-group">
          <div className="text-section">
            <div className="section-title">
              <h2>{title}</h2>
            </div>
            <div className="section-about">
              <p>{pharagraph}}</p>
            </div>
          </div>
          <div className="section-tab"><a className="img-section" href={image}><img src={altImage} alt="Švenčių foto" /></a></div>
          {/* <!-- <div className="section-img"><img src="#" alt="Švenčių foto"/></div> --> */}

        </div>

  )
}

export default SectionGroup