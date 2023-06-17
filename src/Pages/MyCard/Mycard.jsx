import { Link } from "react-router-dom";
import usefavorites from "../../Hooks/usefavorites";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/Prvider/authProvider/AuthProvider";
// import ChackOutFrom from "../UserManu/Pay/ChackOutFrom";




const Mycard = () => {

    const {user} = useContext(AuthContext)

    console.log(user?.email)
        const [isAdmin, setAdmin] = useState(false)
    
    const [favorites]=usefavorites()

    if (user) {
        fetch(`https://instrument-server.vercel.app/user/admin/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }

const hendleClick=()=>{

if(!isAdmin){
    return window.location.href = '/dashboard/payment'
}else{
    alert("You Not Need to Pay"
    )
}
}

    // console.log('my favorites card data',favorites)
    const total= favorites.reduce((sum,item)=>item.coursePrice
    +sum,0)
    const totalCources= favorites.reduce((sum)=>1
    +sum,0
    )
    // console.log(totalCources)
    return (
        <div className="items-center mx-auto text-center">
{!isAdmin && <><h2 className="text-3xl text-blue-500 text-center">Total Favorites Courcess :{totalCources}</h2> 
           <h2 className="text-xl text-purple-700 text-center">Total Cost For Courcess : $  {total}</h2> 
<Link  >
           <button onClick={()=>hendleClick()} className="btn btn-outline btn-secondary btn-sm  text-center my-5 ">Pay Now</button>
           </Link>
           </> 
}


{
    isAdmin && <h2 className="text-5xl text-center text-blue-500 font-bold"> welcome to your Admin Panel</h2>
}        </div>
    );
};

export default Mycard;