import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import LoginUser from "../components/forms/user/LoginUser"

const MainPage = () => {
    const [register, setRegister] = useState(false);
    return (
        <MainLayout>
            <LoginUser/>
        </MainLayout>
    )
}

export default MainPage;