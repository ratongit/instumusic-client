import { Helmet } from 'react-helmet';
import usefavorites from '../../Hooks/usefavorites';
import Mycard from '../MyCard/Mycard';


const Frovite = () => {

const [favorites,refetch]=usefavorites()

const hendleDelete = data =>{

    
const conform=confirm('Are You Sure to delete?')


if(conform){
    
            fetch(`https://instrument-server.vercel.app/favorites/${data._id}` ,
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




    
    return (
        <div  className="overflow-x-auto mt-10  w-full">
<Helmet>
                <title>Summer Camp || ALL CLASS</title>
            </Helmet>
<div className='text-center mx-auto'>
<Mycard></Mycard>
</div>
{
    favorites.map(data=>
        
        
        <table key={data._id} className="table mt-8 max-lg:mx-3   ">
        <thead className="bg-purple-600  bg-opacity-90 text-[15px] font-[10px] text-white">
            <tr>
                <th>Instrument-Img</th>
                <th>Instrument</th>
                <th>Teacher Img </th>
                <th>Teacher-Name </th>
                <th>Course Time</th>
                <th> Course Fee</th>
                <th>REMOVE
                </th>
            </tr>
        </thead>



        <tbody className="bg-pink-100 text-xl text-white">
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="  w-30 h-20 ">
                                <img className="rounded-3xl" src={data.instrumentImg} />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <h3 className="text-blue-500 text-xl">{data.instrumentName} </h3>

                </td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">

                            <div className="  w-30 h-20 ">
                                <img className="rounded-3xl" src={data.teacherImg} />
                            </div>

                        </div>
                    </div>
                </td>
                <td>
                    <div className="text-red-500 text-xl ">
                    <div className="font-bold">{data.teacherName} </div>
                        <div className="text-sm opacity-50">Exprence : {data.teacherRating} years</div>
                    </div>

                </td>



                <td className="font-semibold text-sky-500">{data.courseDuration}</td>
                <th>
                    <p className='text-blue-600'>${data.coursePrice}</p>
                </th>
                <th>
                    <label>
                        <button onClick={()=>hendleDelete(data)} className="btn btn-circle bg-red-500 text-white btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                    </label>
                </th>
            </tr>
        </tbody>

    </table>

        
        )
}



    </div>


    )

}

export default Frovite;