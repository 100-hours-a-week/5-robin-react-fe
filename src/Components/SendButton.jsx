import React from 'react';
import '../styles/sendbutton.css';

function Sendbutton({text}) {
    return (
        <section className='send-btn'>
            <button
            >
              <p>{text}</p>
            </button>
        </section>
    );
}

export default Sendbutton;