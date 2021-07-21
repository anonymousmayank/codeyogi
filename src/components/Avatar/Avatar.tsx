import React from 'react';

interface Props{
    size: 'xl' | 'lg' | 'md' | 'sm',
    image:string,
    status?: 'online' | 'offline' | undefined
}

const Avatar:React.FC<Props> = ({size, image, status})=>{
    console.log(status===undefined);
    let avatarTheme='';
    let statusTheme = status==='online'?'bg-green-600':'bg-gray-500'
    if(size==='xl') avatarTheme='h-21 w-21';
    else if(size==='lg') avatarTheme='h-16 w-16';
    else if(size==='md') avatarTheme='h-12 w-12';
    else if(size==='sm') avatarTheme='h-10 w-10';
    return(
        <div className={'relative rounded-full '+avatarTheme}>
        <img className="object-contain" src={image} alt='user avatar'/>
        {status!==undefined && <div className={'absolute h-28% w-28% border-3 border-white rounded-full right-5% bottom-1% '+statusTheme }></div>}
        </div>
    );
}


export default React.memo(Avatar); 