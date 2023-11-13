import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";

//import MapIcon from "./img/mapicon.png";
//import Binny from "./img/binnyVersion1.png";
import Logo from "./img/Ask_Binny_Logo.png";
import TuniLogo from "./img/tuni-logo-valkea.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Identifywaste from "./identifyWaste";
import Map from "./map";
import "./App.css";

function Home() {
  const [wasteList, setWasteList] = useState([]);

  useEffect(() => {
    fetch(`https://waste-management-qlgq.onrender.com/api/sortable`)
      .then((response) => response.json())
      .then((data) => {
        const processedWasteItems = data.map((waste) => {
          const image = arrayBufferToBase64(waste.image.data);
          return {
            name: waste.name,
            image: `data:image/png;base64,${image}`,
          };
        });
        setWasteList(processedWasteItems);
      })
      .catch((error) => {
        console.error("Error fetching waste images:", error);
      });
  }, []);

  function arrayBufferToBase64(buffer) {
    const binary = new Uint8Array(buffer);
    let base64 = "";
    binary.forEach((byte) => {
      base64 += String.fromCharCode(byte);
    });
    return btoa(base64);
  }
  function sortWaste() {
    setWasteList((wasteArray) => [...wasteArray].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
  }

  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="content">
        <h4>What are you recycling?</h4>
        <button onClick={() => sortWaste()}>Sort alphabetically</button>
        <div className="wastelisting">
          {wasteList.map((waste, index) => (
            <div className="waste" key={index}>
              <Link to={`/IdentifyWaste/` + waste.name}>
                <button className="wasteButton">
                  <img
                    className="wasteImage"
                    src={waste.image}
                    alt={`Waste example of ${waste.name}`}
                  />
                  <br />
                  {waste.name}
                </button>
              </Link>
            </div>
          ))}
          <div className="footer">
            <img src={TuniLogo} alt="Tuni logo" className="TuniLogo" />
            <p>Available in TAMK C-building</p>
          </div>
        </div>
        {/*<img src={Binny} alt="trash can" className="binny" />
        <div className="circular-sb">
          What do you want to sort today?
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>*/}
        {/*<button className="Map"> <img src={MapIcon} alt="map icon" className='mapIcon' /><br />Map</button>*/}
      </div>
    </div>
  );
}

/*
const wastelist = [
  { name: "A cup" },
  { name: "Fruit peels" },
  { name: "Napkin" },
  { name: "Plastic bag" },
  { name: "Bubblegum" },
  { name: "Bottle" },
  { name: "Paper wrapping" },
  { name: "Straw" },
  { name: "Paper plate" },
];*/

function App() {
  const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
      <header className="App-header">
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/askBinny">FrontPage</Link>
          </li>
          {/* <li className="option" onClick={closeMobileMenu}>
          <Link to="/IdentifyWaste">Identify my waste</Link>
        </li> */}
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/map">Waste Map</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/info">Info</Link>
          </li>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseIcon
              style={{
                fontSize: 29,
              }}
              className="menu-icon"
            />
          ) : (
            <MenuIcon
              style={{
                fontSize: 29,
              }}
              className="menu-icon"
            />
          )}
        </div>
      </header>
    );
  };

  return (
    <div className="App">
      <Router>
        <div className="header" id="myHeader">
          <a href="/askBinny">
            <img src={Logo} alt="app logo" className="logo" />
          </a>
          <NavBar />
        </div>
        <Routes>
          <Route path="/info"></Route>
          <Route
            path="/identifyWaste/:name"
            element={<Identifywaste />}
          ></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/askBinny" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
