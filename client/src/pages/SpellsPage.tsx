import { useEffect, useState } from "react";
import "./SpellsPage.css";
import Search from "../components/SearchBar";
import SpellsCards from "../components/SpellsCards";

interface SpellsProps {
  id: string;
  type: string;
  attributes: {
    name: string;
    effect?: string;
    image?: string;
  };
}

export default function SpellsPage() {
  const [spells, setSpells] = useState<SpellsProps[] | null>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://api.potterdb.com/v1/spells")
      .then((response) => response.json())
      .then((data) => setSpells(data.data))
      .catch((error) => console.error(error));
  }, []);

  if (!spells) {
    return <div className="loadingAPI">Loading...</div>;
  }

  const filteredSpells = spells.filter((spell) =>
    spell.attributes.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <h2 className="spellsTitle">Spells</h2>

      <section className="spellsCards">
        {filteredSpells.map((spell) => (
          <SpellsCards key={spell.id} spell={spell} />
        ))}
      </section>
    </>
  );
}
