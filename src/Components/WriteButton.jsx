import React from 'react';
import '../styles/writebutton.css';

function WriteButton({text}) {
    return (
        <section className='write-btn-container'>
            <div className='write-btn-field'>
            <button
            className='write-btn'
            >
              <p>{text}</p>
            </button>
            </div>
        </section>
    );
}

export default WriteButton;