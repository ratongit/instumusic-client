import { useContext } from "react";
import { AuthContext } from "../Components/Prvider/authProvider/AuthProvider";
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useToken from "./useToken";


// import {  useEffect, useState } from "react";


const usefavorites = ()=>{
    
    const [token] = useToken()

    
    // console.log(" thus is  rrr new", token)
    
    const {user} = useContext(AuthContext)
    
    const {refetch,data:favorites=[]}=useQuery({
        
        queryKey:['favorites',user?.email],
        queryFn:async ()=>{
const res= await  fetch(`https://instrument-server.vercel.app/favorites?email=${user.email}`,{
    headers:{
        authorization:`bearer ${token}`
    }
})
return res.json()
} 
})

return[favorites,refetch]

}


export default usefavorites ;