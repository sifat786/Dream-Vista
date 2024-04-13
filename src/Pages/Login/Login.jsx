import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";



const Login = () => {

    const {loginUser, googleLogin, githubLogin} = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (data) => {
        const {email, password} = data;

        //* login:
        loginUser(email, password)
          .then(() => {
            toast.success('login successfully done');
            setTimeout(() => {
                navigate(location?.state ? location.state : '/');
            }, 3000);
          })
          .catch(() => {
            toast.error('your email or password is not matched!');
          })
    }

    //* google:
    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            toast.success('login with Google successfully done');
            setTimeout(() => {
                navigate(location?.state ? location.state : '/');
            }, 3000);
        })
        .catch(() => {
            toast.error('you are already logged in!');
        })
    }

    //* github:
    const handleGithubLogin = () => {
        githubLogin()
        .then(() => {
            toast.success('login with GitHub successfully done');
            setTimeout(() => {
                navigate(location?.state ? location.state : '/');
            }, 3000);
        })
        .catch(() => {
            toast.error('you are already logged in!');
        })
    }
    
    return (
        <div>
            <Helmet>
                <title>Dream Vista | Login</title>
            </Helmet>

            <div className="text-center mt-5 md:mt-10 bg-green-50 py-8 md:py-10 lg:py-12 px-4 md:px-0 rounded-xl">

                <div className="card md:w-[80%] lg:w-[50%] mx-auto md:py-[50px] lg:px-[50px]">
                    <h4 className="text-center text-neutral-700 text-[35px] font-semibold">Login</h4>
                    <p className="pt-2 font-medium md:w-[500px] mx-auto text-gray-500 text-center text-sm md:text-base">Login to your real estate account for property listings, saved searches, and personalized updates. </p>
                    <hr className=" border-black border-opacity-15 my-[20px] md:my-[30px]"/>

                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-center text-neutral-700 text-base md:text-xl font-semibold">Email Address</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter your email address" 
                                className="input mb-2"
                                {...register("email", { 
                                    required: {
                                        value: true,
                                        message: 'please enter your email address'
                                }})}
                            />
                            {errors.email && <span className="text-left text-red-600 font-medium">{errors.email.message}</span>}
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-center text-neutral-700 text-base md:text-xl font-semibold">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password' } 
                                name="password" 
                                placeholder="Enter your password" 
                                className="input mb-2"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'please enter your password',
                                }})}
                            />
                            {errors.password && <span className="text-left text-red-600 font-medium">{errors.password.message}</span>}
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-[60px] right-5">
                                {
                                    showPassword ? <FaEye className="text-xl"/> : <FaEyeSlash className="text-xl"/>
                                }
                            </span>
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="bg-green-700 w-full py-3 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Log In</button>
                        </div>

                    </form>
                    <p className="text-neutral-500 text-base font-semibold text-center">Dont’t Have An Account ?
                    <Link to={`/register`} className="text-orange-600"> Register</Link></p>
                        
                        <div className="divider mt-8 ">
                            <span className="font-medium  text-gray-500 text-sm md:text-base">Also login with</span>
                        </div>
                        <div className="flex items-center mx-auto gap-2 mt-2">
                            <div>
                                <button onClick={handleGoogleLogin} className="btn bg-black hover:bg-black md:text-xl text-white font-semibold">
                                    <FcGoogle/>
                                    Google
                                </button>
                            </div>
                            <div>
                                <button onClick={handleGithubLogin} className="btn bg-black hover:bg-black md:text-xl text-white font-semibold">
                                    <FaGithub/>
                                    GitHub
                                </button>
                            </div>
                        </div>

                </div>

            </div>
        </div>
    );
};

export default Login;