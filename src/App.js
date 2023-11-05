import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import Placeholder from './img/placeholder.jpg'
import MapIcon from './img/mapicon.png'
import Binny from './img/binnyVersion1.png'
import Logo from './img/Ask_Binny_Logo.png'
import './App.css';

const wastelist = [
  { name: "A cup", url: Placeholder },
  { name: "Fruit peels" },
  { name: "Napkin" },
  { name: "Plastic bag" },
  { name: "Bubblegum" },
  { name: "Bottle" },
  { name: "Paper wrapping" },
  { name: "Straw" },
  { name: "Paper plate" }

]

function App() {
  const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return <header className="App-header">
      <ul className={click ? "nav-options active" : "nav-options"}>
        <li className="option" onClick={closeMobileMenu}>
          FrontPage
        </li>
        <li className="option" onClick={closeMobileMenu}>
          Identify my waste
        </li>
        <li className="option" onClick={closeMobileMenu}>
          Waste map
        </li>
        <li className="option" onClick={closeMobileMenu}>
          Info
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseIcon style=
            {{
              fontSize: 29,

            }}
            className="menu-icon" />
        ) : (
          <MenuIcon style={{

            fontSize: 29,
          }}
            className="menu-icon" />
        )}
      </div>
    </header>
  }

  return (
    <div className="App">
      <div className="header" id="myHeader">
        <img src={Logo} alt="app logo" className='logo' />
        <NavBar />
      </div>
      <div className="content">
        <h4>What are you recycling?</h4>
        <div className="wastelisting" >
          {wastelist.map((waste, index) =>
            <div className="waste" key={index}>
              <img src={Placeholder} alt="Placeholder for waste" /><br />
              {waste.name}
            </div>
          )}
        </div>
        <img src={Binny} alt="trash can" className='binny' />
        <div className="circular-sb">
          What do you want to sort today?
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>
        <button className="Map"> <img src={MapIcon} alt="map icon" className='mapIcon' /><br />Map</button>
      </div>
      <div className='footer'>Available in TAMK C-building</div>
    </div>
  );
}

export default App;
