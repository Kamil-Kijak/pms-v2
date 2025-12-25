
import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import useApi from "./hooks/useApi";
import { useUserStore } from "./hooks/stores";
import DashboardPage from "./pages/DashboardPage";


const App = () => {
    const {get} = useApi();
    const updateUser = useUserStore((state) => state.update);

    const [auth, setAuth] = useState(true);
    const [ready, setReady] = useState(false);

    const authorize = async () => {
        console.log("Hello world");
        await get("/api/users/auth", (res) => {
            updateUser(res.data.user)
            setAuth(true);
        }, (err) => {
            if(err.unauthorized) {
                setAuth(false);
            }
        });
        if(!ready) {
            setReady(true);
        }
    }
    useEffect(() => {
        authorize()
    }, []);
    return (
        ready ?
            auth ? <DashboardPage authorize={authorize}/> : <MainPage authorize={authorize}/>
        :
            <></>
    )
}

export default App;