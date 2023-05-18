import React, { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import Swal from 'sweetalert2'
import 'animate.css';


export const ForgotPassword = () => {
    const bg = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")'
    };

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: ""
    });

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const [errorMsg, setErrorMsg] = useState('');

    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = (e) => {
        e.preventDefault();
        if (!values.email) {
            setErrorMsg(() => {
                Swal.fire({
                    text: 'Fill out all the fields!',
                    icon: 'error',
                    width: 400,
                    position: 'top'
                })
            });

            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        sendPasswordResetEmail(auth, values.email)
            .then(() => {
                Toast.fire({
                    icon: 'success',
                    title: 'Password reset link send successfully !!!'
                })
                console.log("Password reset link send successfully !!!")
                navigate("/login");
            })
            .catch((error) => {
                console.log("Error: ", error)
            });
        //     signInWithEmailAndPassword(auth, values.email, values.pass).then(async (res) => {
        //         setSubmitButtonDisabled(false);
        //         const user = res.user;
        //         Toast.fire({
        //             icon: 'success',
        //             title: 'Signed in successfully'
        //         })
        //         navigate("/");
        //         console.log(user);
        //     }).catch(err => {
        //         setSubmitButtonDisabled(false);
        //         let msg = err.message;
        //         msg = msg.slice(22, msg.length - 2).toUpperCase()
        //         setErrorMsg(msg)
        //         setTimeout(() => {
        //             setErrorMsg('');
        //             console.log(err)
        //         }, 3000);
        //     })
    }

    return (
        <div>


            <div>
                <div className="bg-white dark:bg-gray-900">
                    <div className="flex justify-center h-screen">
                        <div className="hidden bg-cover lg:block lg:w-2/3" style={bg}>
                            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                                <div>
                                    <h2 className="text-4xl font-bold text-white">Developers Hub</h2>

                                    <p className="max-w-xl mt-3 text-gray-300">Life is hard enough already. Let us make it a little easier.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                            <div className="flex-1">
                                <div className="text-center">
                                    <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Forgot Password</h2>

                                    <p className="mt-3 text-gray-500 dark:text-gray-300">Enter your email to change password</p>
                                </div>

                                <div className="mt-8">
                                    <form>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                            <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
                                        </div>

                                        {errorMsg ? <div id='zoomOut' className='mt-6 animate__animated animate__zoomIn'>
                                            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                                                <div className="flex items-center justify-center w-12 bg-red-500">
                                                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                                                    </svg>
                                                </div>

                                                <div className="px-4 py-2 -mx-3">
                                                    <div className="mx-3">
                                                        <span className="font-semibold text-red-500 dark:text-red-400">Error:</span>
                                                        <p id="showError" className="text-sm text-gray-600 dark:text-gray-200">{errorMsg}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            : ''
                                        }
                                        <div className='mt-6'>
                                            <button
                                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50" disabled={submitButtonDisabled} onClick={handleSubmission} >
                                                Change Password
                                            </button>
                                        </div>

                                    </form>

                                    <p className="mt-6 text-sm text-center text-gray-400">Remembered your password?  <Link to="/login" className="text-blue-500 focus:outline-none focus:underline hover:underline">Login</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}
