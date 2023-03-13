import React from 'react'
import Header from '../Header/Header'
import Container from '../../../components/Container/Container'
import ImageGallery from '../../../components/ImageGallery/ImageGallery'

import image1 from '../../../MyImages/Wedding/VIL_3151.jpg'
import image2 from '../../../MyImages/Wedding/VIL_1546.jpg'
import image3 from '../../../MyImages/Wedding/VIL_8220 VIL_0480.jpg'
import image4 from '../../../MyImages/Wedding/VIL_8191 VIL_0209.jpg'
import image5 from '../../../MyImages/Wedding/VIL_8220 VIL_0438.jpg'
import image6 from '../../../MyImages/Wedding/VIL_8220 VIL_0387.jpg'
import image7 from '../../../MyImages/Wedding/VIL_8163.jpg'
import image8 from '../../../MyImages/Wedding/VIL_7899.jpg'
import image9 from '../../../MyImages/Wedding/VIL_3259_0540.jpg'
import image10 from '../../../MyImages/Wedding/VIL_3259_0523.jpg'
import Footer from '../Footer/Footer'

const Wedding = () => {

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

  // const items = WeddingItems.map((item, index) => (

  //   <WeddingItem
  //     image={item.image}
  //     key={index}
  //   />
  // ))


  return (
    <div className='page'>

      <Header />
      <Container>
        <div className='photoItem'>
          {/* <WeddingItem />{items} */}
          <ImageGallery
            galleryImages={galleryImages}
          />
        </div>
      </Container>
      <Footer />



    </div>
  )
}



export default Wedding