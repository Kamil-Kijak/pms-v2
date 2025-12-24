
import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import useApi from "./hooks/useApi";
import { useUserStore } from "./hooks/stores";


const App = () => {
    const {get} = useApi();
    const updateUser = useUserStore((state) => state.update);

    const [auth, setAuth] = useState(true);

    const authorize = () => {
        get("/api/users/auth", (res) => {
            updateUser(res.data.user)
            setAuth(true);
        }, (err) => {
            if(err.unauthorized) {
                setAuth(false);
            }
        })
    }
    useEffect(() => {
        authorize()
    }, []);
    return (
        auth ? <h1>Dashboard</h1> : <MainPage authorize={authorize}/>
    )
}

export default App;