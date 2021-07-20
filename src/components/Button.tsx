import React, { ButtonHTMLAttributes } from 'react';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
}

const Button: React.FC<Props> = ({ disabled, children, ...rest }) => {
    return (
        <button
            disabled={disabled}
            className="py-2 px-5 rounded text-sm bg-primary-300 text-white align-middle shadow-primary-shadow hover:shadow-none transform ease-in-out duration-300" {...rest}>
            {children}
        </button>
    );
}

export default React.memo(Button);