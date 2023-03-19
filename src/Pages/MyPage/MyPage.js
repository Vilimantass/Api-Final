import React from 'react'
import './MyPage.scss'
import Container from '../../components/Container/Container'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import MainContent from './MainContent/MainContent'



const MyPage = () => {
  return (
    <div className='page'>
      
      <Header />
      <Container>
        <MainContent />
      </Container>
      <Footer />
    </div>
  )
}

export default MyPage