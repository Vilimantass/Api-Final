import React from 'react'
import SectionGroup from './SectionGroup'


function MainContent() {

    const MainSectionGroup = [

        {
            title: "Šventės",
            pharagraph: "Svarbiausios jūsų dienos",
            linkTo: "/Wedding",
            image: "",
            alt: "Švenčių foto"
        },
        {
            title: "Portretai",
            pharagraph: "Jūsų diena sau",
            linkTo: "#",
            image: "",
            alt: "Portretų foto"
        },
        {
            title: "Produktai",
            pharagraph: "Jūsų produktai ir gaminiai",
            linkTo: "#",
            image: "",
            alt: "Produktų foto"
        },
        {
            title: "Gamta",
            pharagraph: "Sugįžtant į gamtą",
            linkTo: "#",
            image: "",
            alt: "Gamtos foto",
        },
        {
            title: "Miestas",
            pharagraph: "Prabėgant pro miestą",
            linkTo: "#",
            image: "",
            alt: "Miesto foto"
        },

    ];

    const group = MainSectionGroup.map((item, index) => (
        
        <SectionGroup
        title={item.title}
        pharagraph={item.pharagraph}
        linkTo={item.linkTo}
        image={item.image}
        key={index}
        />
    ))

  

  return (



        <div className="main-section">
            <SectionGroup/>{group}



            
        </div>

    )
}

export default MainContent