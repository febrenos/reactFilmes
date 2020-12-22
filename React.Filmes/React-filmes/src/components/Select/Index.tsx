import React, { SelectHTMLAttributes } from 'react';
import './style.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name:string;
}
const Select: React.FC<SelectProps> = ({name, ...rest}) => {
    return(
        <div>
            <select className="selects" name={name} {...rest}></select>
        </div>
    );
}

export default Select;