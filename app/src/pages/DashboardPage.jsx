import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import UsersDisplay from "../components/sections/UsersDisplay";

const DashboardPage = () => {
    return (
        <DashboardLayout>
            <Routes>
                <Route path="/users" element={<UsersDisplay/>}/>
            </Routes>
        </DashboardLayout>
    )
}

export default DashboardPage;