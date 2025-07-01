import { createBrowserRouter, RouterProvider } from "react-router";
import { HomeLayout, Landing, NotFound } from "./pages";
import { boardgameData } from "./data/database";
import { createContext, useState } from "react";

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
    ],
  },
]);

const tempUser = {
  name: "Rurouni Diei",
  avatar: "",
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
