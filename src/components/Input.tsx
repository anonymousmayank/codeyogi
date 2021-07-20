import React, { InputHTMLAttributes } from 'react';
import { FiUser } from 'react-icons/fi';
interface Props extends InputHTMLAttributes<HTMLInputElement>{
    touched?:boolean,
    error?:string
}

const Input:React.FC<Props> = ({touched, error,placeholder, id, ...rest})=>{
    return(
        <>
        <div className='h-12 box-content relative flex border-b border-gray-200 pt-2.5 mb-6'>
                            {id && placeholder && <label htmlFor={id} className="sr-only">{placeholder}</label>}
                            <FiUser className="w-6 h-6 top-4 absolute fill-primary text-primary-300" />
                            <input {...rest} id={id} className="appearance-none pl-9 pb-2.5 w-full outline-none" placeholder={placeholder} />
                        </div>
                        {touched && <div className='text-xs text-red-600'>{error}</div>}
        </>
    );
}

export default React.memo(Input);