import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Holder = () => {

const {user}=useAuth()
const email= user?.email

const [allData,setAllData]=useState([])
    useEffect(()=>{

        fetch('https://instrument-server.vercel.app/couseholder')
        .then(res=>res.json())
        .then(allData=>{
            
        //    console.log(allData)
           setAllData(allData)
        })
    
    },[email])
    
    const SUBCLASS = allData.filter(item=>item.payment.email
        ===email)
    // console.log(  'sub class is',SUBCLASS)


    return (
        <div className="mt-14 mb-5">
            <h2 className="text-blue-500 uppercase text-5xl text-center"> YOUR PAYMENT HISTORY </h2>
{
    SUBCLASS.map(data=> 

<table key={data._id} className="table mt-8 max-lg:mx-3   ">
        <thead className="bg-gray-500  bg-opacity-90 text-[15px] font-[10px] text-white">
            <tr>
                <th>Subscriber name</th>
                <th>Subscriber email </th>
                <th>Payment Amount </th>
                <th>Subscribe Class Number</th>
                <th>TNX ID</th>
                
            </tr>
        </thead>



        <tbody className="bg-pink-100 text-xl text-white">
            <tr>
                <td>
                    <h3 className="text-blue-500 text-xl">{data.payment.name} </h3>

                </td>
                <td>
                <h3 className="text-blue-500 text-md">{data.payment.email} </h3>
                </td>
                <td>
                    <div className="text-red-500 text-xl ">
                    <div className="font-bold">{data.teacherName} </div>
                        <div className="text-lg font-bold ">$ {data.payment.Amount
}</div>
                    </div>

                </td>
                <th>
                    <p className='text-blue-600'>{data.payment.quantity}</p>
                </th>



                <td className="font-semibold font-sans text-sm text-yellow-500">{data.payment.transactionId}</td>
            </tr>
        </tbody>

    </table>



   )
}


        </div>
    );
};

export default Holder;