import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Prvider/authProvider/AuthProvider";
import { useContext } from "react";

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
const location=useLocation()

if(loading){
    return <progress className="progress w-56 align text-center mt-56"></progress>
}

    if(user?.email){
return children;
    }
    return (
        <>
{        alert('Pleasc log in first !!!')
}        <Navigate to='/login' state={{from:location}} replace></Navigate> 
        </>
    );
};

export default PrivateRoutes;