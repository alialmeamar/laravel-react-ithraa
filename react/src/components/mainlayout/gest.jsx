
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const Gest = () => {
    const { token } = useStateContext();
    if (token) {
        return <Navigate to="/" />
    }
    return (
        <div>
            <h1>
                {/* Gest */}
            </h1>
            <Outlet />
        </div>



    );
}
export default Gest;
