import React, { ButtonHTMLAttributes } from 'react';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?:'primary' | 'secondry';
}

const Button: React.FC<Props> = ({theme, className, children, ...rest }) => {
    const buttonTheme=theme==='primary'?'bg-primary-300 shadow-primary-shadow':'bg-gray-600 shadow-secondry-shadow'
    return (
        <button
            className={"py-2 px-5 rounded text-sm text-white align-middle hover:shadow-none transform ease-in-out duration-300 "+buttonTheme} {...rest}>
            {children}
        </button>
    );
}
Button.defaultProps={
    theme:'primary'
}

export default React.memo(Button);