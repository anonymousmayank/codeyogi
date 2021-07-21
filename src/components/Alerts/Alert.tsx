import React from 'react';
import {IoMdClose} from 'react-icons/io';
interface Props{
    type: 'Warning' | 'Success' | 'Info' | 'Error';
    children:string
}

const Alert:React.FC<Props> = ({type, children})=>{
    let alertTheme='';
    if(type==='Warning') alertTheme='text-yellow-600 bg-yellow-50';
    else if(type==='Success') alertTheme='text-green-600 bg-green-50';
    else if(type==='Info') alertTheme='text-blue-600 bg-blue-50';
    else if(type==='Error') alertTheme='text-red-600 bg-red-50';
    return(
        <div className={'flex justify-between items-center p-4 mb-6 rounded-5 text-sm ' + alertTheme}>
            <div>
                <span className='font-semibold'>{type+"! "}</span>
                {children}
            </div>
            <IoMdClose className="h-5 w-5"></IoMdClose>
        </div>
    );
}

export default React.memo(Alert);