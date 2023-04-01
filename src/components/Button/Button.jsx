import React from 'react';

const Button = ({children}) => {
    return (
        <div className='text-center'>
            <button className="btn btn-active btn-accent">{children}</button>
        </div>
    );
};

export default Button;