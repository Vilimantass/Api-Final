
import './App.css';
import { Route, Routes, } from 'react-router-dom'

import MainNav from './Pages/MainNav/MainNav';

import Main from './Pages/Main/Main';
import MyPage from './Pages/MyPage/MyPage';
import MyApi from './Pages/MyApi/MyApi';
import Figma from './Pages/Figma/Figma';


function App() {
  return (
    <div className='App'>
      <MainNav />

      <Routes>

        <Route path='/main' element={<Main />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/figma' element={<Figma />} />
        <Route path='/myapi' element={<MyApi />} />

        {/* <div>
          <h1>404 error. Page not found</h1>
          <Link to='/'>Back to Home page</Link>
        </div> */}

      </Routes>


    </div>
  );
}

export default App;
