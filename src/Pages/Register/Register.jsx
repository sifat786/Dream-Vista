import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useState } from "react";
import useAuth from './../../Hooks/useAuth';
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";


const Register = () => {

    const {createUser, setReload} = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const {name, email, image, password} = data;
        reset();

        //* create user:
        createUser(email, password)
         .then((res) => {
            // update profile:
            updateProfile(res.user, {
                displayName: name,
                photoURL: image
            })
             .then(() => {
                setReload(true);
                console.log('profile updated');
             })
             .catch(err => console.log(err))

             toast.success('Registration successfully done');
            setTimeout(() => {
                navigate('/')
            }, 3000);
         })
         .catch(() => {
            toast.error('Your email is already registered');
         })
         
    }

    return (
        <div>
            <Helmet>
                <title>Dream Vista | Register</title>
            </Helmet>
            

            <div className="text-center mt-5 md:mt-10 bg-green-50 py-8 md:py-10 lg:py-12 px-4 md:px-0 rounded-xl">

                <div className="card md:w-[80%] lg:w-[50%] mx-auto md:py-[50px] lg:px-[50px]">
                    <h4 className="text-center text-neutral-700 text-[35px] font-semibold">Register</h4>
                    <p className="pt-2 font-medium md:w-[500px] mx-auto text-gray-500 text-center text-sm md:text-base">Sign up today to find your dream home! Register for free to receive personalized property listings, updates, and expert advice.</p>
                    <hr className=" border-black border-opacity-15 my-[20px] md:my-[30px]"/>

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-center text-neutral-700 text-base md:text-xl font-semibold">Name</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter your name" 
                                className="input mb-2"
                                {...register("name")}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-center text-neutral-700 text-base md:text-xl font-semibold">Email Address</span>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="input mb-2"
                                {...register("email", { 
                                    required: {
                                        value: true,
                                        message: 'please enter your email address'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'invalid email address'
                                    }
                                })}
                            />
                            {errors.email && <span className="text-left text-red-600 font-medium">{errors.email.message}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-center text-neutral-700 text-base md:text-xl font-semibold">Photo URL</span>
                            </label>
                            <input 
                                type="url" 
                                placeholder="Enter your photo url" 
                                className="input mb-2"
                                {...register("image")}
                            />
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-center text-neutral-700 text-base md:text-xl font-semibold">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password' }
                                placeholder="Enter your password" 
                                className="input mt-1"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'please enter your password',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'password must be at least 6 characters'
                                    },
                                    validate: {
                                        oneUpperCase: (value) => /^(?=.*[A-Z]).{6,}$/.test(value) || 'password must be at least 1 uppercase letter',
                                        oneLowerCase : (value) => /^(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(value) || 'password must be at least 1 lowercase letter',
                                    }
                                })}
                            />
                            {errors.password && <span className="text-left text-red-600 font-medium">{errors.password.message}</span>}
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-[60px] right-5">
                                {
                                    showPassword ? <FaEye className="text-xl"/> : <FaEyeSlash className="text-xl"/>
                                }
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-green-700 w-full py-3 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Register</button>
                        </div>
                    </form>
                    <p className="text-neutral-500 text-base font-semibold text-center mt-[10px]">Already Have an Account ?
                    <Link to={`/login`} className="text-orange-600"> Login</Link></p>

                </div>

            </div>
        </div>
    );
};

export default Register;