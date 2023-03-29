import { Route, Routes } from "react-router-dom";
import Home from "../HomePage/Home";

function AllRoutes(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}
export default AllRoutes