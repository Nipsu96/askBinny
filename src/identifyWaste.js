import React, { useState, useEffect } from "react";
//import Placeholder from "./img/placeholder.jpg";
import Binny from "./img/binnyVersion1.png";
import TuniLogo from "./img/tuni-logo-valkea.png";
import { Link } from "react-router-dom";
import "./App.css";

function IdentifyWaste() {
  // gets the waste name from the url and makes it into a string
  var url = window.location.pathname;
  let wasteUrlString = url.split("/").pop();
  let wasteName = decodeURI(wasteUrlString);
  const [wasteImage, setWasteImage] = useState([]);
  const [binColor, setBinColor] = useState("");
  const [binType, setBinType] = useState("");

  useEffect(() => {
    fetch(`https://waste-management-qlgq.onrender.com/api/sortable`)
      .then((response) => response.json())
      .then((data) => {
        const wasteData = data.find((item) => item.name === wasteName);

        if (wasteData && wasteData.image) {
          const image = arrayBufferToBase64(wasteData.image.data);
          setWasteImage(`data:image/png;base64,${image}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching waste image:", error);
      });
    fetch(
      `https://waste-management-qlgq.onrender.com/api/sortable/filter?sortable.name=${wasteName}`
    )
      .then((response) => response.json())
      .then((data) => {
        const wasteData = data.find((item) => item.name === wasteName);

        if (wasteData) {
          setBinColor(wasteData.bin_color);
          setBinType(wasteData.type);

          switch (wasteData.bin_color) {
            case "Black/Brown":
              document.getElementById("binText").style.color = "brown";
              break;
            case "Green":
              document.getElementById("binText").style.color = "green";
              break;
            case "Large green bin with green label":
              document.getElementById("binText").style.color = "black";
              break;
            case "Large green bin with white label":
              document.getElementById("binText").style.color = "blue";
              break;
            case "Red":
              document.getElementById("binText").style.color = "red";
              break;
            case "Yellow":
              document.getElementById("binText").style.color = "#e6b800";
              break;
            default:
              document.getElementById("binText").style.color = "black";
              break;
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching bin color:", error);
      });
  }, [wasteName]);

  function arrayBufferToBase64(buffer) {
    const binary = new Uint8Array(buffer);
    let base64 = "";
    binary.forEach((byte) => {
      base64 += String.fromCharCode(byte);
    });
    return btoa(base64);
  }

  return (
    <div className="App">
      <div className="wasteInfo">
        <h3 className="WasteTitle">{wasteName}</h3>
        <img
          src={wasteImage}
          alt={`Waste example of ${wasteName}`}
          className="IdentifyWasteImage"
        />

        <div className="circular-sb-identify">
          <p>
            It goes in the <span className="binType">{binType}</span> (
            <span id="binText">{binColor} bin</span>). Let’s see where the bin
            is!
          </p>
        </div>
        <div className="ButtonContainer">
          <Link to="/askBinny">
            <button className="No-button">No &#10060;</button>
          </Link>
          <img src={Binny} alt="trash can" className="identifyWaste-binny" />
          <Link to="/map">
            <button className="Yes-button">Yes &#9989;</button>
          </Link>
        </div>
      </div>
      <div className="footer">
        <img src={TuniLogo} alt="Tuni logo" className="TuniLogo" />
        <p>Available in TAMK C-building</p>
      </div>
    </div>
  );
}
export default IdentifyWaste;
