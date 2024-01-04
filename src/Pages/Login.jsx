import { useEffect } from 'react';
import bgImg from '../assets/others/authentication.png';
import authenticationImg from '../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha'
import './Login.css';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const Login = () => {
    const { login } = useAuth();


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        const captcha = from.captcha.value;
        if (!validateCaptcha(captcha)) {
            Swal.fire({
                icon: "error",
                title: "Sorry",
                text: "Write Valid Captcha"
            });
        }
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })

    }

    return (
        <div className='login-bg flex justify-center items-center'>
            <Helmet><title>Fudo | Login</title></Helmet>
            <div style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }} className={`bg-[url('${bgImg}')] w-10/12 mx-auto shadow-lg flex justify-around items-center py-8 px-5`}>
                <div className='basis-1/2'>
                    <img className='w-full' src={authenticationImg} alt="" />
                </div>
                <div className='basis-1/2 flex justify-around'>
                    <div className="card h-full lg:w-2/3 md:w-full ">
                        <h1 className='text-center font-bold text-2xl'>LOGIN</h1>
                        <form className="card-body p-0" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <LoadCanvasTemplate />
                                <input name='captcha' type="text" placeholder="Write above text" className="input input-bordered mt-3" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-[#D1A054] text-white hover:bg-[#ac7f3c]">Login</button>
                            </div>
                        </form>
                        <p className='mt-3 text-[#D1A054] '>New here? <Link className='hover:underline text-blue-500' to='/registration'>Create a New Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;