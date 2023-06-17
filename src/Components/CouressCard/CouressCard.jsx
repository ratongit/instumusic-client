import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Prvider/authProvider/AuthProvider";
const CouressCard = ({item}) => {


    const {instrumentName,instrumentImg,coursePrice,totalSets,teacherRating,courseDuration,teacherName,teacherImg,_id}=item
    
    
    const {user,userEmail}=useContext(AuthContext)

    const hendleAdd=itemadd=>{
        // console.log(itemadd ,'email is ',userEmail)

if(user && userEmail){

const favoriteClass={favorite: _id,email: userEmail , instrumentName,instrumentImg,coursePrice,teacherRating,courseDuration,teacherName,teacherImg}




   fetch('https://instrument-server.vercel.app/favorites',{
    method: "POST",
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify(favoriteClass)
   }) 
   .then(res=>res.json())
   .then(data=>{
    if(data.insertedId){

      alert('success to add')  
    }
   })
}
else{
    alert('login first')
    Navigate('/login')
}


//  new  code start  

fetch(`https://instrument-server.vercel.app/users/favorites/${_id}`,{method:"PATCH" })
console.log(_id)
.then(res=>res.json())
.then(data=>{
    console.log( 'i want the data sets' ,data)
    if(data.modifiedCount){
        alert('congrasulation you book a set.')
    


    }
})

//    //  new  code start  







    }
   
    return (
        < div className="mt-4">
        
        <div className="grid grid-flow-row md:grid-cols-2 gap-4 justify-center lg:grid-cols-3 " >
        
        
        <div className="card w-80 sm:w-96 lg:w-96 lg:ml-5 align-middle   shadow-xl sm:justify-center shadow-blue-900 ">
        
        <div className="h-60">
            <figure  >
                <img className="h-64 rounded-lg" src={instrumentImg} alt="" />
            </figure>
        </div>
        <div className="card-body">
            <div className="flex justify-between align">
        
                <div>
                    <h1 className="text-orange-600 font-bold text-3xl">{instrumentName}</h1>
                </div>
               <div className="flex gap-3">

<img src={teacherImg} className="w-[30px] h-[30px] rounded-3xl" alt="" />
                <p className="text-slate-600">
<small>Teacher : {teacherName} </small>
                </p>
               </div>
            </div>
            <p className="text-red-400 text-sm mt-2">Cource-Time : {courseDuration} </p>
            <h2 className="text-lg"><h1 className="text-white"></h1>
            </h2>
        
        <div className="flex justify-between my-3">

            <div className="card-actions flex justify-end">
                <p className=" text-md font-semibold text-purple-800">Total sets:
                      50
                </p></div>
            <div className="card-actions flex justify-end">
            { totalSets === 0 ? <p className=" text-md font-semibold text-red-600">
                    Available sets:
                      {totalSets}
                </p>
     :  <p className=" text-md font-semibold text-green-600">
                    Available sets:
                      {totalSets}
                </p>
}
                </div>
        
        </div>
            <div className="card-actions flex justify-start mt-3">
                <p className=" text-md font-semibold text-gray-600">Couress Fee:
                     $ {coursePrice}
                </p>


                {/* <Link >
                    <button onClick={()=>hendleAdd(item)} className="btn bg-blue-600 px-7 text-white hover:bg-pink-500">Details</button>
                </Link> */}

{/* //new code // */}
{ totalSets === 0 ?<button disabled className="btn bg-blue-600 px-7 text-white opacity-100 disabled:bg-red-300 disabled:text-white cursor-not-allowed">
      Details
    </button>:  <button onClick={()=>hendleAdd(item)} className="btn bg-blue-600 px-7 text-white hover:bg-pink-500">Add Frovite <br /> list</button>
}
{/* //new code // */}


                
                </div>
            </div>
        </div>
        </div>
        
        
        
                </div>
        
        
    );
};

export default CouressCard;