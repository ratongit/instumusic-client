import { useForm } from "react-hook-form";
import {   useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import {  getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Swal from 'sweetalert2/dist/sweetalert2.js'



import app from "../../Components/Prvider/authProvider/FireBaseCom-fig/fireBase.Config";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
// import SocialLogIn from "../../Components/Shared/SocialLogIn/SocialLogIn";
const auth= getAuth(app)

const Login = () => {
    

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const [passwordVisible, setPasswordVisible] = useState(false);
    
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    
    const { register, handleSubmit,  formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data.email,data.Password,auth)
        
        const createUser=(email,password)=>{

            return signInWithEmailAndPassword(auth,email,password)
            
        }
    
        createUser(data.email,data.Password,auth)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser)


          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Congratulation Login successful", 
            showConfirmButton: false,
            timer: 1500
          })
          navigate(from,{replace:true})

        //   {            window.location.href = '/';
        //   }
               

        })    
      .catch(error => {
         alert( console.log(error))
      })    
    
        }

    return (


        <div>

<Helmet>
                <title>Summer Camp || Login</title>
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

                                    <h1 className='text-2xl text-center font-semibold'>LogIn</h1>
                                    <br />
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


                                    </div>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <div className="form-control mt-6">

                                        <button className="btn btn-primary"><input type="submit" value='Log In'></input></button>
                                    </div>

                                </form>
              {/* <SocialLogIn></SocialLogIn> */}

                                <a href='/register'>
                                    <button className="btn btn-active btn-link ">New user to InstruMusic? </button>
                                </a>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    );
}
export default Login


