import { useEffect, useState } from "react";

const Popular = () => {

const [popular,setPopular]=useState([])
  useEffect(()=>{

    fetch('https://instrument-server.vercel.app/music')
    .then(res=>res.json())
    .then(data=>{
        
      setPopular(data)
      // console.log(data)
    })

},[])


const popularteacher=popular.slice(10, 15)

// console.log('this is popular ',  popularteacher)
    return (

        <div className="mb-5 -mt-24">
      <h1 className="my-5 text-blue-500 text-center text-3xl font-semibold"> Popular Teacher </h1>
        <div className="flex flex-row overflow-x-scroll gap-10">


{
  popularteacher.map(data=>
    <div key={data._id}>
    <div className="flex justify-center lg:grid-cols-3 max-sm:mt-10 " >
        
        
        <div className="card w-80 sm:w-96 lg:w-96 lg:ml-5 align-middle mb-5  shadow-xl sm:justify-center  ">
        
        <div className="h-60">
            <figure  >
                <img className="h-64 rounded-lg" src={data.teacherImg} alt="" />
            </figure>
        </div>
        <div className="card-body">
            <div className="flex justify-between align">
        
                <div>
                    <h1 className="text-orange-600 font-bold text-3xl">{data.instrumentName}</h1>
                </div>
               <div className="flex gap-3">

<img src={data.instrumentImg} className="w-[30px] h-[30px] rounded-3xl" alt="" />
                <p className="text-slate-600">
<small>Teacher : {data.teacherName} </small>
                </p>
               </div>
            </div>
            <p className="text-red-400 text-sm mt-2">Cource-Time : {data.courseDuration} </p>
            <h2 className="text-lg"><h1 className="text-white"></h1>
            </h2>
        

  {/* <button  className="btn bg-blue-600 px-7 text-white hover:bg-pink-500">Details</button> */}


                
                </div>
                </div>
            </div>
        </div>
  )
}
            
        </div>
        </div>
    );
};

export default Popular;