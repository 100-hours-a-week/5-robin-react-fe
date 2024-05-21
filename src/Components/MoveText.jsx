import React from 'react';
import '../styles/moveText.css';

function MoveText({text}) {
    return (
        <section className='moveText'>
            <p><a href='/'>{text}</a></p>
        </section>
    );
}

export default MoveText;