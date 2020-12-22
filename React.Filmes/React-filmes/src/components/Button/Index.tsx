import React, {ButtonHTMLAttributes} from 'react';
import './style.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    name:string;
}

const Button: React.FC<ButtonProps> = ({name, onClick,...rest}) => {
    return(
        <div className="btn">
            <input className="buttons" type="submit" value={name}/>
        </div>
    );
}

export default Button;