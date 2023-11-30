import React, { useState, useEffect } from "react";
import RedBinny from "./img/Red_Binny.png";
import BlackBinny from "./img/Black_Binny.png";
import GreenBinny from "./img/Green_Binny.png";
import DarkGreenBinny from "./img/DarkGreen_Binny.png";
import DarkBlueBinny from "./img/DarkBlue_Binny.png";
import YellowBinny from "./img/Yelllow_Binny.png";
import { MapInteractionCSS } from "react-map-interaction";
import TuniLogo from "./img/tuni-logo-valkea.png";
import "./App.css";

function Map() {
  const [mapImage, setMapImage] = useState([]);
  const [floorName, setFloornName] = useState("C1");
  const [mapName, setMapName] = useState("C1_all");
  useEffect(() => {
    fetch(
      `https://waste-management-qlgq.onrender.com/api/sortable/map?map.map_name=${mapName}`
      //${mapName}
    )
      .then((response) => response.json())
      .then((data) => {
        const image = arrayBufferToBase64(data[0].map_image.data);
        setMapImage(`data:image/png;base64,${image}`);
      })
      .catch((error) => {
        console.error("Error fetching map:", error);
      });
  }, [mapName]);

  function arrayBufferToBase64(buffer) {
    const binary = new Uint8Array(buffer);
    let base64 = "";
    binary.forEach((byte) => {
      base64 += String.fromCharCode(byte);
    });
    return btoa(base64);
  }
  function setFloor(e) {
    const buttonValue = e.target.value;
    switch (buttonValue) {
      case "1st":
        setFloornName("C1");
        setMapName("C1_all");
        break;
      case "2nd":
        setFloornName("C2");
        setMapName("C2_all");
        break;
      case "3rd":
        setFloornName("C3");
        setMapName("C3_all");
        break;
      case "4th":
        setFloornName("C4");
        setMapName("C4_all");
        break;
      default:
        setMapName("C1_all");
        break;
    }
  }
  function setName(color) {
    switch (color) {
      case "Red":
        if (floorName === "C1") {
          setMapName("C1_bottles");
        } else if (floorName === "C2") {
          setMapName("C2_bottles");
        } else if (floorName === "C3") {
          setMapName("C3_bottles");
        } else if (floorName === "C4") {
          setMapName("C4_bottles");
        }

        break;
      case "Yellow":
        if (floorName === "C1") {
          setMapName("C1_plastic");
        } else if (floorName === "C2") {
          setMapName("C2_plastic");
        } else if (floorName === "C3") {
          setMapName("C3_plastic");
        } else if (floorName === "C4") {
          setMapName("C4_plastic");
        }

        break;
      case "Dark Green":
        if (floorName === "C1") {
          setMapName("C1_all");
        } else if (floorName === "C2") {
          setMapName("C2_cardboard");
        } else if (floorName === "C3") {
          setMapName("C1_all");
        } else if (floorName === "C4") {
          setMapName("C1_all");
        }
        break;
      case "Green":
        if (floorName === "C1") {
          setMapName("C1_solid");
        } else if (floorName === "C2") {
          setMapName("C2_solid");
        } else if (floorName === "C3") {
          setMapName("C3_solid");
        } else if (floorName === "C4") {
          setMapName("C4_solid");
        }
        break;
      case "Black":
        if (floorName === "C1") {
          setMapName("C1_compostable");
        } else if (floorName === "C2") {
          setMapName("C2_compostable");
        } else if (floorName === "C3") {
          setMapName("C3_compostable");
        } else if (floorName === "C4") {
          setMapName("C4_compostable");
        }
        break;
      case "Dark Blue":
        if (floorName === "C1") {
          setMapName("C1_all");
        } else if (floorName === "C2") {
          setMapName("C2_paper");
        } else if (floorName === "C3") {
          setMapName("C1_all");
        } else if (floorName === "C4") {
          setMapName("C1_all");
        }
        break;
      default:
        setMapName("C1_all");
        break;
    }
  }
  return (
    <div className="App">
      <div className="MapPageContent">
        <h2>Choose floor:</h2>
        <div className="FloorButtonsDiv">
          <button
            className="FloorButton"
            value="1st"
            onClick={(e) => setFloor(e)}
          >
            1st
          </button>
          <button
            className="FloorButton"
            value="2nd"
            onClick={(e) => setFloor(e)}
          >
            2nd
          </button>
          <button
            className="FloorButton"
            value="3rd"
            onClick={(e) => setFloor(e)}
          >
            3rd
          </button>
          <button
            className="FloorButton"
            value="4th"
            onClick={(e) => setFloor(e)}
          >
            4th
          </button>
        </div>
        <div className="MapImageContainer">
          <MapInteractionCSS
            showControls
            defaultValue={{
              scale: 1,
              translation: { x: 0, y: 20 },
            }}
            minScale={0.5}
            maxScale={3}
            translationBounds={{
              xMax: 400,
              yMax: 200,
            }}
          >
            <img
              src={mapImage}
              alt="Map that displays the bin placements of the current floor"
              className="MapImage"
            />
          </MapInteractionCSS>
        </div>
        <div className="BinTypeList">
          <button className="BinType" onClick={() => setName("Red")}>
            <img
              src={RedBinny}
              alt="Bin icon"
              value="Red"
              className="BinTypeIcon"
            />
            <p className="BinTypeText" value="Red">
              Bottles and cans
            </p>
          </button>
          <button className="BinType" onClick={() => setName("Yellow")}>
            <img
              src={YellowBinny}
              alt="Bin icon"
              className="BinTypeIcon"
              value="Yellow"
            />
            <p className="BinTypeText" value="Yellow">
              Plastic packaging
            </p>
          </button>
          <button className="BinType" onClick={() => setName("Dark Green")}>
            <img
              src={DarkGreenBinny}
              alt="Bin icon"
              className="BinTypeIcon"
              value="Dark Green"
            />
            <p className="BinTypeText" value="Dark Green">
              Cardboard
            </p>
          </button>
          <button className="BinType" onClick={() => setName("Green")}>
            <img
              src={GreenBinny}
              alt="Bin icon"
              className="BinTypeIcon"
              value="Green"
            />
            <p className="BinTypeText" value="Green">
              Solid waste
            </p>
          </button>
          <button className="BinType" onClick={() => setName("Black")}>
            <img
              src={BlackBinny}
              alt="Bin icon"
              className="BinTypeIcon"
              value="Black"
            />
            <p className="BinTypeText" value="Black">
              Compostable waste
            </p>
          </button>
          <button className="BinType" onClick={() => setName("Dark Blue")}>
            <img
              src={DarkBlueBinny}
              alt="Bin icon"
              className="BinTypeIcon"
              value="Dark Blue"
            />
            <p className="BinTypeText" value="Dark Blue">
              Paper
            </p>
          </button>
        </div>
        <button className="DoneButton">Done! &#9989;</button>
      </div>
      <div className="footer">
        <img src={TuniLogo} alt="Tuni logo" className="TuniLogo" />
        <p>Available in TAMK C-building</p>
      </div>
    </div>
  );
}
export default Map;
