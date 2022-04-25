import React, { ReactChildren, ReactChild } from 'react';

interface Props{
    OpenDropdown: ()=>void
    open:boolean
    children: ReactChild | ReactChildren;
    
}

export const Button:React.FC<Props> = ({OpenDropdown, children}:Props)=>{
    return (
        <div onClick={OpenDropdown}>
            {children}
        </div>
    )
}