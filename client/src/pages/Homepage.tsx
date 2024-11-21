import { useEffect, useState } from "react";
import trainImage from "../images/train.png"; // Ajustez le chemin vers votre image
import "./Homepage.css";

function Homepage() {
  const texts = [
    "Expelliarmus!",
    "Wingardium Leviosa!",
    "Avada Kedavra!",
    "Expecto Patronum!",
    "Lumos!",
    "Nox!",
    "Accio!",
    "Alohomora!",
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
      <div className="content">
        <section className="section section1" id="section1">
          <h2> HARRY POTTER UNIVERSE</h2>
          <p>Learn more about your favorite characters</p>
          <img
            src={"https://ik.imagekit.io/hpapi/harry.jpg"}
            alt="Main Character"
            className="character-image"
          />
          <button type="button" className="center-button">
            Personnages
          </button>
        </section>
        <section className="section section2" id="section2">
          <h2>What would magic be without spells?</h2>
          <p> Venez découvrir les sorts de l’univers Harry Potter !</p>
          <div
            className={`random-text-container ${visible ? "visible" : "hidden"}`}
          >
            {texts.map((text) => (
              <span key={text} className="random-text">
                {text}
              </span>
            ))}
          </div>
          <button type="button" className="center-button">
            Sorts
          </button>
        </section>
        <section className="section section3" id="section3">
          <h2>Useless information therefore essential:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            ratione adipisci ab, amet quas eligendi odio, nostrum autem hic
            nihil molestias iste maxime, voluptas et mollitia tempora impedit
            placeat veritatis sint. Suscipit architecto, necessitatibus aliquid
            soluta, doloribus fugiat neque error libero voluptates ducimus
            veritatis perferendis. Molestias quod odio ex eaque?
          </p>
        </section>
        <section className="section section4" id="section4">
          <div className="train-container">
            <img src={trainImage} alt="Train" className="train-image" />
            <div className="text-overlay">
              <h2 className="train-title">You want to test your knowledge?</h2>
              <button type="button" className="center-button2">
                Start the quiz
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
