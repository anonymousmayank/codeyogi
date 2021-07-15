import React from 'react';
import {Link} from 'react-router-dom';

interface Props{

}

const LoginPage:React.FC<Props> = ()=>{
    return(
        <div>
            This is Login Page
            <div>Don't have an account? </div>
            <Link to='/signup' className='text-blue-500'>Sign Up</Link>
        </div>
    );
}

export default React.memo(LoginPage);