import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Overview from "./pages/Overview/Overview";
import Billboards from "./pages/Billboards/Billboards";
import Categories from "./pages/Categories/Categories";
import Orders from "./pages/Orders/Orders";
import Items from "./pages/Items/Items";
import AddItem from "./pages/AddItem/AddItem";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import PageNotFound from "./components/Error/PageNotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Layout />}>
            <Route path="/overview" element={<Overview />} />
            <Route path="/billboards" element={<Billboards />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/items" element={<Items />} />
            <Route path="/add-new-item" element={<AddItem />} />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
