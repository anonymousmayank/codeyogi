import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthHero from '../components/AuthHero';
import LoginPage from './Login.page';
import SignupPage from './Signup.page';

interface Props{}

const AuthPage:React.FC<Props> = ()=>{
    return(
        <div className='flex felx-row justify-between'>
            <Switch>
                <Route path='/login'><LoginPage></LoginPage></Route>
                <Route path='/signup'><SignupPage></SignupPage></Route>
            </Switch>
            <AuthHero></AuthHero>
        </div>
    );
}

export default React.memo(AuthPage);