import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Category from "./routes/category/category.component";
import Checkout from "./routes/checkout/checkout.component";
import SignIn from "./routes/sign-in/sign-in-page.component";
import { useEffect } from "react";
/* eslint-disable */
//@ts-ignore
import { getAuth, onAuthStateChanged } from "firebase/auth";
/* eslint-enable */
import { setCurrentUser } from "./store/store";
import { useDispatch } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <Outlet></Outlet>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      { path: "/shop/:id", element: <Category /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/sign-in", element: <SignIn /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const auth = getAuth();
  // const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(setCurrentUser(user));

        // navigate("/");
      } else {
        dispatch(setCurrentUser(null));
        // User is signed out
        // ...
      }
    });
  }, [
    auth,
    dispatch,
    //  navigate
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
