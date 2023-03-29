import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard";
import HomePage from "../Pages/HomePage";

function AllRoutes(){
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<AdminDashboard/>} />
            </Routes>
        </>
    )
}
export default AllRoutes