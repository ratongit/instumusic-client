import { Link } from "react-router-dom";
import './navber.css'
import { FaGratipay } from "react-icons/fa";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Prvider/authProvider/AuthProvider";
import usefavorites from "../../../Hooks/usefavorites";

const Navber = () => {

  const [favorites]=usefavorites()

  // console.log("favorites is ",favorites)


  const { user, logOut} = useContext(AuthContext)

// console.log("new user email" ,user
// )

  const hendleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error))
}



const navOptions=<>
        
        <li><Link to='/'>Home</Link></li>
        <li ><Link to='/cources'>Our Cources</Link></li>
        <li ><Link to='/frovite'>
<button className=" gap-2 ">
         <FaGratipay className="inline text-red-600 aligin"></FaGratipay> Frovite-Cources
<div className="badge badge-primary">{favorites?.length || 0}</div>

</button>
 </Link></li>


        <li ><Link to='/allteacher'> All Teacher</Link></li>




       { user?.email ?
        <>
<li className="flex   -mt-3  ">
<img className=" h-[70px] w-[75px] max-md:hidden rounded-[40px] " src={user?.photoURL} alt="" />
</li>
        <li>
<span className="-ms-8 font-semibold">{user?.displayName}</span>
</li>

<li ><Link to='/dashboard'>Profile</Link> </li>

<li onClick={hendleLogOut}><Link to='/'>LogOut</Link></li>
</>
: <div className="lg:flex">
    <li><Link to='/login'>Login</Link></li>
    <li><Link to='/register'>Register</Link></li>
</div>
}
</>

    return (
            
            <div className="navbar z-10 max-h-8  fixed fixedn max-w-7xl bg-sky-800 text-white  bg-opacity-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black  rounded-box bg-opacity-50 w-52">

{navOptions}

      </ul>


    </div>

    <div className="flex align gap-1">
      <div className="">
<img className="w-10 h-14 rounded-es-[70px] rounded-se-[60px] " src={logo} alt="" />
      </div>
    <a className="font-semibold text-xl"><span className="text-red-600 rounded-md px-2 bg-yellow-100 bg-opacity-60">Instru<span className="text-blue-600">Music</span></span> </a>
    </div>
  </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

{navOptions}
    </ul>
  </div>
</div>
    );
};

export default Navber;