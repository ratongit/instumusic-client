import { useEffect, useState } from "react";

const useCourcess = ()=>{

    
const [courcess ,setCourcess]=useState([])
const [loading,setLoading]=useState(true)

useEffect(()=>{

    fetch('https://instrument-server.vercel.app/music')
    .then(res=>res.json())
    .then(data=>{
        
        setCourcess(data)
    setLoading(false)
    })

},[])
return[courcess,loading]

}


export default useCourcess ;