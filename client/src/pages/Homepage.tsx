import React, { useEffect, useState } from "react";
import trainImage from '../images/train.png';
import image from '../images/Hogwarts-1000-logos.png'
import "./Homepage.css"

function Homepage() {
  const texts = [
    "Expelliarmus!",
    "Wingardium Leviosa!",
    "Avada Kedavra!",
    "Expecto Patronum!",
    "Lumos!",
    "Nox!",
    "Accio!",
    "Alohomora!"
  ];

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 5000); // Change visibility every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <header className="header">
        <nav className="navbar">
          <img src={image} alt="Logo" className="logo" />{" "}
          <h1 className="title">Hapi Router</h1>
        </nav>
      </header>
      <div className="content">
        <section className="section">
          <h2> HARRY POTTER UNIVERSE</h2>
          <p>Learn more about your favorite characters</p>
          <div>
            <img src={"https://ik.imagekit.io/hpapi/ron.jpg"} alt="Character" className="character-image" />
            <img src={"https://ik.imagekit.io/hpapi/harry.jpg"} alt="Character" className="character-image" />
            <img src={"https://ik.imagekit.io/hpapi/hermione.jpeg"} alt="Character" className="character-image" />
          </div>
          <button className="center-button">Personnages</button>
        </section>
        <section className="section2">
          <h2>What would magic be without spells?</h2>
          <p> Venez découvrir les sorts de l’univers Harry Potter !</p>
          <div className={`random-text-container ${visible ? 'visible' : 'hidden'}`}>
            {texts.map((text, index) => (
              <span key={index} className="random-text">{text}</span>
            ))}
          </div>
          <button className="center-button">Sorts</button>
        </section>
        <section className="section3">
          <h2>Useless information therefore essential:</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ratione adipisci ab, amet quas eligendi odio, nostrum autem hic nihil molestias iste maxime, voluptas et mollitia tempora impedit placeat veritatis sint. Suscipit architecto, necessitatibus aliquid soluta, doloribus fugiat neque error libero voluptates ducimus veritatis perferendis. Molestias quod odio ex eaque?</p>
        </section>
        <section className="section4">
        <div className="train-container">
          <h2>DO YOU WANT TO TEST YOUR KNOWLEDGE?</h2>
          <img src={trainImage} alt="Train" className="train-Image" />
          <button className="center-button2">Start the quiz</button>
          </div>
        </section>
    </div>
    </div>
  );
}

export default Homepage;

