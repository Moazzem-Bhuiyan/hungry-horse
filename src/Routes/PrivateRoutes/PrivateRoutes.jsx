import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";





const PrivateRoutes = ({children}) => {
    const location =useLocation()
    const {user,loading}=useContext(AuthContext)


        if (loading){

            return <p>Loading</p>
        }


    if(user){
        return children
    }



    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;