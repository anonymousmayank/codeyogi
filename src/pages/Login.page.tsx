import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { HiLockClosed } from 'react-icons/hi';
import { FaSpinner } from 'react-icons/fa';

interface Props {

}

const LoginPage: React.FC<Props> = () => {

    const [data, setData] = useState({ email: 'mayankeshmishra100@gmail.com', password: '' });
    const [touchedState, setTouchedState] = useState({ email: false, password: false });
    const [submitting, setSubmitting] = useState(false);
    const history = useHistory();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setTouchedState({ ...touchedState, [event.target.name]: true });

    }

    let emailError = '';

    if (!data.email) {
        emailError = 'E-mail is required';
    }
    else if (!data.email.endsWith('@gmail.com')) {
        emailError = 'Please Enter a valid email address';
    }

    let passwordError = '';
    if (!data.password) {
        passwordError = 'Please Enter a password';
    }
    else if (data.password.length < 8) {
        passwordError = 'Password should be atleast 8 charecters';
    }

    return (
        <div className="min-h-screen flex items-center justify-center flex-1 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or
                        <Link to='/signup' className="font-medium text-indigo-600 hover:text-indigo-500">
                            start your 14-day free trial
                        </Link>
                    </p>
                </div>


                <form className="mt-8 space-y-6" onSubmit={(event) => {
                    event.preventDefault();
                    if (emailError || passwordError) {
                        console.log(emailError, passwordError);
                        return;
                    }
                    setSubmitting(true);
                    console.log(data);
                    setTimeout(
                        () => {
                            setSubmitting(false);
                            history.push('/dashboard');
                        }, 5000)

                }}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" value={data.email} onBlur={(event) => handleBlur(event)} onChange={(event) => handleChange(event)} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        {touchedState.email && emailError}
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" value={data.password} onBlur={(event) => handleBlur(event)} onChange={(event) => handleChange(event)} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                        {touchedState.password && passwordError}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link to='/forgot-password' className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            disabled={(!touchedState.email || !touchedState.password || emailError!='' || passwordError!='')?true:false
                        }
                            type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                            <HiLockClosed></HiLockClosed>
                        </span>
                        Sign in
                            </button>
                    {submitting && <FaSpinner className='animate-spin mt-5' />}
                        </div>
                </form>
        </div>
        </div >
    );
}

export default React.memo(LoginPage);