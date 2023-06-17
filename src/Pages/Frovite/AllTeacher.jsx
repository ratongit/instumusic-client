// import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";
import useCourcess from "../../Hooks/useCourcess";
import { useContext } from "react";
import { AuthContext } from "../../Components/Prvider/authProvider/AuthProvider";
import { Helmet } from "react-helmet";

const AllTeacher = () => {

    const {user}=useContext(AuthContext)
    const [courcess]=useCourcess()
    console.log(courcess)

    if(user){
        courcess.map(data=>console.log(data))

    }



    return (
        < div className="hero min-h-screen mt-9" >
            <Helmet>
                <title>Summer Camp || ALL Teacher</title>
            </Helmet>
        {/* < div className="hero min-h-screen mt-6" style={{ backgroundImage: `url(${img})` }}> */}
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p className="mb-12 mx-auto text-center  text-3xl font-bold  text-yellow-200">Instrument Name
                        <br />
                        <span className="text-pink-300 text-5xl"> guiter</span> 
                         </p>
                        <p className="mb-1 font-bold text-2xl text-yellow-300 ">Teacher Name 
                        <br />
                        <span className="text-pink-300 text-3xl"> Teacher Name </span>
                        </p>
                        <p className="mb-9 font-bold text-xl text-gray-300 flex align justify-center  ">Rating :
                         <div className='flex text-yellow-300 ms-2 text-center'>
    
                                            {/* {stars.map((star) => (
                                                <FaStar key={star} />
                                            ))} 
     */}
                                        </div>
                        </p>
                        <p className="mb-5 text-lg text-green-400 font-semibold">Datials : </p>
                        <p className="mb-12 text-lg text-purple-400 font-bold">Price : $  Only</p>
                        {/* <Link to='/mytoy'> */}
                        
                        <Link to='/frovite'>
                        <button   className="btn hover:text-black text-white bg-sky-700">Add To Frovite list</button>
                        {/* <button  onClick={hendleBuyToy} className="btn bg-sky-700">Buy Now</button> */}
                        {/* </Link> */}
                        </Link>
                    </div>
                </div>
            </div>
        );
    
};

export default AllTeacher;