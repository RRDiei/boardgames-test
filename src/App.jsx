import { createBrowserRouter, RouterProvider } from "react-router";
import { HomeLayout, Landing, NotFound } from "./pages";
import { boardgameData } from "./data/database";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing boardgameData={boardgameData} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
