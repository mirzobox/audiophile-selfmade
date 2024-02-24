// Router
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Login from "./pages/Login";

// Layouts
import MainLayouts from "./layouts/MainLayouts";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import { useSelector } from "react-redux";
import Signup from "./pages/Signup";

function App() {
  // const user = true;
  const user = useSelector((state) => state.user.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayouts />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "/headphones",
          element: <Headphones />,
        },
        {
          path: "/speakers",
          element: <Speakers />,
        },
        {
          path: "/earphones",
          element: <Earphones />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
