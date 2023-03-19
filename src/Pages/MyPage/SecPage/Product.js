import React from 'react'
import Header from '../Header/Header'
import Container from '../../../components/Container/Container'
import ImageGallery from '../../../components/ImageGallery/ImageGallery'

import image1 from '../../../MyImages/Product/ilgas-zurnalinis-kavos-staliukas-silence.jpg'
import image2 from '../../../MyImages/Product/JcP3d2BA_2.jpg'
import image3 from '../../../MyImages/Product/vil8233.jpg'
import image4 from '../../../MyImages/Product/vil8244.jpg'
import image5 from '../../../MyImages/Product/konsole-silence.jpg'
import image6 from '../../../MyImages/Product/lotus-kavos-staliukas.jpg'
import image7 from '../../../MyImages/Product/lotus-kavos-staliukas4.jpg'
import image8 from '../../../MyImages/Product/vil4956.jpg'
import image9 from '../../../MyImages/Product/vil4961.jpg'
import image10 from '../../../MyImages/Product/vil4961-6.jpg'
import Footer from '../Footer/Footer'

const Product = () => {

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

          <ImageGallery
            galleryImages={galleryImages}
          />
        </div>
      </Container>
      <Footer />

    </div>
  )
}



export default Product