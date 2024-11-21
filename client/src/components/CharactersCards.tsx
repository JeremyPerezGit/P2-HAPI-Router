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
          <h3>{character.name}</h3>
        </div>
        <div className="characterCardBody">
          <h3>Wand :</h3>
          <p>Wood : {character.wand.wood || "???"}</p>
          <p>Core : {character.wand.core || "???"}</p>
          <p>Length : {character.wand.length || "???"} inches</p>
          <h3>Patronus : {character.patronus || "???"}</h3>
        </div>
      </section>
    </div>
  );
}
