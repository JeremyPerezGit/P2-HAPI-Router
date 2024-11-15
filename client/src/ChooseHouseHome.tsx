import { NavLink } from "react-router-dom";
import "./ChooseHouseHome.css";
import "./components/Gryffindor.css";
import "./components/Hufflepuff.css";
import "./components/Ravenclaw.css";
import "./components/Slytherin.css";
import { useState } from "react";

function ChooseHouseHome() {
  const [changeColor, setChangeColor] = useState("Gryffindor");

  console.info("ChooseHouseHome.tsx", changeColor);

  function handleChange(style: string) {
    setChangeColor(style);
  }

  return (
    <div className={"choose-house-home"}>
      <h1>Hapi Router</h1>
      <h2>Choose Your House</h2>

      <div className="card-container">
        {/* Gryffindor Card */}
        <div className="card gryffindor">
          <img src="src/assets/images/Gryffindor.png" alt="Gryffindor" />
          <p>Bravery and Chivalry</p>
          <NavLink
            to="/home"
            className="button"
            onClick={() => handleChange("Gryffindor")}
          >
            Gryffindor
          </NavLink>
        </div>

        {/* Hufflepuff Card */}
        <div className="card hufflepuff">
          <img src="src/assets/images/Hufflepuff.png" alt="Hufflepuff" />
          <p>Loyalty and hard working</p>
          <NavLink to="/home" className="button">
            Hufflepuff
          </NavLink>
        </div>

        {/* Ravenclaw Card */}
        <div className="card ravenclaw">
          <img src="src/assets/images/Ravenclaw.png" alt="Ravenclaw" />
          <p>Wit and learning</p>
          <NavLink
            to="/home"
            className="button"
            onClick={() => handleChange("Ravenclaw")}
          >
            Ravenclaw
          </NavLink>
        </div>

        {/* Slytherin Card */}
        <div className="card slytherin">
          <img src="src/assets/images/Slytherin.png" alt="Slytherin" />
          <p>Cunning and ambition</p>
          <NavLink
            to="/home"
            className="button"
            onClick={() => handleChange("Slytherin")}
          >
            Slytherin
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ChooseHouseHome;
