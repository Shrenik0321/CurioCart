import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Overview from "./pages/Overview/Overview";
import Billboards from "./pages/Billboards/Billboards";
import Categories from "./pages/Categories/Categories";
import Orders from "./pages/Orders/Orders";
import Products from "./pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "/billboards",
        element: <Billboards />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/products",
        element: <Products />,
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
