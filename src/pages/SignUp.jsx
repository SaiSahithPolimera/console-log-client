import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import toast, { Toaster } from "react-hot-toast";


const SignUp = () => {
    const URL = import.meta.env.VITE_BASE_URL;
    const userNameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [errors, setErrors] = useState();
    const navigate = useNavigate();
    const signUpUser = async (e) => {
        e.preventDefault();
        const toastID = toast.loading("Signing-up");
        if (userNameRef.current.value && emailRef.current.value && passwordRef.current.value) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: userNameRef.current.value, email: emailRef.current.value, password: passwordRef.current.value })
            };
            fetch(`${URL}/sign-up`, requestOptions)
                .then(response => response.json())
                .then((res) => {
                    toast.dismiss(toastID);
                    if (res.errors) {
                        setErrors(res.errors)
                    }
                    if (res.message) {
                        setErrors([res]);
                    }
                    if (res.success === true) {
                        setErrors([]);
                        navigate("/login");
                    }
                })
                .catch((err) => { setErrors("Error occurred during sign-up"); console.error(err); toast.dismiss(toastID); });
        }
        else {
            toast.error("Please fill all the fields!", { duration: 3000 });
        }

    }

    return (
        <section className='min-h-screen flex lg:px-64 flex-col gap-2  items-center justify-center py-24 bg-black'>   <div className='flex flex-col gap-3'>
            <h1 className='text-white font-bold text-2xl self-center flex items-center gap-1'>Sign Up</h1>
            <form className='flex flex-col gap-3' method="POST">
                <input type="text" ref={userNameRef} autoComplete="username" name="username" placeholder='Username' className='px-3 py-2 border-2 border-slate-300 text-white bg-black rounded-md outline-none focus:border-green-500' />
                {
                    errors && errors.map((err) => {
                        if (err.message.toLowerCase().includes("username")) {
                            return <ErrorMessage message={err.message} key={err.message} />
                        }
                    })
                }
                <input type="email" ref={emailRef} name="email" autoComplete="email" placeholder='Email' className='px-3 py-2 border-2 border-slate-300 text-white bg-black rounded-md outline-none focus:border-green-500' />
                {
                    errors && errors.map((err) => {
                        if (err.message.toLowerCase().includes("email")) {
                            return <ErrorMessage message={err.message} key={err.message} />
                        }
                    })
                }
                <input autoComplete="new-password" ref={passwordRef} type="password" name="password" placeholder='Password' className='px-3 py-2 border-2 border-slate-300 text-white bg-black rounded-md outline-none focus:border-green-500' />
                {
                    errors && errors.map((err) => {
                        if (err.message.toLowerCase().includes("password")) {
                            return <ErrorMessage message={err.message} key={err.message} />
                        }
                    })
                }
                <button onClick={(e) => signUpUser(e)} className='px-3 py-1 bg-white text-black self-center rounded-md hover:bg-slate-300 ease-in-out duration-150'>Sign Up</button>
            </form>
        </div>
            <Toaster toastOptions={{ duration: 3000 }} />
            <span className="text-slate-300">Already have an account?<Link to="/login" className="font-bold"> Login here</Link></span>
        </section>
    );
}

export default SignUp;