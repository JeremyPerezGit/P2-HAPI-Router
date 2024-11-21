import { NavLink } from "react-router-dom";
import "./Header.css";
import hogwartsEmblem from "../assets/images/Hogwarts.png";

export default function Header() {
  return (
    <header className="header">
      <section className="header-title">
        <h1 id="title">Hapi Router</h1>
        <figure className="houseEmblem">
          <img src={hogwartsEmblem} alt="Hogwarts Emblem" id="houseEmblem" />
        </figure>
      </section>
      <nav>
        <ul>
          <li>
            <NavLink to={"/home"} id="navHome">
              Home <span className="wandPointer">🪄</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/characters"} id="navCharacters">
              Characters
              <span className="wandPointer">🪄</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/spells"} id="navSpells">
              Spells
              <span className="wandPointer">🪄</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}