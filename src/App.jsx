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

export const BoardgameContext = createContext(null);

function App() {
  const [boardgames, setBoardgames] = useState(boardgameData);

  return (
    <>
      <BoardgameContext.Provider
        value={{
          boardgames,
          setBoardgames,
        }}
      >
        <RouterProvider router={router} />
      </BoardgameContext.Provider>
    </>
  );
}

export default App;
