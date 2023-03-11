import React from 'react'
import SectionGroup from './SectionGroup'


const MainContent = () => {

    const MainSectionGroup = [

        {
            title: "Šventės",
            pharagraph: "Svarbiausios jūsų dienos",
            image: "#"
            altImage: "Švenčių foto"
        },
        {
            title: "Portretai",
            pharagraph: "Jūsų diena sau",
            image: "#"
            altImage: "Portretų foto"
        },
        {
            title: "Produktai",
            pharagraph: "Jūsų produktai ir gaminiai",
            image: "#"
            altImage: "Produktų foto"
        },
        {
            title: "Gamta",
            pharagraph: "Sugįžtant į gamtą",
            image: "#"
            altImage: "Gamtos foto"
        },
        {
            title: "Miestas",
            pharagraph: "Prabėgant pro miestą",
            image: "#"
            altImage: "Miesto foto"
        },

    ];

    const group = MainSectionGroup.map((item, index) => (
        
        <SectionGroup
        title={item.title}
        pharagraph={item.pharagraph}
        image={item.image}
        altImage={item.altImage}
        key={index}
        />
    ))


  return (



        <div className="main-section">
            <SectionGroup/>{group}



            {/* <div className="section-group">
          <div className="text-section">
            <div className="section-title">
              <h2>Šventės</h2>
            </div>
            <div className="section-about">
              <p>Svarbiausios jūsų dienos</p>
            </div>
          </div>
          <div className="section-tab"><a className="img-section" href="Šventės.html"><img src="Šventės 1.jpg" alt="Švenčių foto" /></a></div>
         

        </div>

        <div className="section-group">

          <div className="text-section">
            <div className="section-title">
              <h2>Portretai</h2>
            </div>
            <div className="section-about">
              <p>Jūsų diena sau</p>
            </div>
          </div>

          <div className="section-tab"><a href="#"><img src="Portretai 1.jpg" alt="Portretų foto" /></a></div>
          

        </div>

        <div className="section-group">
          <div className="text-section">
            <div className="section-title">
              <h2>Produktai</h2>
            </div>
            <div className="section-about">
              <p>Jūsų produktai ir gaminiai </p>
            </div>
          </div>
          <div className="section-tab"><a href="#"><img src="pagalvės.jpg" alt="Produktų foto" /></a></div>
         

        </div>

        <div className="section-group">
          <div className="text-section">
            <div className="section-title">
              <h2>Gamta</h2>
            </div>
            <div className="section-about">
              <p>Sugrįžtant į gamtą</p>
            </div>
          </div>
          <div className="section-tab"><a href="#"><img src="Gamta 2.jpg" alt="Gamtos foto" /></a></div>
       

        </div>

        <div className="section-group">
          <div className="text-section">
            <div className="section-title">
              <h2>Miestas</h2>
            </div>
            <div className="section-about">
              <p>Prabėgant pro miestą</p>
            </div>
          </div>
          <div className="section-tab"><a href="#"><img src="Miestas 1.jpg" alt="Miesto foto" /></a></div>
         

        </div> */}
        </div>

    )
}

export default MainContent