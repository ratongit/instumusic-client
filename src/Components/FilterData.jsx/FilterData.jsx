import {  useEffect, useState } from "react";
import { AuthContext } from "../Components/Prvider/authProvider/AuthProvider";
import { useContext } from "react";










const FilterData = () => {
    const {user}=useContext(AuthContext)
    console.log("User  is usan jh new",user?.email)

    const [courcess ,setCourcess]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{



        fetch('https://instrument-server.vercel.app/favorites')
        .then(res=>res.json())
        .then(data=>{
            setCourcess(data)
            console.log('favroite data is its',data)
        setLoading(false)    
        })
    
    },[])    
    
    return[courcess,loading]
    
    }


export default FilterData;    

