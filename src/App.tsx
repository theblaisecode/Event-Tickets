import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Thanks } from "./pages";
import HomeLayout from "./Layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "thanks",
        element: <Thanks />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
