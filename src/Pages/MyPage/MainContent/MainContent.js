import React from 'react'
import SectionGroup from './SectionGroup'
import wedding from '../../../MyImages/Šventės1.jpg'
import portrait from '../../../MyImages/Portretai1.jpg'
import product from '../../../MyImages/pagalvės.jpg'
import nature from '../../../MyImages/Gamta1.jpg'
import city from '../../../MyImages/Miestas1.jpg'
import './MainContent.scss'


function MainContent() {

    const MainSectionGroup = [

        {
            title: "Šventės",
            pharagraph: "Svarbiausios jūsų dienos",
            linkTo: "/mypage/wedding",
            image: wedding,
            alt: "Švenčių foto"
        },
        {
            title: "Portretai",
            pharagraph: "Jūsų diena sau",
            linkTo: "/mypage/portrait",
            image: portrait,
            alt: "Portretų foto"
        },
        {
            title: "Produktai",
            pharagraph: "Jūsų produktai ir gaminiai",
            linkTo: "/mypage/product",
            image: product,
            alt: "Produktų foto"
        },
        {
            title: "Gamta",
            pharagraph: "Sugįžtant į gamtą",
            linkTo: "/mypage/nature",
            image: nature,
            alt: "Gamtos foto",
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