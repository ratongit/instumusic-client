import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const PostedClass = () => {

    const { user } = useAuth()
    const [isAdmin, setAdmin] = useState(false)
    const [post, setPost] = useState([])
    // const [postedclasses, setPostedclass] = useState([])


    if (user) {
        fetch(`https://instrument-server.vercel.app/user/admin/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }


    if (isAdmin) {

        fetch('https://instrument-server.vercel.app/postclass')
            .then(res => res.json())
            .then(data => {
                setPost(data)
                console.log('post data is',data)
            })

    }

    const postedclass = post.filter(item=>item.email
        ===user?.email)
        // console.log(  'sub class is',postedclass)
        // console.log(post)





    return (
        <div className="my-5 text-center">
            <h1 className="mb-3 text-blue-600 text-center font-semibold text-3xl">Your Posted Class</h1>
            {
                postedclass.map(data => <div key={data._id}>

                    <div className="grid  grid-cols-2  grid-flow-col gap-4 justify-center lg:grid-cols-3 " >


                        <div className="card w-80 sm:w-96 lg:w-96 lg:ml-5 align-middle my-5  shadow border-2 sm:justify-center shadow-blue-900 ">

                            <div className="h-60">
                                <figure  >
                                    <img className="h-64 rounded-lg" src={data.instrumentImg} alt="" />
                                </figure>
                            </div>
                            <div className="card-body">
                                <div className="flex justify-between align">

                                    <div>
                                        <h1 className="text-orange-600 font-bold text-3xl">{data.instrumentName}</h1>
                                    </div>
                            
                                </div>
                                <p className="text-red-400 text-sm mt-2">Cource-Time : {data.courseDuration} </p>
                                <h2 className="text-lg"><h1 className="text-white"></h1>
                                </h2>

                                <div className="flex justify-between my-3">

                                    <div className="card-actions flex justify-end">
                                        <p className=" text-md font-semibold text-purple-800">Total sets:
                                            50
                                        </p></div>
                                    <div className="card-actions flex justify-end">
                                        {data.totalSets === 0 ? <p className=" text-md font-semibold text-red-600">
                                            Available sets:
                                            {data.totalSets}
                                        </p>
                                            : <p className=" text-md font-semibold text-green-600">
                                                Available sets:
                                                {data.totalSets}
                                            </p>
                                        }
                                    </div>

                                </div>
                                <div className="card-actions flex justify-between mt-3">
                                    <p className=" text-md font-semibold text-gray-600">Couress Fee:
                                        $ {data.coursePrice}
                                    </p>
                                    <p className=" text-md font-semibold text-gray-400">Status:
                                        Pandding
                                    </p>


                                </div>
                            </div>
                        </div>
                    </div>





                </div>
                )
            }


        </div>
    );
};

export default PostedClass;