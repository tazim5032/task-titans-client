import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if(loading)  return <div className="flex items-center justify-center"><div className="h-[400px] w-1/2 flex items-center justify-center"><span className="loading loading-bars loading-lg"></span></div></div>
    if(user) return children;

    return <Navigate to='/login' state={location?.pathname || '/'} replace={true}></Navigate> 
    //location.pathname kon page theke login page e asci ta show korar jonno..login korar por abar oi page e nie jabe
};

export default PrivateRoute;