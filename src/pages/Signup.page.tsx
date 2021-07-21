import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Switch, Transition } from '@headlessui/react';
import * as yup from 'yup';
import {useFormik} from 'formik';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { FaCheck, FaSpinner } from 'react-icons/fa';
import { FiLock, FiUser } from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';
interface Props{}

const SignupPage:React.FC<Props> = ()=>{
    const myFormValidator = yup.object().shape({
        username: yup.string().required().min(2), 
        email: yup.string().required('*Email is a required feild').email('*Email must be a valid E-mail'),
        password: yup.string().required('*Password is a required feild').min(8, ({ min }) => `*Atleast ${min} charecters`)
    });
    const myForm = useFormik({
        initialValues: {
            username : "",
            email: "",
            password: ""
        },
        validationSchema: myFormValidator,
        onSubmit: (data, helpers) => {
            console.log(data);
            setTimeout(() => {
                helpers.setSubmitting(false);
                history.push('/dashboard');
            }, 5000)
        }
    });

    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [termsNConditions, setTermsNConditions] = useState(false);
    return(
        <div className='w-1/2'>
            <div className="h-screen flex-1 text-accent tracking-wide">
                <div className="font-primary-300 box-content py-3 px-11 w-3/5 m-auto">
                    <div className='mb-13'>
                        <h2 className="text-4.5xl mb-2 ">
                        Get started with a free account
                        </h2>
                        <p className="text-sm font-bold">
                        Already have an account?
                            <Link to='/login' className="ml-1 mb-1 border-b border-primary-300 text-primary-300">
                                Log in
                            </Link>
                        </p>
                    </div>

                    <form className="" onSubmit={myForm.handleSubmit}>
                        <div className="pb-2">
                            <Input Icon={FiUser} touched={myForm.touched.username} error={myForm.errors.username} {...myForm.getFieldProps('username')} id="username" type="text" autoComplete="username" placeholder="Username" required />
                            <Input Icon={HiOutlineMail} touched={myForm.touched.email} error={myForm.errors.email} {...myForm.getFieldProps('email')} id="email-address" type="email" autoComplete="current-email" placeholder="E-mail" required />
                            <Input Icon={FiLock} touched={myForm.touched.password} error={myForm.errors.password} {...myForm.getFieldProps('password')} id="password" type={(showPassword ? "text" : "password")} autoComplete="current-password" placeholder="Password" required />
                        </div>
                        <div className="flex mb-5">
                            <div className='relative'>
                                <FaCheck className={'inline-block h-2 w-2 text-primary-300 '}></FaCheck>
                                <input id="remember-me" name="remember-me" checked={termsNConditions} onClick={() => setTermsNConditions((r) => !r)} type="checkbox" className="absolute -left-1 top-1.5 appearance-none h-4 w-4 border border-gray-400 bg-gray-200 rounded checked:bg-transparent checked:border-2 checked:border-primary-300" />

                            </div>
                            <label htmlFor="termsNconditions" className="ml-4 text-sm text-gray-400">
                                I agree to the <span className='text-primary-300'>terms and conditions</span>
                            </label>
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


                            <Button theme='secondry' disabled={!myForm.isValid} type="submit">Get Started!</Button>
                        </div>
                        <div className='mt-5'>
                            {myForm.isSubmitting && <FaSpinner className='animate-spin mt-5' />}
                        </div>
                        <div className='mt-90'>
                            <p className='text-sm font-semibold'>
                                © 2020 All Rights Reserved.
                                <Link to='/' className='text-primary-300'>CORK</Link> is a product of Designreset.
                                <Link to='/' className='text-primary-300'> Cookie Preferences</Link>,
                                <Link to='/' className='text-primary-300'> Privacy</Link>, and
                                <Link to='/' className='text-primary-300'> Terms</Link>.
                            </p>
                        </div>

                    </form>
                </div>
            </div >
        </div>
    );
}

export default React.memo(SignupPage);