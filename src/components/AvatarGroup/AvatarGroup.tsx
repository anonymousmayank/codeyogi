import React from 'react';
import { ReactElement } from 'react';
interface Props{
    children: ReactElement[]
}

const AvatarGroup:React.FC<Props> = ({children})=>{
    let extra;
    if(children.length>4){
        extra=children.length-4;
        children=children.slice(0,4);
    }
    return(
        <div className='flex items-center -space-x-3'>
            {children.map((avatar, index)=>{
                return (
                    <div className={'rounded-full ring-2 ring-white shadow-md transform duration-300 ease-in-out hover:-translate-y-2 z-'+(index*10)}>
                        {avatar}
                    </div>
                    );
            })}
            {extra && <div className='p-2 z-40 text-xs text-primary-300 font-semibold bg-white rounded-full shadow-md'>+{extra} more</div>}
        </div>
    );
}

export default React.memo(AvatarGroup);