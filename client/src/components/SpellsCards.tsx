import missingSpellImage from "../assets/images/missing_spell.svg";

interface SpellsProps {
  id: string;
  type: string;
  attributes: {
    name: string;
    effect?: string;
    image?: string;
  };
}

interface SpellsCardsProps {
  spell: SpellsProps;
}

export default function SpellsCards({ spell }: SpellsCardsProps) {
  return (
    <div key={spell.attributes.name} className="spellCard">
      <picture className="spellPicture">
        <img
          src={spell.attributes?.image || missingSpellImage}
          alt={spell.attributes.name}
          id="spellImage"
        />
      </picture>

      <section className="spellBody">
        <div className="cardName">
          <h4>Name : {spell.attributes.name}</h4>
        </div>
        <div className="spellCardBody">
          <h4>Effect : {spell.attributes.effect}</h4>
        </div>
      </section>
    </div>
  );
}
