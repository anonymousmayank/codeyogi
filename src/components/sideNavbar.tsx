import React from 'react';
interface Props{}

const SideNavbar:React.FC<Props> = ()=>{
    return(
        <div className='h-screen w-1/5 bg-gray-400'>
            This is side navbar
        </div>
    );
}

export default React.memo(SideNavbar);