import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Overview from "./pages/Overview/Overview";
import Billboards from "./pages/Billboards/Billboards";
import Categories from "./pages/Categories/Categories";
import Orders from "./pages/Orders/Orders";
import Items from "./pages/Items/Items";
import AddItem from "./pages/AddItem/AddItem";
import { ItemContextProvider } from "./context/ItemContext";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/overview",
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
      <ItemContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </ItemContextProvider>
    </>
  );
}

export default App;
