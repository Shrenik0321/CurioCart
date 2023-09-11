import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Overview from "./pages/Overview/Overview";
import Billboards from "./pages/Billboards/Billboards";
import Categories from "./pages/Categories/Categories";
import Orders from "./pages/Orders/Orders";
import Items from "./pages/Items/Items";
import AddItem from "./pages/AddItem/AddItem";

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
        path: "/items",
        element: <Items />,
      },
      {
        path: "/add-new-item",
        element: <AddItem />,
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
