import React from 'react'
import Header from '../Header/Header'
import Container from '../../../components/Container/Container'
import ImageGallery from '../../../components/ImageGallery/ImageGallery'

import image1 from '../../../MyImages/Nature/vil3974.jpg'
import image2 from '../../../MyImages/Nature/rsz_1new_panorama_1.jpg'
import image3 from '../../../MyImages/Nature/DSC_011.jpg'
import image4 from '../../../MyImages/Nature/rsz_1dsc_7183-2.jpg'
import image5 from '../../../MyImages/Nature/rsz_dsc_5168.jpg'
import image6 from '../../../MyImages/Nature/vil3978.jpg'
import image7 from '../../../MyImages/Nature/vil4023.jpg'
import image8 from '../../../MyImages/Nature/rsz_dsc_5251-2.jpg'
import image9 from '../../../MyImages/Nature/rsz_wil_5207.jpg'
import image10 from '../../../MyImages/Nature/rsz_dsc_5726-5.jpg'
import Footer from '../Footer/Footer'

const Nature = () => {

  const galleryImages = [

    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
    {
      image: image5,
    },
    {
      image: image6,
    },
    {
      image: image7,
    },
    {
      image: image8,
    },
    {
      image: image9,
    },
    {
      image: image10
    }

  ];



  return (
    <div className='page'>

      <Header />
      <Container>
        <div className='photoItem'>
          {/* <ImageGallery />{items} */}
          <ImageGallery
            galleryImages={galleryImages}
          />
        </div>
      </Container>
      <Footer />

    </div>
  )
}



export default Nature