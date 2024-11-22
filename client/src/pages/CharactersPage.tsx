import { useEffect, useState } from "react";
import "./CharactersPage.css";
import CharactersCards from "../components/CharactersCards";
import Search from "../components/SearchBar";
import { useTheme } from "../context/theme";

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

export default function CharactersPage() {
  const { theme } = useTheme();
  const [characters, setCharacters] = useState<CharacterProps[] | null>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error(error));
  }, []);

  if (!characters) {
    return <div className="loadingAPI">Loading...</div>;
  }

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className={theme}>
      <Search onSearch={handleSearch} />
      <h2 className="charactersTitle">Characters</h2>

      <section className="charactersCards">
        {filteredCharacters.map((character) => (
          <CharactersCards key={character.id} character={character} />
        ))}
      </section>
    </div>
  );
}
