import React from 'react';
interface Props{}

const AuthHero:React.FC<Props> = ()=>{
    return(
        <div className='h-screen w-1/2 bg-black'>
            This is Auth LOgo
        </div>
    );
}

export default React.memo(AuthHero);