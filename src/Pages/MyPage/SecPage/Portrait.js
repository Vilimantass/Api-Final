import React from 'react'
import Header from '../Header/Header'
import Container from '../../../components/Container/Container'
import ImageGallery from '../../../components/ImageGallery/ImageGallery'

import image1 from '../../../MyImages/Portrait/rsz_1vf8_0287-2.jpg'
import image2 from '../../../MyImages/Portrait/rsz_2wil_9729_pp.jpg'
import image3 from '../../../MyImages/Portrait/rsz_dsc_1395-2.jpg'
import image4 from '../../../MyImages/Portrait/rsz_vil_9879.jpg'
import image5 from '../../../MyImages/Portrait/rsz_1dsc_7878-2.jpg'
import image6 from '../../../MyImages/Portrait/rsz_1wil_3657_pp.jpg'
import image7 from '../../../MyImages/Portrait/rsz_1wil_3659.jpg'
import image8 from '../../../MyImages/Portrait/rsz_1wil_5627.jpg'
import image9 from '../../../MyImages/Portrait/rsz_dsc_1414.jpg'
import image10 from '../../../MyImages/Portrait/rsz_dsc_3490_sharp.jpg'
import Footer from '../Footer/Footer'

const Portrait = () => {

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



export default Portrait