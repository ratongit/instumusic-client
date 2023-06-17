import { useContext } from "react";
import { AuthContext } from "../Components/Prvider/authProvider/AuthProvider";
import useAxiosSequre from "./useAxiosSequre";
import { useQuery } from "react-query";

const useAdmin = () => {
    
    
    const  {user} = useContext(AuthContext)
    const  {userEmail} = useContext(AuthContext)
    console.log( "user email is", userEmail)

    const [axiosSecure]=useAxiosSequre()
    const {data}=useQuery({
        
        querykry:[ 'isAdmin' , user?.email],
        queryFn: async ()=>{
            const responcs =await axiosSecure.get(`/users/admin/${userEmail}`)
            console.log(" admin confromation chick",responcs) 
return responcs.data.admin
}
})

return [ data]
};

export default useAdmin;