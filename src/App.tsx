import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Thanks } from "./pages";
import HomeLayout from "./Layout/HomeLayout";
// import { ticketFormAction } from "./components/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        // action: {ticketFormAction},
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
