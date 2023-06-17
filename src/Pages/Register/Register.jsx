import { useForm } from "react-hook-form";
import {   useContext, useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Swal from 'sweetalert2'


import app from "../../Components/Prvider/authProvider/FireBaseCom-fig/fireBase.Config";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/Prvider/authProvider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet";

const auth= getAuth(app)

const Register = () => {
    
    const navigate = useNavigate()
    const location = useLocation()

const {updateUseProfite} = useContext(AuthContext)

    const from = location.state?.from?.pathname || '/';


    const [passwordVisible, setPasswordVisible] = useState(false);
    
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    
    const { register, handleSubmit,  formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data.name,data.photo,data.email,data.Password,auth)
        
        const createUser=(email,password)=>{

            return createUserWithEmailAndPassword(auth,email,password)
            
        }
    
        createUser(data.email,data.Password,auth)
        .then(result => {

          const loggedUser = result.user;
          
          const saveUserProfile = {name: data.name,photo:data.photo,email: data.email}
        
          console.log(saveUserProfile)

          updateUseProfite(data.name,data.photo)
          .then(()=>{
              
              const saveUser = {name: data.name,photo:data.photo,email: data.email}
              console.log(saveUser)

fetch('https://instrument-server.vercel.app/users',{
    method:'POST',
    headers: {
        'content-type':"application/json"
    },
    body:JSON.stringify(saveUserProfile)
})
.then(res=>res.json())
.then (data=>{
    if(data.insertedId){

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: "Congratulation Registation successful",          
          showConfirmButton: false,
          timer: 1500
        })

        // new
        
        navigate(from,{replace:true})
    
    }
})

})
.catch((error)=>{
console.log(error)
})
                  
          
      })
      .catch(error=>{
          alert(`Via  Error :      : ${error}`)
          console.log(error)}
          )  
    
        }

    return (


        <div>

<Helmet>
                <title>Summer Camp || REGISTER</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col md:flex-row-reverse gap-20">
                    <div className="text-center md:text-left max-md:hidden xsm:hidden">
                        <img src="https://youthed.org.za/wp-content/uploads/2022/10/login-users.png" alt="" className="lg:w-9/12" />



                    </div>

                    <div className="login-card d-inline" >
                        <div className="hero min-h-screen ">
                            <div className="hero-content block">

                                < form onSubmit={handleSubmit(onSubmit)} className="card-body text-black bg-gradient-to-b from-cyan-300 to-sky-500  bg-opacity-50   w-[380px] align-middle  text-lg rounded-lg">

                                    <h1 className='text-2xl text-center font-semibold'>Register</h1>
                                    <br />
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text ">Name</span>
                                        </label>
                                        <input
                                            style={{ textAlign: 'center' }}
                                            placeholder="Your Name"  {...register("name")} />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text ">Photo</span>
                                        </label>
                                        <input style={{ textAlign: 'center' }} placeholder="Enter Photo URL" type="text" {...register("photo")} />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text ">Email</span>
                                        </label>
                                        <input style={{ textAlign: 'center' }} placeholder="Enter Your Email" type="email" {...register("email", { required: true })} />


                                        <div >

                                            {errors.email && <small className="text-red-600 font-sans -mb-4 "> <span className="font-extrabold  text-red-600 -mb-4">!!! </span>Email is requard</small>}
                                        </div>
                                    </div>
                                    <div >
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text ">Password</span>
                                            </label>



                                            {/* passWord Makeing Strong  proceess */}


                                            <input id="password" name="password" aria-label="toggle password visibility"
                                                type={passwordVisible ? 'text' : 'password'}

                                                style={{ textAlign: 'center' }}
                                                placeholder="Enter a Strong Password"

                                                {...register("Password",
                                                    {
                                                        required: true,
                                                        maxLength: 15,
                                                        minLength: 6,
                                                        pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/
                                                    })}
                                            />
                                            <span className="-mb-6 mx-p mt-2" >
                                                <button className="items-center relative float-right"
                                                    aria-label="toggle password visibility"
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                                                </button>
                                            </span>




                                            {errors.Password?.type === "maxLength" && <small className="text-red-600 font-sans "> <span className="font-extrabold text-red-600">!!! </span>Password must be less then 15 crcteare</small>}
                                            {errors.Password?.type === "minLength" && <small className="text-red-600 font-sans "><span className="font-extrabold text-red-600">!!! </span> Password must be mimiam 6 crcteare</small>}
                                            {errors.Password?.type === "pattern" && <small className="text-red-600 font-sans "><span className="font-extrabold text-red-600">!!! </span> Password must be 1Upper case 1 lower case and 1 spcial crcteare</small>}



                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text ">Confirm Password</span>
                                            </label>
                                            <input name="confirm"
                                                style={{ textAlign: 'center' }}
                                                placeholder="Enter a Strong Password" type="password" {...register("Confirm")}
                                            />

                                        </div>

                                    </div>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <div className="form-control mt-6">

                                        <button className="btn btn-primary"><input type="submit" value='Sing Up'></input></button>
                                    </div>


                                </form>

                                <a href='/login'>
                                    <div className="btn btn-active btn-link 
                                    ">Alrady Have An Account? </div>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    );
}
export default Register


