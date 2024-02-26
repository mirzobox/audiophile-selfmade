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
import Signup from "./pages/Signup";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { setAuthReady, setUser } from "./redux/slices/user";
import { auth } from "./firebase/firebase-config";
import SingleProductDetails from "./pages/SingleProductDetails";

function App() {
  const { user, isAuthReady } = useSelector((state) => state.user);
  const dispatch = useDispatch();
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
        {
          path: "/single-product-details/:slug",
          element: <SingleProductDetails />,
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

  // Remember login
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user));
      dispatch(setAuthReady(true));
    });
  }, []);

  return isAuthReady && <RouterProvider router={routes} />;
}

export default App;
