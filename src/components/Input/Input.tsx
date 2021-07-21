import React, { InputHTMLAttributes } from 'react';
import { FiUser } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    touched?: boolean,
    error?: string,
    type?:'email' | 'password' | 'text',
    Icon?:IconType
}

const Input: React.FC<Props> = ({ touched, error, placeholder, Icon, id, ...rest }) => {
    const errorTheme=(error&&touched)?'border-red-500':'border-gray-200';
    return (
        <div className='relative'>
            <div className={'h-12 box-content relative flex border-b pt-2.5 mb-6 '+errorTheme }>
                {id && placeholder && <label htmlFor={id} className="sr-only">{placeholder}</label>}
                {Icon && <Icon className="w-6 h-6 top-4 absolute fill-primary text-primary-300" />}
                
                <input {...rest} id={id} className="appearance-none pl-9 pb-2.5 w-full outline-none" placeholder={placeholder} />
            </div>
            {touched && <div className='absolute top-16 right-0 text-xs font-semibold text-red-500'>{error}</div>}
        </div>
    );
}

Input.defaultProps={
    touched:false,
    type:'text'
}

export default React.memo(Input);