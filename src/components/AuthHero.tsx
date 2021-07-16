import React from 'react';
interface Props{}

const AuthHero:React.FC<Props> = ()=>{
    return(
        <div className='fixed right-0 h-screen w-1/2 bg-black bg-authHero bg-center bg-75% bg-no-repeat'>
            This is Auth LOgo
        </div>
    );
}

export default React.memo(AuthHero);