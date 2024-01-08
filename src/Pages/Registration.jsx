import { useEffect } from 'react';
import bgImg from '../assets/others/authentication.png';
import authenticationImg from '../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha'
import { useForm } from "react-hook-form"
import './Login.css';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';


const Registration = () => {
    const { signup } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()

    const form = location.state?.from?.pathname || '/';
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (!validateCaptcha(data.captcha)) {
            Swal.fire({
                icon: "error",
                title: "Sorry",
                text: "Write Valid Captcha"
            });
            return;
        }
        console.log(data)
        signup(data.email,data.password)
        .then(result=>{
            const user = result.user;
            Swal.fire({
                icon: "success",
                title: "Login Successfully"
            });
            navigate(form, { replace: true })
        })
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    return (
        <div className='login-bg flex justify-center items-center'>
            <Helmet><title>Fudo | Registration</title></Helmet>
            <div style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }} className={`bg-[url('${bgImg}')] w-10/12 mx-auto shadow-lg flex flex-row-reverse justify-around items-center py-5`}>
                <div className='basis-1/2'>
                    <img className='w-full' src={authenticationImg} alt="" />
                </div>
                <div className='basis-1/2 flex justify-around'>
                    <div className="card h-full lg:w-2/3 md:w-full">
                        <h1 className='text-center font-bold text-2xl'>REGISTRATION</h1>
                        <form className="card-body p-0" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                                {
                                    errors.name?.type === "required" &&
                                    (<p role="alert" className='text-red-600'>Name is required</p>)
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {
                                    errors.name?.type === "required" &&
                                    (<p role="alert" className='text-red-600'>Email is required</p>)
                                }

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    pattern: /(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}/
                                })} placeholder="password" className="input input-bordered" required />
                                {
                                    errors.password?.type === "required" &&
                                    (<p role="alert" className='text-red-600'>Password is required</p>)
                                }
                                {
                                    errors.password?.type === "pattern" &&
                                    (<p role="alert" className='text-red-600'>Password must have 1 lowercase 1 special character 1 number</p>)
                                }
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <LoadCanvasTemplate />
                                <input {...register("captcha")} type="text" placeholder="Write above text" className="input input-bordered mt-3" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-[#D1A054] text-white hover:bg-[#ac7f3c]">Registration</button>
                            </div>
                        </form>
                        <p className='mt-3 text-[#D1A054]'>Already have an account? Go to <Link className='text-blue-500 hover:underline' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;