import { useEffect, useState } from "react";
import trainImage from "../images/train.png"; // Ajustez le chemin vers votre image
import "./Homepage.css";
import { useTheme } from "../context/theme";

function Homepage() {
  const { theme } = useTheme();
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
    <div className={`homepage ${theme}`}>
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
          <p>Come and discover the spells of the Harry Potter universe!</p>
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
          <p>lorem</p>
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
