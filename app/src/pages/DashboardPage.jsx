import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import UsersDisplay from "../components/sections/UsersDisplay";
import MpzpDisplay from "../components/sections/MpzpDisplay";

const DashboardPage = () => {
    return (
        <DashboardLayout>
            <Routes>
                <Route path="/users" element={<UsersDisplay/>}/>
                <Route path="/mpzp" element={<MpzpDisplay/>}/>
            </Routes>
        </DashboardLayout>
    )
}

export default DashboardPage;