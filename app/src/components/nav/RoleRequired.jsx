import { Navigate } from "react-router-dom";
import { useUserStore } from "../../hooks/stores";

const RoleRequired = ({children, roles=["ADMIN", "KSIEGOWOSC", "SEKRETARIAT", "TEREN"]}) => {

    const user = useUserStore((state) => state.user);

    return (
        roles.includes(user.role) ? children : <Navigate to={"/"} replace/>
    )
}

export default RoleRequired;