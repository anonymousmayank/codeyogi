import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Switch, Transition } from '@headlessui/react';
import { HiLockClosed, HiCheck } from 'react-icons/hi';
import { FaSpinner, FaCheck } from 'react-icons/fa';
import { FiUser, FiLock } from 'react-icons/fi';
import {BiCheck} from 'react-icons/bi';

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

    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember]=useState(false);

    return (
        <div className='w-1/2'>
        <div className="h-screen flex-1 text-accent tracking-wide">
            <div className="font-primary-300 box-content py-3 px-11 w-3/5 m-auto">
                <div className='mb-13'>
                    <h2 className="text-4.5xl mb-2 ">
                        Log In to <span className="font-semibold text-primary-300">CORK</span>
                    </h2>
                    <p className="text-sm font-bold">
                        New Here?
                        <Link to='/signup' className="ml-1 mb-1 border-b border-primary-300 text-primary-300">
                            Create an account
                        </Link>
                    </p>
                </div>

                <form className="" onSubmit={(event) => {
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
                    <div className="pb-2">
                        <div className='h-12 box-content relative flex border-b border-gray-200 pt-2.5 mb-6'>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <FiUser className="w-6 h-6 top-4 absolute fill-primary text-primary-300" />
                            <input id="email-address" name="email" type="email" autoComplete="email" value={data.email} onBlur={(event) => handleBlur(event)} onChange={(event) => handleChange(event)} required className="appearance-none pl-9 pb-2.5 w-full outline-none" placeholder="Email address" />
                        </div>
                        {touchedState.email && <div className='text-xs text-red-600'>{emailError}</div>}
                        <div className='h-12 box-content relative flex border-b border-gray-200 pt-2.5 mb-6'>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <FiLock className="w-6 h-6 top-4 absolute fill-primary text-primary-300" />
                            <input id="password" name="password" type="password" autoComplete="current-password" value={data.password} onBlur={(event) => handleBlur(event)} onChange={(event) => handleChange(event)} required className="appearance-none pl-9 pb-2.5 w-full outline-none" placeholder="Password" />
                        </div>
                        {touchedState.password && <div className='text-xs text-red-600'>{passwordError}</div>}
                    </div>

                    <div className="flex items-center justify-between">


                        <label htmlFor="show-password" className="text-sm text-semibold flex cursor-pointer">
                            Show Password
                            <div className="ml-2 -mt-1.5">
                                <Switch
                                    checked={showPassword}
                                    onChange={setShowPassword}
                                    className={`${showPassword ? 'bg-primary-300' : 'bg-primary-100'
                                        } relative  w-8.5 h-4.5 rounded-full transform ease-in-out duration-300`}
                                >

                                    <span
                                        className={`${showPassword ? 'translate-x-4.5 bg-white' : 'translate-x-0 bg-primary-300'
                                            } absolute left-0.5 top-0.5  w-3.5 h-3.5 rounded-full transform ease-in-out duration-300`}
                                    />
                                </Switch>
                            </div>

                        </label>


                        <button className='py-2 px-5 rounded text-sm bg-primary-300 text-white align-middle shadow-primary-shadow hover:shadow-none transform ease-in-out duration-300'>
                            Log In
                        </button>
                    </div>
                    <div className="flex items-center justify-center pt-1 mt-14 mr-4 mb-2">
                        <div className='relative'>
                        <FaCheck className={'inline-block h-2 w-2 text-primary-300 '}></FaCheck>
                        <input id="remember-me" name="remember-me" checked={remember} onClick={()=>setRemember((r)=>!r)} type="checkbox" className="absolute -left-1 top-1.5 appearance-none h-4 w-4 border border-gray-400 bg-gray-200 rounded checked:bg-transparent checked:border-2 checked:border-primary-300" />
                        
                        </div>
                        <label htmlFor="remember-me" className="ml-4 text-sm text-gray-400">
                            Keep me logged in
                        </label>
                    </div>
                    <div className='flex justify-center pt-4'>
                        <Link to="/forgot-password" className='text-15 font-semibold tracking-0.125 text-primary-300'>Forgot Password?</Link>
                    </div>
                    <div className='mt-90'>
                        <p className='text-sm font-semibold'>
                        © 2020 All Rights Reserved. 
                        <Link to='/' className='text-primary-300'>CORK</Link> is a product of Designreset.
                        <Link to='/'  className='text-primary-300'> Cookie Preferences</Link>, 
                        <Link to='/'  className='text-primary-300'> Privacy</Link>, and 
                        <Link to='/'  className='text-primary-300'> Terms</Link>.
                        </p>
                    </div>
                    {/* <div className='mt-5'>
                        <button
                            disabled={(!touchedState.email || !touchedState.password || emailError !== '' || passwordError !== '') ? true : false
                            }
                            type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                                <HiLockClosed></HiLockClosed>
                            </span>
                            Sign in
                        </button>
                        {submitting && <FaSpinner className='animate-spin mt-5' />}
                    </div> */}
                </form>
            </div>
        </div >
        </div>
    );
}

export default React.memo(LoginPage);