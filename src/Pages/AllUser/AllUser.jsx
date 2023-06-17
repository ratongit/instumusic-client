import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import { useQuery } from "react-query";
import usefavorites from "../../Hooks/usefavorites";
import useAxiosSequre from "../../Hooks/useAxiosSequre";
import { Helmet } from "react-helmet";

const AllUser = () => {

const [refetch]=usefavorites()

const [axiosSecure]=useAxiosSequre()
    const {data : users =[]}= useQuery(['users'] , async() => {
const res = await axiosSecure.get('/users')
return  res.data;

})
//     const {data : users =[]}= useQuery(['users'] , async() => {
// const res = await  fetch('https://instrument-server.vercel.app/users')
// return  res.json();

// })


const hendledelete = data =>{

console.log(data)


const conform=confirm('Are You Sure to delete?')
if(conform){
    
            fetch(`https://instrument-server.vercel.app/user/delete/${data._id}` ,
            {method:'DELETE'
            }  )
            .then(res=>res.json())
            .then(data=>{
             if(data.deletedCount>0){
                 refetch()
             }
            })
        }
    }


const hendleMakeAdmin= userid =>{

fetch(`https://instrument-server.vercel.app/users/admin/${userid}`,{method:"PATCH" })
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.modifiedCount){
        refetch()
        alert('congrasulation admin makeing done.')
    
    
    }
})

}


    return (
<div>  
<Helmet>
                <title>Summer Camp || ALL Student</title>
            </Helmet>
    <h1 className="text-3xl text-blue-500 text-center">Total User Is : {users?.length}</h1>      
        {
            users.map(data=>
                
                
                <table key={data._id} className="table mt-8 max-lg:mx-3   ">
                <thead className="bg-purple-600  bg-opacity-90 text-[12px] font-[8px] text-white">
                    <tr>
                        <th>User Photo</th>
                        <th>User Name</th>
                        <th>User Email </th>
                        <th>User Role </th>
                        <th>Delete
                        </th>
                    </tr>
                </thead>
        
        
        
                <tbody className="bg-pink-100 text-xl text-white">
                    <tr>
                      


                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
        
                                    <div className="  w-30 h-20 ">
                                        <img className="rounded-3xl" src={data.photo} />
                                    </div>
        
                                </div>
                            </div>
                        </td>
                        <td>
                            <h3 className="text-blue-500 uppercase text-xl font-semibold">{data.name} </h3>
        
                        </td>



                        <td>
                            <div className="text-red-500 text-sm ">
                            <div className="font-sn">{data.email} </div>
                            </div>
                        </td>
        
        
        
                        <td className="font-semibold text-sky-500">
                        
                        {data.role==='admin'?"admin":
  <button onClick={()=>hendleMakeAdmin(data?._id)}  className="btn btn-square bg-blue-500 text-white btn-outline hover:bg-slate-400">
                        <FaUserShield></FaUserShield>
    </button>
            }            
                        
                        </td>
                        <th>
                            <label>
                                <button onClick={()=>hendledelete(data)}  className="btn btn-circle bg-red-500 text-white btn-outline">
                                  <FaTrashAlt></FaTrashAlt>
                                </button>
        
                            </label>
                        </th>
                    </tr>
                </tbody>
        
            </table>
        
                
                )
        }
        
        
        
            </div>
            );
};

export default AllUser;