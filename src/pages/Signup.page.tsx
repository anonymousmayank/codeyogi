import React from 'react';
import { Link } from 'react-router-dom';
interface Props{}

const SignupPage:React.FC<Props> = ()=>{
    return(
        <div>
            This is Signup Page
            <div>Already have an account? </div>
            <Link to='/login' className='text-blue-500'>Login</Link>
        </div>
    );
}

export default React.memo(SignupPage);