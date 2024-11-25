import missingCharacterImage from "../assets/images/missing_character.jpg";

interface CharacterProps {
  id: string;
  name: string;
  image?: string;
  patronus?: string;
  house?: string;
  wand: {
    wood?: string;
    core?: string;
    length?: number;
  };
}

interface CharactersCardsProps {
  character: CharacterProps;
}

export default function CharactersCards({ character }: CharactersCardsProps) {
  return (
    <div key={character.id} className={`characterCard ${character.house}`}>
      <picture className="characterPicture">
        <img
          src={character?.image || missingCharacterImage}
          alt={character.name}
          id="characterImage"
        />
      </picture>

      <section className="characterBody">
        <div className="cardName">
          <h4>{character.name}</h4>
        </div>
        <div className="characterCardBody">
          <h4>Wand :</h4>
          <p>Wood : {character.wand.wood || "???"}</p>
          <p>Core : {character.wand.core || "???"}</p>
          <p>Length : {character.wand.length || "???"} inches</p>
          <div className="patronus">
            <h4>Patronus : </h4>
            <p> {character.patronus || "???"}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
