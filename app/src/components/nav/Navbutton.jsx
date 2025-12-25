import { Link, useLocation } from "react-router-dom";
import { useUserStore } from "../../hooks/stores"

const Navbutton = ({children, roles = ["ADMIN", "KSIEGOWOSC", "SEKRETARIAT", "TEREN"], path = "/"}) => {

    const location = useLocation();
    const user = useUserStore((state) => state.user);

    return (
        roles.includes(user.role) ?
        <Link to={path} className={`${location.pathname === path ? "nav-btn-active" : "nav-btn"} text-center`}>{children}</Link>
        :
        <button className="nav-btn-disabled text-center">{children}</button>
    )
}

export default Navbutton;