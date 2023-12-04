import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

const RouteManagment = () =>{
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Dashboard" element={<Dashboard />} />

        </Routes>
    </BrowserRouter>
}

export default RouteManagment;