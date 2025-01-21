import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, CodeOfConduct } from "./pages";
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
      },
      {
        path: "code-of-conduct",
        element: <CodeOfConduct />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
