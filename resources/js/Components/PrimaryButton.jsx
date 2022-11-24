import React from 'react';

export default function PrimaryButton({ type = 'submit', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `btn inline-flex items-center px-4 py-2 bg-gray-800 text-white uppercase transition ease-in-out duration-300 ${
                    processing && 'loading'
                } ` + className
            }
        >
            {children}
        </button>
    );
}
