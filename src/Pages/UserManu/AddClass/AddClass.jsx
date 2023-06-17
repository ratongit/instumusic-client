import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet";

const imgHostingAPI=import.meta.env.VITE_IMG

// console.log('hosting key is ',imgHostingAPI)

const AddClass = () => {

    const { user } = useAuth()

    const { register, handleSubmit, formState: { error } } = useForm()


    const imgHostingUrl= `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostingAPI}`

    const onSubmit = data =>{ 
        // console.log(user?.email)
        // console.log(error)
        

        const addClass={
            instrumentName:data.instrumentName,
            teacherName:data.teacherName,
            email:user?.email,
            courseDuration:data.courseDuration,
            instrumentImg:data.instrumentImg,
            teacherImg:data.teacherImg,
            teacherDescription:data.teacherDescription,
            teacherRating:data.teacherRating,
            coursePrice:data.coursePrice,
            totalSets:data.Sets,
            role:data.role,
        }
        // console.log("new class is ",addClass)

   fetch('https://instrument-server.vercel.app/addclass',{
    method: "POST",
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify(addClass)
   }) 
   .then(res=>res.json())
   .then(data=>{
    if(data.insertedId){

      alert('success to post a class ')  
    }
})
        
        
        
}

    return (
        <div>
            <Helmet>
                <title>Summer Camp || ADD A CLASS</title>
            </Helmet>
            <h2 className="text-3xl text-blue-500 text-center mt-10">Add A New class </h2>

            <form onSubmit={handleSubmit(onSubmit)} >

                <div className="form-control w-full items-center ">
                    <label className="label">
                    </label>
                    <div className="flex gap-5 justify-start items-start">
                        <div className="flex flex-col gap-2">
                            <span className="label-text text-purple-800 font-semibold ">Instrument name?</span>
                            <input type="text" placeholder="Type Instrument name" {...register('instrumentName')} className="input input-bordered sm:w-[320px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="label-text text-purple-800 font-semibold ">Instuctor name?</span>
                            < input type="text" {...register('teacherName')} placeholder={user?.displayName} className="input input-bordered md:w-[320px]" value={user?.displayName} />
                        </div>
                    </div>
                    <div className="flex mt-5 gap-5 justify-start items-start">
                        <div className="flex flex-col gap-2">
                            <span className="label-text text-purple-800 font-semibold ">Instrument Photo</span>
                            <input type="text" {...register('instrumentImg')} placeholder="Type Instrument photo url" className="input input-bordered md:w-[320px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="label-text text-purple-800 font-semibold ">Instuctor Photo?</span>
                            <input type="text" {...register('teacherImg')} placeholder={user?.photoURL} className="input input-bordered md:w-[320px]" />
                        </div>
                    </div>
                    <br />

                    <div className="flex flex-col  gap-2">
                        <span className="label-text text-purple-800 text-center font-semibold ">Details about the coucess</span>
                        <input type="text"{...register('teacherDescription')} placeholder='Details About the couress' className="input input-bordered w-[450px] sm:w-[600px] md:w-[670px] h-[92px]" />
                    </div>
                    <br />
                    <div className="flex gap-5 flex-wrap">
                        <div className="flex flex-col gap-2">
                            <span className="label-text text-purple-800 font-semibold ">Course Duration?</span>
                            <input type="text" {...register('courseDuration')} placeholder="Type Instrument name" className="input input-bordered " />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="label-text text-purple-800 font-semibold ">course Price</span>
                            <input type="number" {...register('coursePrice')} placeholder='Total cost for the class' className="input input-bordered " />
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="label-text text-purple-800 font-semibold ">Total Sets</span>
                            <input type="number" {...register('Sets')} placeholder='Total student are allow of class' className="input input-bordered " />
                        </div>
                        <div className="flex  flex-col gap-2">
                            <div className="hidden">
                            <span className="label-text text-purple-800 font-semibold ">Total Sets</span>
                            <input value="1" type="number" {...register('teacherRating')} placeholder='Total student are allow of class' className="input input-bordered " />
                        </div>
                            </div>
                        <div className="flex  flex-col gap-2">
                            <div className="hidden">
                            <span className="label-text text-purple-800 font-semibold ">Total role</span>
                            <input value="teacher" type="text" {...register('role')} placeholder='Total student are allow of class' className="input input-bordered " />
                        </div>
                            </div>

                    </div>

                 

<div className="flex mt-5 align">   
<div>

<span className="text-blue-500 font-semibold  items-center">Instrument photo : </span>
</div>
<div>
<input type="file"  {...register('image')} className="file-input file-input-bordered w-full max-w-xs ms-3 " /></div>
</div>

                    <label className="label">


                        <input className="btn mt-6 bg-pink-700 text-white mx-auto w-[420px] sm:w-[580px] md:w-[650px]  hover:bg-black" type="submit" value='Add Now' />

                    </label>
                </div>



            </form>



        </div>
    );
};

export default AddClass;