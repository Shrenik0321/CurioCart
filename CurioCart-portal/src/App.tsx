import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ShoppingCart from "./pages/Shopping-cart/ShoppingCart";
import { ItemContextProvider } from "./context/ItemContext";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import PageNotFound from "./components/Error/PageNotFound";
import { CartItemsContextProvider } from "./context/CartItemsContext";

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
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <>
      <ErrorBoundary>
        <ItemContextProvider>
          <CartItemsContextProvider>
            <RouterProvider router={router}></RouterProvider>
          </CartItemsContextProvider>
        </ItemContextProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
