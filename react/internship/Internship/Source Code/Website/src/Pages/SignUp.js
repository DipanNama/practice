import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export const SignUp = () => {
    const bg = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")'
    };
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
        repeatPass: ""
    });
    const [errorMsg, setErrorMsg] = useState("");

    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const provider = new GoogleAuthProvider();
    const googleSignup = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log("Successful Login of the user : ", user.displayName)
            }).catch((error) => {
                console.log("Error : ", error)
            });
    }

    const handleSubmission = () => {
        if (!values.name || !values.email || !values.pass || !values.repeatPass) {
            setErrorMsg("Fill Out All Fields")
            return;
        }
        if (values.pass !== values.repeatPass) {
            setErrorMsg("Both passwords are not same !")
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.pass).then(async (res) => {
            setSubmitButtonDisabled(false);
            const user = res.user;
            await updateProfile(user, {
                displayName: values.name,
            });

            sendEmailVerification(auth.currentUser).then(() => {
                console.log("Email sent successfully");
            });
            
            navigate("/");
            console.log(user);
        }).catch(err => {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
            console.log(err);
        })
    }

    const disableRefresh = (e) => {
        e.preventDefault();
    }

    return (
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
                                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Sign Up</h2>

                                <Link to="/" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <div className="px-4 py-2">
                                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                        </svg>
                                    </div>

                                    <span className="w-5/6 px-4 py-3 font-bold text-center"><button onClick={googleSignup}>Sign Up with Google</button></span>
                                </Link>

                                <div className="flex items-center justify-between mt-4">
                                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                                    <Link to="/" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">Signup with email</Link>

                                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                                </div>
                            </div>

                            <div className="mt-3">
                                <form onSubmit={disableRefresh}>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Name</label>
                                        <input type="text" name="username" id="name" placeholder="Enter Your Name" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200 mt-3">Email Address</label>
                                        <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
                                    </div>

                                    <div className="mt-3">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        </div>

                                        <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} />
                                    </div>

                                    <div className="mt-3">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="repeatPassword" className="text-sm text-gray-600 dark:text-gray-200">Repeat Password</label>
                                        </div>

                                        <input type="password" name="repeatPassword" id="repeatPassword" placeholder="Repeat Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(event) => setValues((prev) => ({ ...prev, repeatPass: event.target.value }))} />
                                    </div>

                                    <div className="flex items-start mt-5 mb-6">
                                        <div className="flex items-center h-5">
                                            <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <Link to="/terms_and_conditions" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</Link></label>
                                    </div>

                                    {errorMsg ? <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                                        <div className="flex items-center justify-center w-12 bg-red-500">
                                            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                                            </svg>
                                        </div>

                                        <div className="px-4 py-2 -mx-3">
                                            <div className="mx-3">
                                                <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
                                                <p className="text-sm text-gray-600 dark:text-gray-200">{errorMsg}</p>
                                            </div>
                                        </div>
                                    </div> : ""
                                    }

                                    <div className="mt-6">
                                        <button
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50" disabled={submitButtonDisabled} onClick={handleSubmission} >
                                            Sign Up
                                        </button>
                                    </div>

                                </form>

                                <p className="mt-6 text-sm text-center text-gray-400">Already have an account? <Link to="/login" className="text-blue-500 focus:outline-none focus:underline hover:underline">Log in</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
