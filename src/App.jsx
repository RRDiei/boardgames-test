import { createBrowserRouter, RouterProvider } from "react-router";
import { HomeLayout, Landing, NotFound, Login, Register, About } from "./pages";
import { boardgameData } from "./data/database";
import { createContext, useState } from "react";
import AllBoardgames from "./pages/AllBoardgames";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing boardgameData />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "boardgames",
        children: [
          {
            index: true,
            element: <AllBoardgames />,
          },
        ],
      },
    ],
  },
]);

const tempUser = {
  name: "Rurouni Diei",
  avatar: "",
  // avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.9jWG68fGCQLtaG2OOIIr3wHaH7%3Fpid%3DApi&f=1&ipt=cac0f69064727721794303a51bce56555e98b7f1d7c3ccc61167dcb8bdeb9581&ipo=images",
};

export const BoardgameContext = createContext(null);
export const UserContext = createContext(null);

function App() {
  const [boardgames, setBoardgames] = useState(boardgameData || []);
  const [user, setUser] = useState(tempUser);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <BoardgameContext.Provider
          value={{
            boardgames,
            setBoardgames,
          }}
        >
          <RouterProvider router={router} />
        </BoardgameContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
