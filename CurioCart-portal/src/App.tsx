import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ShoppingCart from "./pages/Shopping-cart/ShoppingCart";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:page",
        element: <Home />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
