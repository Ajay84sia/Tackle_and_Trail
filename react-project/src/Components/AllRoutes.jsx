import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard";
import { Cart } from "../Pages/Cart";
import HomePage from "../Pages/HomePage";
import NotFound from "../Pages/NotFound";

function AllRoutes(){
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<AdminDashboard/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </>
    )
}
export default AllRoutes