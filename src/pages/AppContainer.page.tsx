import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNavbar from '../components/sideNavbar';
import Dashboard from './Dashboard.page';
import Recordings from './Lectures.page';

interface Props{}

const AppContainer:React.FC<Props> = ()=>{
    return(
        <div className='flex flex-row'>
            <SideNavbar></SideNavbar>
            <Switch>
                <Route path='/dashboard'><Dashboard></Dashboard></Route>
                <Route path='/batch/:batchNumber/lecture/:lectureNumber'><Recordings></Recordings></Route>
            </Switch>
        </div>
    );
}

export default React.memo(AppContainer);