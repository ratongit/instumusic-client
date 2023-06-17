import { Link} from "react-router-dom";
import useCourcess from "../../Hooks/useCourcess";
import { Helmet } from "react-helmet";


const CatagoryTeacher = () => {

    const [courcess]=useCourcess()

    


    return (
        <div>
        <Helmet>
                <title>Summer Camp || ALL TEACHER</title>
            </Helmet>

{/* <h1>hi</h1> */}
<div className="mt-10">

    {
        courcess.map(data=> <div key={data._id}>

<h1 className="text-center text-blue-600 text-3xl my-10 md:-mb-10 lg:text-4xl lg:mt-14 font-semibold">  {data.instrumentName} Teacher </h1>

<div className="hero min-h-screen  mt-0">
    <div className="hero-content max-md:block grid grid-flow-col grid-cols-2 mt-10">
        < img src={data.teacherImg} className=" w-full  h-96 rounded-lg shadow-2xl px-5" />
        <div >
            <div className="flex justify-between max-md:mt-5">
                <h1 className="text-2xl font-bold  text-blue-500">

                    Name : <span className="text-fuchsia-600">      {data.teacherName} </span>
                </h1>
            </div>
            <p className="py-6 text-red-400 text-xl font-semibold">Skills : {data.instrumentName} teacher </p>
            <p className="text-green-500 text-xl "> <span className="font-semibold">
                Discription :</span>
                <span className="text-lg ms-2 text-pink-600">

                    {data.teacherDescription}
                </span>
            </p>
            <p className="text-sky-600 m-5"><span className="font-semibold text-slate-600 text-xl -ms-4 ">Countract</span>
                <ul className="ms-10  py-3 ">

                    <li>Phone :+{data.coursePrice}{data.totalSets}8347692047</li>
                    <li>Email :  {data.teacherName}@gmail.com</li>
                </ul>


            </p>

            <div className="flex justify-around  mt-8">
<div>

                <p className=" text-red-600 text-lg font-semibold me-14 "> Total Student:</p>
</div>

                <Link to='/frovite'>

                    <button className="bg-sky-700 hover:bg-black btn border-none  text-white shadow-2xl shadow-black ">
                        <div>
                        Add On Your
                        <br />
                        frovite
                     Class list</div>
                   </button>
                </Link>
            </div>

        </div>
    </div>
</div>



        </div> )
    }
    </div>

        </div>
    );
};

export default CatagoryTeacher;