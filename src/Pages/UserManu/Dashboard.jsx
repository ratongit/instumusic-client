import { FaAddressCard, FaAlipay, FaBook, FaGuitar, FaHome, FaMusic, FaPodcast, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Navber from "../../Components/Shared/Navber/Navber";
import Footer from "../../Components/Shared/Fotter/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/Prvider/authProvider/AuthProvider";
import { Helmet } from "react-helmet";


const Dashboard = () => {

  //TODO:Load data

  const { user } = useContext(AuthContext)

  // console.log(user?.email)

  const [isAdmin, setAdmin] = useState(false)





  if (user) {
    fetch(`https://instrument-server.vercel.app/user/admin/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data.admin)


      })
  }




  // console.log(isAdmin)


  return (


    <>
    <Helmet>
                <title>Summer Camp || DASHBOARD</title>
            </Helmet>
      <div className="-mt-10">

        <Navber></Navber>
      </div>

      <div className="drawer lg:drawer-open mt-10 pt-20">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}



          <Outlet></Outlet>




          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side max-lg:mt-16 max-lg:pt-2">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            {
              isAdmin ?
                <>
                  <li><Link to='/'><FaHome></FaHome>Admin Home</Link></li>
                  <li> <Link to='/dashboard/addclass'><FaAddressCard></FaAddressCard> ADD A Class</Link></li>
                  <li> <Link to='/dashboard/postclass'><FaPodcast></FaPodcast>Your Posted Classes</Link></li>
                  <li> <Link to='/dashboard/allpostclass'><FaAlipay></FaAlipay>  All Posted Classes</Link></li>
                  <li> <Link to='/dashboard/frovite'><FaMusic></FaMusic> All Frovite</Link></li>
                  <li><Link to='/dashboard/allusers'><FaUsers></FaUsers> All Student </Link></li>
                  <li><Link to='/dashboard/Subceriber'><FaWallet></FaWallet> Courcs Holder</Link></li>

                </>
                :
                <>
                  <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                  <li><Link to='/cources'><FaGuitar></FaGuitar>  Courcess </Link></li>

                  <li> <Link to='/dashboard/frovite'><FaShoppingCart></FaShoppingCart>  My Favorite Classes</Link></li>
                  <li><Link to='/dashboard/Subceriber/class'><FaWallet></FaWallet> Payment History</Link></li>
                </>
            }


          </ul>

        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Dashboard;