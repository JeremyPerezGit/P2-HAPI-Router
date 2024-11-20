import { useTheme } from "../context/theme";

function HomePage() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <h1>Home page</h1>
    </div>
  );
}

export default HomePage;
