import React from 'react'
import './MyPage.css'
import Container from '../../components/Container/Container'
import MyPhotoLogo from '../../MyImages/MyPhotoLogo.webp'



const MyPage = () => {
  return (
    <div className='page'>
      <Container>
      <div>
        <a className="main-logo" href="Pagrindinis.html"><img src={MyPhotoLogo} alt="Photo Logo" /></a>


        <nav className="main">
          <ul className="main-menu">
            <li className="menu-item"></li><a className="menu-value" href="Šventės.html">Šventės</a>
            <li className="menu-item"></li><a className="menu-value" href="Portretai.html">Portretai</a>
            <li className="menu-item"></li><a className="menu-value" href="Produktai.html">Produktai</a>
            <li className="menu-item"></li><a className="menu-value" href="Gamta.html">Gamta</a>
            <li className="menu-item"></li><a className="menu-value" href="Miestas.html">Miestas</a>
          </ul>
        </nav>
      </div>


      <div className="main-section">

        <div className="section-group">
          <div className="text-section">
            <div className="section-title">
              <h2>Šventės</h2>
            </div>
            <div className="section-about">
              <p>Svarbiausios jūsų dienos</p>
            </div>
          </div>
          <div className="section-tab"><a className="img-section" href="Šventės.html"><img src="Šventės 1.jpg" alt="Švenčių foto" /></a></div>
          {/* <!-- <div className="section-img"><img src="#" alt="Švenčių foto"/></div> --> */}

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
          {/* <!-- <div className="section-img"><img src="#" alt="Portretų foto"/></div> --> */}

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
          {/* <!-- <div className="section-img"><img src="#" alt="Produktų foto"/></div> --> */}

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
          {/* <!-- <div className="section-img"><img src="#" alt="Gamtos foto"/></div> --> */}

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
          {/* <!-- <div className="section-img"><img src="#" alt="Miesto foto"/></div> --> */}

        </div>
      </div>

      <footer>
        <div>
          <div>
            <h3>Susisiekite su manimi</h3>
          </div>
          <div>
            <p>telefonu <a href="tel: +3706*******"> +3706******* </a> </p>
          </div>
          <div>
            <p>el.paštu <a href="vilimantas****@gmail.com"> vilimantas****@gmail.com</a> </p>
          </div>
          <div><a href="https://www.facebook.com/"><img src="facebook-icon.png" alt="Facebook" /></a>
          </div>

        </div>
        </footer>
        </Container>

      </div>
      )
}

      export default MyPage