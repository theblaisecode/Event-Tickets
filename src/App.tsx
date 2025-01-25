import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, CodeOfConduct } from "./pages";
import HomeLayout from "./Layout/HomeLayout";

const router = createBrowserRouter(
  [
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
  ],
  { basename: "/Event-Tickets" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
