import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import CharactersPage from "./pages/CharactersPage";
import ChooseHouseHome from "./pages/ChooseHouseHome";
import Homepage from "./pages/Homepage";
import Quiz from "./pages/Quiz";
import SpellsPage from "./pages/SpellsPage";

export const mainRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <ChooseHouseHome />,
      },
      {
        path: "/home",
        element: (
          <>
            <Header />
            <Homepage />
          </>
        ),
      },
      {
        path: "/characters",
        element: (
          <>
            <Header />
            <CharactersPage />
          </>
        ),
      },
      {
        path: "/spells",
        element: (
          <>
            <Header />
            <SpellsPage />
          </>
        ),
      },
      { path: "/quiz/:house", element: <Quiz /> },
      {
        path: "*",
        element: (
          <>
            <Header />
            <h2>Error 404</h2>
          </>
        ),
      },
    ],
  },
]);
