import React from "react";
import "./Button.scss"
import classNames from 'classnames';

export default function Button({children, size, color, outline, fullwidth, className, ...rest }){
    // console.log(rest);
return <button 
    className={classNames(
    'Button', 
    size, 
    color, 
    {
        outline, fullwidth
    },
    className
    )} 
    {...rest}>{children}</button>
}