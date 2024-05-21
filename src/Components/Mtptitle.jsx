import React from 'react';
import '../styles/mtptitle.css';

function Mtptitle({text}) {
    return (
        <section className='mtptitle'>
            <h2>{text}</h2>
        </section>
    );
}

export default Mtptitle;