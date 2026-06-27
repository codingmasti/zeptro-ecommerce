import { useAuth } from "@clerk/react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children}) =>{
    const {isLoaded, isSignedIn} = useAuth()

    if(!isLoaded){
        return <div>Loading...</div>
    }

    return isSignedIn ? children : <Navigate to="/sign-in" replace />;
 }

 export default ProtectedRoutes;