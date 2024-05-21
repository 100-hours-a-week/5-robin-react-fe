import React from 'react';
import '../styles/InputField.css';

function InputField({label, type, placeholder, name, title, helper}) {
    return (
        <section className='inputContainer'>
            <div className='inputField'>
                <p className='title'>{label}</p>
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    title={title}
                />
                {helper && <p className='helper' id='helper-text'>{helper}</p>}
            </div>
        </section>
    );
}

export default InputField;