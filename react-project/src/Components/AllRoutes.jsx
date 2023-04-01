import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard";
import Boating from "../Pages/Boating";
import Camping from "../Pages/Camping";
import { Cart } from "../Pages/Cart";
import Fishing from "../Pages/Fishing";
import HomePage from "../Pages/HomePage";
import Hunting from "../Pages/Hunting";
import NotFound from "../Pages/NotFound";
import Outdoor from "../Pages/Outdoor";
import { Product } from "../Pages/Product";
import Shooting from "../Pages/Shooting";
import { SingleProduct } from "../Pages/SingleProduct";
import AdminLogin from "../Admin/AdminLogin";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/fishing" element={<Fishing />} />
        <Route path="/boating" element={<Boating />} />
        <Route path="/hunting" element={<Hunting />} />
        <Route path="/shooting" element={<Shooting />} />
        <Route path="/camping" element={<Camping />} />
        <Route path="/outdoor" element={<Outdoor />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/:endpoint/:id" element={<SingleProduct />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );

}
export default AllRoutes;
